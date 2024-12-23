import { DataService } from "./data.api/data.service";
import { BehaviorSubject } from "rxjs";

export class BaseComponent<T> {
  private _data: T[];
  dataSubject: BehaviorSubject<T[]>;
  constructor(public url: string, public dataService: DataService) {
    this.dataSubject = new BehaviorSubject<T[]>([]);
  }
  save = (item: T) => {
    return this.dataService.post(item).subscribe((x) => {
      this._data.push(x as T);
      this.dataSubject.next(this._data);
    });
  };
  update = (item: T) => {
    return this.dataService.put(item).subscribe();
  };

  load = () => {
    return this.dataService.get().subscribe((x) => {
      this._data = x as T[];
      this.dataSubject.next(this._data);
    });
  };
  delete = (item: T) => {
    return this.dataService.delete(item["id" as keyof typeof item]);
  };

  loadWithFilter = (filter: any) => {
    return this.dataService.getWithFilter(filter).subscribe((x) => {
      this._data = x as T[];
      this.dataSubject.next(this._data);
    });
  };

  OnDestroy() {
    this.dataSubject.unsubscribe();
  }
}
