
export type Category = 'Electronics' | 'Clothing' | 'Shoes' | 'Accessories';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  rating: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface OrderDetails {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
}
