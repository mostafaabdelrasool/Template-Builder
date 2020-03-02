import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ChildContainerRenderComponent } from "./child-container-render.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ChildContainerRenderComponent", () => {

  let fixture: ComponentFixture<ChildContainerRenderComponent>;
  let component: ChildContainerRenderComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ChildContainerRenderComponent]
    });

    fixture = TestBed.createComponent(ChildContainerRenderComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
