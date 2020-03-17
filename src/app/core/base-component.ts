import { DataService } from './data.api/data.service';

export class BaseComponent<T> {

    constructor(public url, public dataService: DataService) {
    }
    save = (item: T) => {
        return this.dataService.post(item);
    }
    update = (item: T) => {
        return this.dataService.put(item);
    }

    load = () => {
        return this.dataService.get();
    }
    delete = (item: T) => {
        return this.dataService.delete(item['id']);
    }
}