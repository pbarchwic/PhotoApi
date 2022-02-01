export interface Product {
  productId: number;
  product: string;
  typeId: number;
  formatId: number;
  paperId: number;
}

export interface Products {
  products: Product[];
}

export interface Format {
  id: number;
  name: string;
  typeId: number;
  typeName: string;
  format: string;
  kindName: string;
  kindId: number;
}

export interface Formats {
  formats: Format[];
}

export interface Paper {
  id: number;
  nameType: string;
  name: string;
  type: string;
}

export interface Papers {
  papers: Paper[];
}
