import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SelectFieldComponent } from "./select-field.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("SelectFieldComponent", () => {

  let fixture: ComponentFixture<SelectFieldComponent>;
  let component: SelectFieldComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [SelectFieldComponent]
    });

    fixture = TestBed.createComponent(SelectFieldComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
