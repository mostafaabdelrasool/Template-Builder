import { NO_ERRORS_SCHEMA } from "@angular/core";
import { Container.renderComponent } from "./container.render.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("Container.renderComponent", () => {

  let fixture: ComponentFixture<Container.renderComponent>;
  let component: Container.renderComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [Container.renderComponent]
    });

    fixture = TestBed.createComponent(Container.renderComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
