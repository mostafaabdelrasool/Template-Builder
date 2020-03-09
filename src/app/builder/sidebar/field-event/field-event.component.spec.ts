import { NO_ERRORS_SCHEMA } from "@angular/core";
import { FieldEventComponent } from "./field-event.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("FieldEventComponent", () => {

  let fixture: ComponentFixture<FieldEventComponent>;
  let component: FieldEventComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [FieldEventComponent]
    });

    fixture = TestBed.createComponent(FieldEventComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
