import { NO_ERRORS_SCHEMA } from "@angular/core";
import { FieldActionComponent } from "./field-action.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("FieldActionComponent", () => {

  let fixture: ComponentFixture<FieldActionComponent>;
  let component: FieldActionComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [FieldActionComponent]
    });

    fixture = TestBed.createComponent(FieldActionComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
