import { NO_ERRORS_SCHEMA } from "@angular/core";
import { DataSettingComponent } from "./data-setting.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("DataSettingComponent", () => {

  let fixture: ComponentFixture<DataSettingComponent>;
  let component: DataSettingComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [DataSettingComponent]
    });

    fixture = TestBed.createComponent(DataSettingComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
