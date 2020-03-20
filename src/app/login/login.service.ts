import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { DataService } from '../core/data.api/data.service';

/**
 * @description
 * @class
 */
@Injectable()
export class LoginService extends DataService {

  constructor(public http:HttpClient) {
    super(http)
  }
  login(data){
   return this.http.post(this._url+'api/Account/Login',data);
  }

}
