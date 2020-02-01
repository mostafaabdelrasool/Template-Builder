import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ChildContainerComponent } from "./child-container.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ChildContainerComponent", () => {

  let fixture: ComponentFixture<ChildContainerComponent>;
  let component: ChildContainerComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ChildContainerComponent]
    });

    fixture = TestBed.createComponent(ChildContainerComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
