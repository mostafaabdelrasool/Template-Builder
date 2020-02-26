import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TabFieldComponent } from "./tab-field.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("TabFieldComponent", () => {

  let fixture: ComponentFixture<TabFieldComponent>;
  let component: TabFieldComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [TabFieldComponent]
    });

    fixture = TestBed.createComponent(TabFieldComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
