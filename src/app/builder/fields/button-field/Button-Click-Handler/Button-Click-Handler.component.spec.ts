import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ButtonClickHandlerComponent } from "./Button-Click-Handler.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ButtonClickHandlerComponent", () => {

  let fixture: ComponentFixture<ButtonClickHandlerComponent>;
  let component: ButtonClickHandlerComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ButtonClickHandlerComponent]
    });

    fixture = TestBed.createComponent(ButtonClickHandlerComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
