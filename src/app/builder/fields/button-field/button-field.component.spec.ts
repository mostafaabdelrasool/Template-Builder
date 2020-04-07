import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ButtonFieldComponent } from "./button-field.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ButtonFieldComponent", () => {

  let fixture: ComponentFixture<ButtonFieldComponent>;
  let component: ButtonFieldComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ButtonFieldComponent]
    });

    fixture = TestBed.createComponent(ButtonFieldComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
