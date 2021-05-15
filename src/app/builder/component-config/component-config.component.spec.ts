import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentConfigComponent } from "./component-config.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ComponentConfigComponent", () => {

  let fixture: ComponentFixture<ComponentConfigComponent>;
  let component: ComponentConfigComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ComponentConfigComponent]
    });

    fixture = TestBed.createComponent(ComponentConfigComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
