export interface ProductSpec {
  label: string;
  value: string;
}

export type ProductStatus = 'available' | 'indent' | 'out_of_stock';

export interface Product {
  id: string;
  name: string;
  slug: string;
  part_number: string;
  category: string;
  description: string;
  specs: ProductSpec[];
  status: ProductStatus;
  image_url: string;
}
