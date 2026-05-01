import type {
  UniversalComponent,
  UniversalJsxComponent,
  UniversalMap,
  UniversalPlatform,
} from "./types";

declare global {
  var __UNIVERSAL_UI_PLATFORM__: UniversalPlatform | undefined;
}

function detectPlatform(): UniversalPlatform {
  if (typeof globalThis.__UNIVERSAL_UI_PLATFORM__ !== "undefined") {
    return globalThis.__UNIVERSAL_UI_PLATFORM__;
  }

  if (typeof process !== "undefined" && typeof process.env !== "undefined") {
    const envPlatform = process.env.UNIVERSAL_UI_PLATFORM;
    if (envPlatform === "web" || envPlatform === "native") {
      return envPlatform;
    }
  }

  if (
    typeof navigator !== "undefined" &&
    typeof navigator.product === "string" &&
    navigator.product === "ReactNative"
  ) {
    return "native";
  }

  return typeof document !== "undefined" ? "web" : "native";
}

export function useUniversal<TWeb, TNative>(
  mapping: UniversalMap<TWeb, TNative>,
): UniversalComponent<TWeb, TNative> {
  return mapping[detectPlatform()];
}

export function universalComponent<
  TWeb,
  TNative,
  TSharedOptions extends Record<string, unknown> = Record<string, unknown>,
  TWebOptions extends Record<string, unknown> = Record<string, unknown>,
  TNativeOptions extends Record<string, unknown> = Record<string, unknown>,
>(
  mapping: UniversalMap<TWeb, TNative>,
): UniversalJsxComponent<TSharedOptions, TWebOptions, TNativeOptions> {
  return useUniversal(mapping) as UniversalJsxComponent<
    TSharedOptions,
    TWebOptions,
    TNativeOptions
  >;
}

export const useUniversalComponent = universalComponent;
