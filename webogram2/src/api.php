<?php


use Interop\Http\ServerMiddleware\DelegateInterface;
use Zend\Cache\StorageFactory;
use Zend\Diactoros\Response\JsonResponse;
use Zend\Expressive\AppFactory;

chdir(dirname(__DIR__));
require 'vendor/autoload.php';

$app = AppFactory::create();
$app->get('/api/get-country-list', function ($request, DelegateInterface $delegate) {

    $cache_adapter = StorageFactory::factory([
        'adapter' => [
            "name" => "filesystem",
            "options" => [
                "ttl" => 3600
            ]
        ],
        'plugins' => [
            "exception_handler" => [
                "throw_exceptions" => false
            ]
        ],
    ]);

    $return_data = $cache_adapter->getItem('country_list');

    if ($return_data === null) {
        $config = array(
            'adapter' => 'Zend\Http\Client\Adapter\Socket',
            'ssltransport' => 'tls'
        );

        $client = new Zend\Http\Client('https://restcountries.eu/rest/v2/', $config);
        $response = $client->send();

        if ($response->getStatusCode() == \Zend\Http\Response::STATUS_CODE_200) {
            $return_data = $response->getBody();
        }

        $cache_adapter->setItem('country_list', $return_data);

    }

    return new JsonResponse(json_decode($return_data));

});

$app->pipeRoutingMiddleware();
$app->pipeDispatchMiddleware();
$app->run();

