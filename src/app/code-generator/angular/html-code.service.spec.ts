import { HtmlCodeService } from "./HtmlCodeService";
import { TestBed } from "@angular/core/testing";

describe("HtmlCodeService", () => {

  let service: HtmlCodeService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HtmlCodeService
      ]
    });
    service = TestBed.get(HtmlCodeService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
