/**
* This class contains custom pipes to filter through various arrays on the fulfillment page
* Specifically, it will filter the arrays that make up ngFor displays for skus & orders
* SOURCES:
* Filtering an ngFor - http://stackoverflow.com/questions/34164413/how-to-apply-filters-to-ngfor
* Angular 2 pipes - https://angular.io/docs/ts/latest/guide/pipes.html
* Making pipes availble throughout app - http://stackoverflow.com/questions/40457744/angular2-custom-pipe-could-not-be-found
* Pipes with multiple arguments - http://stackoverflow.com/questions/36816788/how-do-i-call-an-angular-2-pipe-with-multiple-arguments
* @author Adebanke Alabi
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "filterByProperty",
    pure: false
})
export class filterPropertyByPipe implements PipeTransform{
    /**
    * Function to filter objects in an array based on a key that contains a string
    * @param inputArray (Array<Object>) The array we are filtering
    * @param propertyName (string) The key property we are using to filter each object in the array
    * @param filterTerm (string) The value we are hoping to find in the key property
    * @return  a new array of objects that contain the filterTerm at the key property
    */
    transform(inputArray, propertyName:string, filterTerm:string): Array<any>{
        return inputArray.filter(obj => {
            return obj[propertyName].toLowerCase()
            .includes(filterTerm.toLowerCase())
        });
    }
}
