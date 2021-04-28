import { NO_ERRORS_SCHEMA } from "@angular/core";
import { UserFeatureComponent } from "./user-feature.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("UserFeatureComponent", () => {

  let fixture: ComponentFixture<UserFeatureComponent>;
  let component: UserFeatureComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [UserFeatureComponent]
    });

    fixture = TestBed.createComponent(UserFeatureComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
