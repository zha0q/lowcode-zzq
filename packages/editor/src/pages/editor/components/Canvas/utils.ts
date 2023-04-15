export class EventBus {
  public listeners: Map<string, ((args: any[]) => void)[]> = new Map();

  constructor() {}

  on(event: string, cb: (args: any[]) => void) {
    let listener = this.listeners.get(event);
    if (listener) {
      listener.push(cb);
    } else {
      listener = [cb];
    }
    this.listeners.set(event, listener);
  }

  emit(event: string, args: any[]) {
    const listener = this.listeners.get(event);
    if (!listener) return;
    listener.forEach((cb: (args: any[]) => void) => cb(args));
  }

  disposeAll() {
    this.listeners = new Map();
  }
}
