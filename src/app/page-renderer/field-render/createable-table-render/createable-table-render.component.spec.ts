import { NO_ERRORS_SCHEMA } from "@angular/core";
import { CreateableTableRenderComponent } from "./createable-table-render.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("CreateableTableRenderComponent", () => {

  let fixture: ComponentFixture<CreateableTableRenderComponent>;
  let component: CreateableTableRenderComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [CreateableTableRenderComponent]
    });

    fixture = TestBed.createComponent(CreateableTableRenderComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
