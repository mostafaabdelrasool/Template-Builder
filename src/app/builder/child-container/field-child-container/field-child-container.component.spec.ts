import { NO_ERRORS_SCHEMA } from "@angular/core";
import { FieldChildContainerComponent } from "./field-child-container.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("FieldChildContainerComponent", () => {

  let fixture: ComponentFixture<FieldChildContainerComponent>;
  let component: FieldChildContainerComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [FieldChildContainerComponent]
    });

    fixture = TestBed.createComponent(FieldChildContainerComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
