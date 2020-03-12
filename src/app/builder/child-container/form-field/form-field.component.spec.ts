import { NO_ERRORS_SCHEMA } from "@angular/core";
import { FormFieldComponent } from "./form-field.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("FormFieldComponent", () => {

  let fixture: ComponentFixture<FormFieldComponent>;
  let component: FormFieldComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [FormFieldComponent]
    });

    fixture = TestBed.createComponent(FormFieldComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
