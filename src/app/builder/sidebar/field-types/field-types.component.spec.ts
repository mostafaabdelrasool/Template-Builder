import { NO_ERRORS_SCHEMA } from "@angular/core";
import { FieldTypesComponent } from "./field-types.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("FieldTypesComponent", () => {

  let fixture: ComponentFixture<FieldTypesComponent>;
  let component: FieldTypesComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [FieldTypesComponent]
    });

    fixture = TestBed.createComponent(FieldTypesComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
