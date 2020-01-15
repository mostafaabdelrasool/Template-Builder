import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TopNavComponent } from "./top-nav.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("TopNavComponent", () => {

  let fixture: ComponentFixture<TopNavComponent>;
  let component: TopNavComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [TopNavComponent]
    });

    fixture = TestBed.createComponent(TopNavComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
