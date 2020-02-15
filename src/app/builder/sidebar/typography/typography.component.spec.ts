import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TypographyComponent } from "./typography.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("TypographyComponent", () => {

  let fixture: ComponentFixture<TypographyComponent>;
  let component: TypographyComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [TypographyComponent]
    });

    fixture = TestBed.createComponent(TypographyComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
