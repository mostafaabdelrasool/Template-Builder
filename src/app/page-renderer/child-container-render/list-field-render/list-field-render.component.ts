import { Component, OnInit, Input } from "@angular/core";
import { ListField } from 'src/app/builder/model/field';
import { RenderService } from '../../render.service';
import { getPathData } from 'src/app/share/object-func';

@Component({
  selector: "app-list-field-render",
  templateUrl: "./list-field-render.component.html",
  styleUrls: ["./list-field-render.component.scss"]
})

export class ListFieldRenderComponent implements OnInit {
  @Input() container: ListField;
  data: []
  constructor(public renderService: RenderService) {

  }

  ngOnInit() {
    if (this.container.dataSource) {
      this.renderService.getDataSourceData(this.container.dataSource).subscribe(x => this.data = x)
    } else {
      this.data = getPathData(this.renderService.data, this.container.model);
    }
  }
}
