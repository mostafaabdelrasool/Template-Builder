import { NO_ERRORS_SCHEMA } from "@angular/core";
import { FieldRenderComponent } from "./field-render.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("FieldRenderComponent", () => {

  let fixture: ComponentFixture<FieldRenderComponent>;
  let component: FieldRenderComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [FieldRenderComponent]
    });

    fixture = TestBed.createComponent(FieldRenderComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
