import { NO_ERRORS_SCHEMA } from "@angular/core";
import { MeasureUnitComponent } from "./measureUnit.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("MeasureUnitComponent", () => {

  let fixture: ComponentFixture<MeasureUnitComponent>;
  let component: MeasureUnitComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [MeasureUnitComponent]
    });

    fixture = TestBed.createComponent(MeasureUnitComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
