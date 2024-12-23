import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  SimpleChanges,
} from "@angular/core";
import { CardField, Containers } from "../builder/model/containers";
import { FormFunction, FormLoadType } from "../builder/model/form-load-type";
import { RenderService } from "./render.service";
import { FeatureSubData, FeatureSubmission } from "./model/feature-submission";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-page-renderer",
  templateUrl: "./page-renderer.component.html",
  styleUrls: ["./page-renderer.component.scss"],
  encapsulation: ViewEncapsulation.None,
  standalone: false,
})
export class PageRendererComponent implements OnInit {
  @Input() containers: Containers[];
  @Input() featureId: string | undefined;
  @Input() formFunction: FormFunction;
  constructor(
    public renderService: RenderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getSetting();
    this.renderService.reloadData.subscribe(() => this.loadData());
  }
  private loadData() {
    this.renderService.initData(this.featureId);
    if (this.formFunction) {
      if (+this.formFunction.loadType === FormLoadType.LOAD_ALL_FEATURE) {
        this.renderService
          .loadAllFeatureData(this.featureId || "")
          .subscribe((x: FeatureSubmission) => {
            if (x) {
              this.renderService.setArrayData(x.data, x.featureName);
            }
          });
      } else if (
        +this.formFunction.loadType === FormLoadType.LOAD_BY_ID &&
        this.route.snapshot.queryParams["id"]
      ) {
        this.renderService
          .loadFeatureById(
            this.featureId || "",
            this.route.snapshot.queryParams["id"]
          )
          .subscribe((x: FeatureSubData) => {
            if (x) {
              this.renderService.setData(x);
            }
          });
      }
    }
  }

  getSetting() {
    //in case of preview
    if (!this.containers) {
      const container = localStorage.getItem("containers");
      if (container) {
        this.containers = JSON.parse(container);
      }
    }
  }
  
  ngOnChanges(changes: SimpleChanges) {
    this.loadData();
  }

    castContainerToCard(item: Containers){
      return item as CardField
    }
}
