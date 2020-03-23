import { NO_ERRORS_SCHEMA } from "@angular/core";
import { FormEditComponent } from "./form-edit.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("FormEditComponent", () => {

  let fixture: ComponentFixture<FormEditComponent>;
  let component: FormEditComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [FormEditComponent]
    });

    fixture = TestBed.createComponent(FormEditComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
