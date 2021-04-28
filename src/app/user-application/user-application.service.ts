import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DataService } from "../core/data.api/data.service";
import { Observable } from 'rxjs';
import { UserApplication } from "./model/user-application";
import { Feature } from './../admin/model/feature';

/**
 * @description
 * @class
 */
@Injectable()
export class UserApplicationService extends DataService {


  constructor(http: HttpClient) {
    super(http);
    this._controller = "api/UserApplication/"
  }
  getUserApplication(): Observable<UserApplication[]> {
    return this.getUrl(this._controller + "GetUserApplication");
  }
  getApplicationFeatures(appId: string): Observable<Feature[]> {
    return this.http.post<Feature[]>(this._url + "api/Feature/Search", [{ columnName: "applicationId", operator: "=", value: appId }]);
  }
}
