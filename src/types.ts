export type UniversalPlatform = "web" | "native";

export type UniversalMap<TWeb, TNative> = {
  web: TWeb;
  native: TNative;
};

export type UniversalComponent<TWeb, TNative> = TWeb | TNative;

export type UniversalSpecificOptions<TWebOptions, TNativeOptions> = {
  webOptions?: TWebOptions;
  nativeOptions?: TNativeOptions;
};

export type UniversalSharedOptions<TSharedOptions> = {
  sharedOptions?: TSharedOptions;
};

export type UniversalComponentProps<
  TSharedOptions extends Record<string, unknown> = Record<string, unknown>,
  TWebOptions extends Record<string, unknown> = Record<string, unknown>,
  TNativeOptions extends Record<string, unknown> = Record<string, unknown>,
> = {
  children?: unknown;
} & UniversalSharedOptions<TSharedOptions> &
  UniversalSpecificOptions<TWebOptions, TNativeOptions>;

export type UniversalJsxComponent<
  TSharedOptions extends Record<string, unknown> = Record<string, unknown>,
  TWebOptions extends Record<string, unknown> = Record<string, unknown>,
  TNativeOptions extends Record<string, unknown> = Record<string, unknown>,
> = (
  props: UniversalComponentProps<TSharedOptions, TWebOptions, TNativeOptions>,
) => JSX.Element | null;
