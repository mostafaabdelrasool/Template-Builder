import { Injectable } from '@angular/core';
import { FieldDataSource } from '../builder/model/data-source';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FeatureSubData, FeatureSubmission } from './model/feature-submission';
import { ExtractAndMapAllPorps } from '../share/json-parser/extract-props';

@Injectable({
  providedIn: 'root'
})
export class RenderService {
  data: any = {}
  featureId: string;
  featureName: string;
  dataRetrieved: Subject<any> = new Subject<any>();
  reloadData: Subject<any> = new Subject<any>();
  loadFormFeature: Subject<string> = new Subject<string>();
  private previousFormId: string;
  constructor(private http: HttpClient) { }
  initData(featureId: string) {
    this.data = {};
    this.featureId = featureId;
  }
  setPreviosFormId(formId) {
    this.previousFormId = formId;
  }
  getPreviosFormId() {
    return this.previousFormId;
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
  loadFeatureById(featureId: string, id: string) {
    return this.http.get<FeatureSubData>(environment.apiUrl + 'api/FeatureSubmission/GetFeatureById',
      { params: { featureId: featureId, id: id } })
  }
  updateFeature(featureId: string, data: any) {
    const id = data.id;
    delete data.id;
    return this.http.post(environment.apiUrl + 'api/FeatureSubmission/UpdateFeature',
      { id: id, dataJson: JSON.stringify(data) }, { params: { featureId: featureId } });
  }
  deleteFeatureById(featureId: string, id: string) {
    return this.http.post(environment.apiUrl + 'api/FeatureSubmission/DeleteFeatureById',
    {}, { params: { featureId: featureId , id: id } });
  }
  setData(value: FeatureSubData) {
    if (value) {
      this.data = {};
      const parsed = JSON.parse(value.dataJson);
      this.data["id"] = value.id;
      ExtractAndMapAllPorps(parsed, this.data)
    }
  }
  setArrayData(value: FeatureSubData[], propName: string) {
    if (value) {
      this.data = {};
      this.featureName = propName;
      this.data[propName] = [];
      value.forEach(x => {
        const parsed = JSON.parse(x.dataJson);
        let val = { id: x['id'] }
        ExtractAndMapAllPorps(parsed, val)
        this.data[propName].push(val)
      });
      this.dataRetrieved.next(this.data);
    }
  }
  addFeature(featureId) {
    return this.http.post(environment.apiUrl + 'api/FeatureSubmission/AddFeature', { dataJson: JSON.stringify(this.data) }, { params: { featureId: featureId } });
  }
}


