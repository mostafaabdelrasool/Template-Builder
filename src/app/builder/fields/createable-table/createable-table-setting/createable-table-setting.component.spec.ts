import { NO_ERRORS_SCHEMA } from "@angular/core";
import { CreateableTableSettingComponent } from "./createable-table-setting.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("CreateableTableSettingComponent", () => {

  let fixture: ComponentFixture<CreateableTableSettingComponent>;
  let component: CreateableTableSettingComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [CreateableTableSettingComponent]
    });

    fixture = TestBed.createComponent(CreateableTableSettingComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
