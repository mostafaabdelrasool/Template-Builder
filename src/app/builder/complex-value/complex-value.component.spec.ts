import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComplexValueComponent } from "./complex-value.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ComplexValueComponent", () => {

  let fixture: ComponentFixture<ComplexValueComponent>;
  let component: ComplexValueComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ComplexValueComponent]
    });

    fixture = TestBed.createComponent(ComplexValueComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
