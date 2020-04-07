import { NO_ERRORS_SCHEMA } from "@angular/core";
import { RadioButtonFieldComponent } from "./radio-button-field.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("RadioButtonFieldComponent", () => {

  let fixture: ComponentFixture<RadioButtonFieldComponent>;
  let component: RadioButtonFieldComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [RadioButtonFieldComponent]
    });

    fixture = TestBed.createComponent(RadioButtonFieldComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
