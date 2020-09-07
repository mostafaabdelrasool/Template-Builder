import { NO_ERRORS_SCHEMA } from "@angular/core";
import { FieldValueSettingComponent } from "./field-value-setting.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("FieldValueSettingComponent", () => {

  let fixture: ComponentFixture<FieldValueSettingComponent>;
  let component: FieldValueSettingComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [FieldValueSettingComponent]
    });

    fixture = TestBed.createComponent(FieldValueSettingComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
