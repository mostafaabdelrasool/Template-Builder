import { NO_ERRORS_SCHEMA } from "@angular/core";
import { BuilderComponent } from "./builder.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("BuilderComponent", () => {

  let fixture: ComponentFixture<BuilderComponent>;
  let component: BuilderComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [BuilderComponent]
    });

    fixture = TestBed.createComponent(BuilderComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
