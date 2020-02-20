import { NO_ERRORS_SCHEMA } from "@angular/core";
import { StyleToCssComponent } from "./style--to-css.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("StyleToCssComponent", () => {

  let fixture: ComponentFixture<StyleToCssComponent>;
  let component: StyleToCssComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [StyleToCssComponent]
    });

    fixture = TestBed.createComponent(StyleToCssComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
