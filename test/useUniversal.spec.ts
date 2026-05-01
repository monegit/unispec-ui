import { describe, expect, it } from "vitest";
import {
  universalComponent,
  useUniversal,
  useUniversalComponent,
} from "../src";

describe("useUniversal", () => {
  it("returns web target when global platform is web", () => {
    globalThis.__UNIVERSAL_UI_PLATFORM__ = "web";

    const selected = useUniversal({
      web: "div",
      native: "View",
    });

    expect(selected).toBe("div");
  });

  it("returns native target when global platform is native", () => {
    globalThis.__UNIVERSAL_UI_PLATFORM__ = "native";

    const selected = useUniversal({
      web: "div",
      native: "View",
    });

    expect(selected).toBe("View");
  });

  it("falls back to web in browser-like environment", () => {
    globalThis.__UNIVERSAL_UI_PLATFORM__ = undefined;
    const originalDocument = (globalThis as { document?: unknown }).document;
    (globalThis as { document?: unknown }).document = {};

    const selected = useUniversal({
      web: "div",
      native: "View",
    });

    expect(selected).toBe("div");

    (globalThis as { document?: unknown }).document = originalDocument;
  });

  it("universalComponent selects component mapping like useUniversal", () => {
    globalThis.__UNIVERSAL_UI_PLATFORM__ = "web";

    const selected = universalComponent({
      web: "button",
      native: "Pressable",
    });

    expect(selected).toBe("button");
  });

  it("useUniversalComponent alias selects native component", () => {
    globalThis.__UNIVERSAL_UI_PLATFORM__ = "native";

    const selected = useUniversalComponent({
      web: "div",
      native: "View",
    });

    expect(selected).toBe("View");
  });
});
