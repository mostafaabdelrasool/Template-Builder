import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ApplicationComponent } from "./application.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ApplicationComponent", () => {

  let fixture: ComponentFixture<ApplicationComponent>;
  let component: ApplicationComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ApplicationComponent]
    });

    fixture = TestBed.createComponent(ApplicationComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
