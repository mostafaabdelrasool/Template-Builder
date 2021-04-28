import { UserApplicationService } from "./user-application.service";
import { TestBed } from "@angular/core/testing";

describe("UserApplicationService", () => {

  let service: UserApplicationService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserApplicationService
      ]
    });
    service = TestBed.get(UserApplicationService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
