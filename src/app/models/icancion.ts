export interface ICancion {
  name:       string;
  artist?:     string;
  url?:        string;
  streamable?: Streamable;
  listeners?:  string;
  image?:      Image[];
  mbid?:       string;
}

export interface Image {
  "#text": string;
  size:    Size;
}

export enum Size {
  Extralarge = "extralarge",
  Large = "large",
  Medium = "medium",
  Small = "small",
}

export enum Streamable {
  Fixme = "FIXME",
}
