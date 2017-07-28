import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'SearchPipe'})
export class SearchPipe implements PipeTransform {

    transform(data: any, searchFor: string): Array<any> {

        if (searchFor[0] == '+') {
            searchFor = searchFor.substr(1);
        }

        let res = [];

        if (searchFor != '') {
            for (let i of data) {
                if (i.name.toLowerCase().indexOf(searchFor.toLowerCase()) != -1) {
                    res.push(i);
                }
            }
        } else {
            return data;
        }

        for (let i of data) {
            if (i.callingCodes.length > 0 && i.callingCodes[0].indexOf(searchFor) != -1) {
                res.push(i);
            }
        }

        return res;
    }

}
