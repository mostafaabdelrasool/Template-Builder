import { NO_ERRORS_SCHEMA } from "@angular/core";
import { InputFieldComponent } from "./input-field.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("InputFieldComponent", () => {

  let fixture: ComponentFixture<InputFieldComponent>;
  let component: InputFieldComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [InputFieldComponent]
    });

    fixture = TestBed.createComponent(InputFieldComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
