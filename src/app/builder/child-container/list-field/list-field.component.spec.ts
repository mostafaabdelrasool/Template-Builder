import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ListFieldComponent } from "./list-field.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ListFieldComponent", () => {

  let fixture: ComponentFixture<ListFieldComponent>;
  let component: ListFieldComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ListFieldComponent]
    });

    fixture = TestBed.createComponent(ListFieldComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
