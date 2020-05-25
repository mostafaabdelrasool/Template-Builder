import { FieldsService } from "./fields.service";
import { TestBed } from "@angular/core/testing";

describe("FieldsService", () => {

  let service: FieldsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FieldsService
      ]
    });
    service = TestBed.get(FieldsService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
