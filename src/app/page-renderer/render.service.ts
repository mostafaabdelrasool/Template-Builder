import { Injectable } from '@angular/core';
import { FieldDataSource } from '../builder/model/data-source';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RenderService {
  data: any = {}
  constructor(private http: HttpClient) { }
  initData() {
    this.data = {};
  }
  getDataSourceData(dataSource: FieldDataSource): Observable<any> {
    let observerable =new Observable(observer => {
      if (dataSource.url) {
        this.http.get(dataSource.url).subscribe(x => {
          dataSource.data = x;
          observer.next(x)
        });
      } else {
        dataSource.data = dataSource.staticData
        observer.next(dataSource.data);
      }
    });

    return observerable;
  }
}


