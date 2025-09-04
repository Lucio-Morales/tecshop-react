import type { CartItem } from './Cart';

export type OrderStatus = 'pending' | 'paid' | 'shipped' | 'completed';

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  cretedAt: Date;
}
