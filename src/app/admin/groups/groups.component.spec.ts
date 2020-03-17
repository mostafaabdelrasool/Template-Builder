import { NO_ERRORS_SCHEMA } from "@angular/core";
import { GroupsComponent } from "./groups.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("GroupsComponent", () => {

  let fixture: ComponentFixture<GroupsComponent>;
  let component: GroupsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [GroupsComponent]
    });

    fixture = TestBed.createComponent(GroupsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
