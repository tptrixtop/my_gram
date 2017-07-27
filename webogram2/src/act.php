<?php

header('Content-Type: application/json');

print json_encode([
    'status' => 0,
    'msg' => 'OK',
    'data' => [
        'd' => time()
    ]
]);
