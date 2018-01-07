import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs/Observable";
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpErrorResponse } from "@angular/common/http/src/response";



@Injectable()

export class ProductService{
    private _productUrl ='http://localhost:61085/api/values';
constructor(private _http:HttpClient){

}
getProduct():Observable<IProduct[]>{
  return this._http.get<IProduct[]>(this._productUrl)
  .do(data=>console.log('all'+JSON.stringify(data)))
  .catch(this.handleError);
  
}

private handleError(err:HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message)
}

}