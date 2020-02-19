import { CodeServiceService } from "./code-service.service";
import { TestBed } from "@angular/core/testing";

describe("CodeServiceService", () => {

  let service: CodeServiceService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CodeServiceService
      ]
    });
    service = TestBed.get(CodeServiceService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
