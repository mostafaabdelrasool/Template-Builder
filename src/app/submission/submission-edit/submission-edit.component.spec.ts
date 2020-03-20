import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SubmissionEditComponent } from "./submission-edit.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("SubmissionEditComponent", () => {

  let fixture: ComponentFixture<SubmissionEditComponent>;
  let component: SubmissionEditComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [SubmissionEditComponent]
    });

    fixture = TestBed.createComponent(SubmissionEditComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
