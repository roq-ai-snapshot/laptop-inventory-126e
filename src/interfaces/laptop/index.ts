import { InventoryInterface } from 'interfaces/inventory';
import { TransactionInterface } from 'interfaces/transaction';
import { GetQueryInterface } from 'interfaces';

export interface LaptopInterface {
  id?: string;
  model: string;
  manufacturer?: string;
  serial_number?: string;
  purchase_date?: any;
  warranty_expiration?: any;
  status?: string;
  created_at?: any;
  updated_at?: any;
  inventory?: InventoryInterface[];
  transaction?: TransactionInterface[];

  _count?: {
    inventory?: number;
    transaction?: number;
  };
}

export interface LaptopGetQueryInterface extends GetQueryInterface {
  id?: string;
  model?: string;
  manufacturer?: string;
  serial_number?: string;
  status?: string;
}
