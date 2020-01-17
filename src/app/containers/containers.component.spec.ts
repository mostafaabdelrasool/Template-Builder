import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ContainersComponent } from "./containers.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ContainersComponent", () => {

  let fixture: ComponentFixture<ContainersComponent>;
  let component: ContainersComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ContainersComponent]
    });

    fixture = TestBed.createComponent(ContainersComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
