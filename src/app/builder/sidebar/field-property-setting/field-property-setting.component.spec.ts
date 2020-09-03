import { NO_ERRORS_SCHEMA } from "@angular/core";
import { FieldPropertySettingComponent } from "./field-property-setting.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("FieldPropertySettingComponent", () => {

  let fixture: ComponentFixture<FieldPropertySettingComponent>;
  let component: FieldPropertySettingComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [FieldPropertySettingComponent]
    });

    fixture = TestBed.createComponent(FieldPropertySettingComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
