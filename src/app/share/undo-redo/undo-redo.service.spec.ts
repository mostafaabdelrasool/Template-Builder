import { UndoRedoService } from "./undo-redo.service";
import { TestBed } from "@angular/core/testing";

describe("UndoRedoService", () => {

  let service: UndoRedoService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UndoRedoService
      ]
    });
    service = TestBed.get(UndoRedoService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
