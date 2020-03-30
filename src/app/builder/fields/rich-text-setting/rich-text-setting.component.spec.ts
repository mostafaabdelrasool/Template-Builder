import { NO_ERRORS_SCHEMA } from "@angular/core";
import { RichTextSettingComponent } from "./rich-text-setting.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("RichTextSettingComponent", () => {

  let fixture: ComponentFixture<RichTextSettingComponent>;
  let component: RichTextSettingComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [RichTextSettingComponent]
    });

    fixture = TestBed.createComponent(RichTextSettingComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
