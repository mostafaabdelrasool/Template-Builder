import { DataService } from './data.api/data.service';
import { BehaviorSubject } from 'rxjs';
import { OnDestroy } from '@angular/core';

export class BaseComponent<T> {
  private _data: T[];
  dataSubject: BehaviorSubject<T[]>;
  constructor(public url, public dataService: DataService) {
    this.dataSubject = new BehaviorSubject<T[]>([]);
  }
  save = (item: T) => {
    return this.dataService.post(item).subscribe((x: T) => {
      this._data.push(x);
      this.dataSubject.next(this._data)
    });
  }
  update = (item: T) => {
    return this.dataService.put(item).subscribe((x: T[]) => {
    });
  }

  load = () => {
    return this.dataService.get().subscribe((x: T[]) => {
      this._data = x
      this.dataSubject.next(this._data)
    });
  }
  delete = (item: T) => {
    return this.dataService.delete(item['id'])
  }

  loadWithFilter = (filter) => {
    return this.dataService.getWithFilter(filter).subscribe((x: T[]) => {
      this._data = x
      this.dataSubject.next(this._data)
    });
  }

  OnDestroy() {
    this.dataSubject.unsubscribe();
  }
}
