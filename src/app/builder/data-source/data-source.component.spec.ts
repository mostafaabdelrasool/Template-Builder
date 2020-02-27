import { NO_ERRORS_SCHEMA } from "@angular/core";
import { DataSourceComponent } from "./data-source.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("DataSourceComponent", () => {

  let fixture: ComponentFixture<DataSourceComponent>;
  let component: DataSourceComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [DataSourceComponent]
    });

    fixture = TestBed.createComponent(DataSourceComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
