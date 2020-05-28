import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ListFieldRenderComponent } from "./list-field-render.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ListFieldRenderComponent", () => {

  let fixture: ComponentFixture<ListFieldRenderComponent>;
  let component: ListFieldRenderComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ListFieldRenderComponent]
    });

    fixture = TestBed.createComponent(ListFieldRenderComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
