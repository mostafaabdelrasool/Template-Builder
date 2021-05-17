import { Injectable } from '@angular/core';
import { FieldDataSource } from '../builder/model/data-source';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FeatureSubmission } from './model/feature-submission';

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
  loadAllFeatureData(featureId: string): Observable<FeatureSubmission[]> {
    return this.http.get<FeatureSubmission[]>(environment.apiUrl + 'api/FeatureSubmission/GetAllFeature', { params: { featureId: featureId } })
  }
}


