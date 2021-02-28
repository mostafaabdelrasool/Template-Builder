import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TabFieldRenderComponent } from "./tab-field-render.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("TabFieldRenderComponent", () => {

  let fixture: ComponentFixture<TabFieldRenderComponent>;
  let component: TabFieldRenderComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [TabFieldRenderComponent]
    });

    fixture = TestBed.createComponent(TabFieldRenderComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
