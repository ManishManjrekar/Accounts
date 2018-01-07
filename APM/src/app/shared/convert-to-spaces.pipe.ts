import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core/src/change_detection/pipe_transform";



@Pipe({
    name:"convertToSpaces"
})
export class ConvertToSpacesPipe implements PipeTransform{
    // transform(value: any, ...args: any[]) {
    //     throw new Error("Method not implemented.");
    // }

    transform(value:string,character:string):string{
     return value.replace(character,' ');
    }


}