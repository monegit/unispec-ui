export const a = "a";
export const abbr = "abbr";
export const address = "address";
export const area = "area";
export const article = "article";
export const aside = "aside";
export const audio = "audio";

export const b = "b";
export const base = "base";
export const bdi = "bdi";
export const bdo = "bdo";
export const blockquote = "blockquote";
export const body = "body";
export const br = "br";
export const button = "button";

export const canvas = "canvas";
export const caption = "caption";
export const cite = "cite";
export const code = "code";
export const col = "col";
export const colgroup = "colgroup";

export const data = "data";
export const datalist = "datalist";
export const dd = "dd";
export const del = "del";
export const details = "details";
export const dfn = "dfn";
export const dialog = "dialog";
export const div = "div";
export const dl = "dl";
export const dt = "dt";

export const em = "em";
export const embed = "embed";

export const fieldset = "fieldset";
export const figcaption = "figcaption";
export const figure = "figure";
export const footer = "footer";
export const form = "form";

export const h1 = "h1";
export const h2 = "h2";
export const h3 = "h3";
export const h4 = "h4";
export const h5 = "h5";
export const h6 = "h6";
export const head = "head";
export const header = "header";
export const hgroup = "hgroup";
export const hr = "hr";
export const html = "html";

export const i = "i";
export const iframe = "iframe";
export const img = "img";
export const input = "input";
export const ins = "ins";

export const kbd = "kbd";

export const label = "label";
export const legend = "legend";
export const li = "li";
export const link = "link";

export const main = "main";
export const map = "map";
export const mark = "mark";
export const menu = "menu";
export const meta = "meta";
export const meter = "meter";

export const nav = "nav";
export const noscript = "noscript";

export const object = "object";
export const ol = "ol";
export const optgroup = "optgroup";
export const option = "option";
export const output = "output";

export const p = "p";
export const param = "param";
export const picture = "picture";
export const pre = "pre";
export const progress = "progress";

export const q = "q";

export const rp = "rp";
export const rt = "rt";
export const ruby = "ruby";

export const s = "s";
export const samp = "samp";
export const script = "script";
export const search = "search";
export const section = "section";
export const select = "select";
export const slot = "slot";
export const small = "small";
export const source = "source";
export const span = "span";
export const strong = "strong";
export const style = "style";
export const sub = "sub";
export const summary = "summary";
export const sup = "sup";

export const table = "table";
export const tbody = "tbody";
export const td = "td";
export const template = "template";
export const textarea = "textarea";
export const tfoot = "tfoot";
export const th = "th";
export const thead = "thead";
export const time = "time";
export const title = "title";
export const tr = "tr";
export const track = "track";

export const u = "u";
export const ul = "ul";

export const varTag = "var";
export const video = "video";

export const wbr = "wbr";

export const webElementTags = [
  a,
  abbr,
  address,
  area,
  article,
  aside,
  audio,
  b,
  base,
  bdi,
  bdo,
  blockquote,
  body,
  br,
  button,
  canvas,
  caption,
  cite,
  code,
  col,
  colgroup,
  data,
  datalist,
  dd,
  del,
  details,
  dfn,
  dialog,
  div,
  dl,
  dt,
  em,
  embed,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  head,
  header,
  hgroup,
  hr,
  html,
  i,
  iframe,
  img,
  input,
  ins,
  kbd,
  label,
  legend,
  li,
  link,
  main,
  map,
  mark,
  menu,
  meta,
  meter,
  nav,
  noscript,
  object,
  ol,
  optgroup,
  option,
  output,
  p,
  param,
  picture,
  pre,
  progress,
  q,
  rp,
  rt,
  ruby,
  s,
  samp,
  script,
  search,
  section,
  select,
  slot,
  small,
  source,
  span,
  strong,
  style,
  sub,
  summary,
  sup,
  table,
  tbody,
  td,
  template,
  textarea,
  tfoot,
  th,
  thead,
  time,
  title,
  tr,
  track,
  u,
  ul,
  varTag,
  video,
  wbr,
] as const;

export type WebElementTag = (typeof webElementTags)[number];
