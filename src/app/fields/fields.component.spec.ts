import { NO_ERRORS_SCHEMA } from "@angular/core";
import { FieldsComponent } from "./fields.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("FieldsComponent", () => {

  let fixture: ComponentFixture<FieldsComponent>;
  let component: FieldsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [FieldsComponent]
    });

    fixture = TestBed.createComponent(FieldsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
