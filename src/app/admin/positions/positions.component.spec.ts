import { NO_ERRORS_SCHEMA } from "@angular/core";
import { PositionsComponent } from "./positions.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("PositionsComponent", () => {

  let fixture: ComponentFixture<PositionsComponent>;
  let component: PositionsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [PositionsComponent]
    });

    fixture = TestBed.createComponent(PositionsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
