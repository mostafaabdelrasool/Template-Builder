import { NO_ERRORS_SCHEMA } from "@angular/core";
import { DataMapperSettingComponent } from "./data-mapper-setting.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("DataMapperSettingComponent", () => {

  let fixture: ComponentFixture<DataMapperSettingComponent>;
  let component: DataMapperSettingComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [DataMapperSettingComponent]
    });

    fixture = TestBed.createComponent(DataMapperSettingComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
