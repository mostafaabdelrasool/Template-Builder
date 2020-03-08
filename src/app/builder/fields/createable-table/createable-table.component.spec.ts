import { NO_ERRORS_SCHEMA } from "@angular/core";
import { CreateableTableComponent } from "./createable-table.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("CreateableTableComponent", () => {

  let fixture: ComponentFixture<CreateableTableComponent>;
  let component: CreateableTableComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [CreateableTableComponent]
    });

    fixture = TestBed.createComponent(CreateableTableComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
