import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ButtonFieldRenderComponent } from "./button-field-render.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ButtonFieldRenderComponent", () => {

  let fixture: ComponentFixture<ButtonFieldRenderComponent>;
  let component: ButtonFieldRenderComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ButtonFieldRenderComponent]
    });

    fixture = TestBed.createComponent(ButtonFieldRenderComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
