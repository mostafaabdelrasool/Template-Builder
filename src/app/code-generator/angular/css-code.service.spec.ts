import { CssCodeService } from "./css-code.service";
import { TestBed } from "@angular/core/testing";

describe("CssCodeService", () => {

  let service: CssCodeService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CssCodeService
      ]
    });
    service = TestBed.get(CssCodeService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
