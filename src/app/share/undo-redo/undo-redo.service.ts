import { Injectable } from "@angular/core";

/**
 * @description
 * @class
 */
@Injectable({
  providedIn: "root",
})
export class UndoRedoService {
  private data: UndoRedoSetting[] = [];
  constructor() {}
  undo(type: any) {
    const data = this.data.find((x) => x.type === type);
    if (!data) {
      return;
    }
    const { past, present, future } = data.state;
    const previous = past[past.length - 1];
    const newPast = past.slice(0, past.length - 1);
    return {
      past: newPast,
      present: previous,
      future: [present, ...future],
    };
  }
  redo(type: any) {
    const data = this.data.find((x) => x.type === type);
    if (!data) {
      return;
    }
    const { past, present, future } = data.state;
    const next = future[0];
    const newFuture = future.slice(1);
    return {
      past: [...past, present],
      present: next,
      future: newFuture,
    };
  }

  init(type: any, data: any) {
    const state = {
      past: [...data],
      present: data,
      future: [],
    };
    this.data.push({ type, state });
  }
  update(type: any, data: any) {
    const result = this.data.find((x) => x.type === type);
    if (!result) {
      return;
    }
    let { present, past } = result.state;
    past = [...past, present];
    present = [...data];
  }
}
export class UndoRedoSetting {
  type: string;
  state: {
    past: any[];
    present: any;
    future: any[];
  };
}
