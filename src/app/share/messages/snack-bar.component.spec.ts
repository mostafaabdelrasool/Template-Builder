import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SnackBarComponent } from "./snack-bar.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("SnackBarComponent", () => {

  let fixture: ComponentFixture<SnackBarComponent>;
  let component: SnackBarComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [SnackBarComponent]
    });

    fixture = TestBed.createComponent(SnackBarComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
