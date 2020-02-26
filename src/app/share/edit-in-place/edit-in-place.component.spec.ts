import { NO_ERRORS_SCHEMA } from "@angular/core";
import { EditInPlaceComponent } from "./edit-in-place.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("EditInPlaceComponent", () => {

  let fixture: ComponentFixture<EditInPlaceComponent>;
  let component: EditInPlaceComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [EditInPlaceComponent]
    });

    fixture = TestBed.createComponent(EditInPlaceComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
