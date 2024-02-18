import "@testing-library/jest-dom";

import "resize-observer-polyfill";

class ResizeObserverMock {
  constructor(callback: ResizeObserverCallback) {}
  disconnect() {}
  observe(target: Element) {}
  unobserve(target: Element) {}
}

(global as any).ResizeObserver = ResizeObserverMock;
