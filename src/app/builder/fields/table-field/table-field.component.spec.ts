import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TableFieldComponent } from "./table-field.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("TableFieldComponent", () => {

  let fixture: ComponentFixture<TableFieldComponent>;
  let component: TableFieldComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [TableFieldComponent]
    });

    fixture = TestBed.createComponent(TableFieldComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
