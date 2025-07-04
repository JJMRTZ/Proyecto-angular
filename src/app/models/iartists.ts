export interface IArtists {
  name:       string;
  listeners:  string;
  mbid:       string;
  url:        string;
  streamable: string;
  image:      Image[];
}

export interface Image {
  "#text": string;
  size:    Size;
}

export enum Size {
  Extralarge = "extralarge",
  Large = "large",
  Medium = "medium",
  Mega = "mega",
  Small = "small",
}
