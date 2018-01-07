import { Component, Input, Output, EventEmitter } from "@angular/core/";
import { OnChanges } from "@angular/core/src/metadata/lifecycle_hooks";




@Component({
    selector: 'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})

export  class StarComponent implements OnChanges {
    @Input() rating:number;
    //rating:number=4;
    starWidth:number;
   @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    

    ngOnChanges(): void {
        this.starWidth=this.rating*86/5;
    }


    onClick():void{
        console.log(`the rating ${this.rating} was clicked!`)
        this.ratingClicked.emit(`the rating ${this.rating} was clicked!`)
    }
}