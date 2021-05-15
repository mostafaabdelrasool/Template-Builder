import { NO_ERRORS_SCHEMA } from "@angular/core";
import { FormLoadingComponent } from "./form-loading.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("FormLoadingComponent", () => {

  let fixture: ComponentFixture<FormLoadingComponent>;
  let component: FormLoadingComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [FormLoadingComponent]
    });

    fixture = TestBed.createComponent(FormLoadingComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
