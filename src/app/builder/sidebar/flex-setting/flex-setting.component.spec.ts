import { NO_ERRORS_SCHEMA } from "@angular/core";
import { FlexSettingComponent } from "./flex-setting.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("FlexSettingComponent", () => {

  let fixture: ComponentFixture<FlexSettingComponent>;
  let component: FlexSettingComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [FlexSettingComponent]
    });

    fixture = TestBed.createComponent(FlexSettingComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
