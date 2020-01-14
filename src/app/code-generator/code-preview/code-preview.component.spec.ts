import { NO_ERRORS_SCHEMA } from "@angular/core";
import { CodePreviewComponent } from "./code-preview.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("CodePreviewComponent", () => {

  let fixture: ComponentFixture<CodePreviewComponent>;
  let component: CodePreviewComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [CodePreviewComponent]
    });

    fixture = TestBed.createComponent(CodePreviewComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
