import { Injectable } from '@angular/core';
import { FieldDataSource } from '../builder/model/data-source';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FeatureSubData, FeatureSubmission } from './model/feature-submission';
import { ExtractAndMapAllPorps } from '../share/json-parser/extract-props';

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
    let observerable = new Observable(observer => {
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
  loadAllFeatureData(featureId: string): Observable<FeatureSubmission> {
    return this.http.get<FeatureSubmission>(environment.apiUrl + 'api/FeatureSubmission/GetAllFeature', { params: { featureId: featureId } })
  }
  setData(value: FeatureSubData) {
    if (value) {
      const parsed = JSON.parse(value.dataJson);
      this.data["id"] = value.Id;
      ExtractAndMapAllPorps(parsed, this.data)
    }
  }
  setArrayData(value: FeatureSubData[], propName: string) {
    if (value) {
      value.forEach(x => {
        this.data[propName] = [];
        const parsed = JSON.parse(x.dataJson);
        let value = { id: x.Id }
        ExtractAndMapAllPorps(parsed, value)
        this.data[propName].push(value)
      })
    }
  }
  addFeature(featureId) {
    return this.http.post(environment.apiUrl + 'api/FeatureSubmission/AddFeature', { dataJson: JSON.stringify(this.data) }, { params: { featureId: featureId } });
  }
}


