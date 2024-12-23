import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DataService {
  _url: string;
  _controller: string;
  constructor(public http: HttpClient) {
    this._url = environment.apiUrl;
  }
  get() {
    return this.http.get(this._url + this._controller);
  }
  post(data: any) {
    return this.http.post(this._url + this._controller, data);
  }
  put(data: any) {
    return this.http.put(this._url + this._controller, data);
  }
  delete(id: any) {
    return this.http.delete(this._url + this._controller, {
      params: { id: id },
    });
  }
  getById<T>(id: any) {
    return this.http.get<T>(this._url + this._controller + "/" + id);
  }
  getUrl<T>(url: string) {
    return this.http.get<T>(this._url + url);
  }
  partialUpdate(data: any, props: any) {
    return this.http.post(
      this._url + this._controller + "/PartialUpdate",
      data,
      { params: { props: props } }
    );
  }
  getWithFilter(filter: any) {
    return this.http.get(this._url + this._controller, { params: filter });
  }
}
