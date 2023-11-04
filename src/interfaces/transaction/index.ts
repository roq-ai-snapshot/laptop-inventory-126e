import { UserInterface } from 'interfaces/user';
import { LaptopInterface } from 'interfaces/laptop';
import { GetQueryInterface } from 'interfaces';

export interface TransactionInterface {
  id?: string;
  user_id: string;
  laptop_id: string;
  transaction_type?: string;
  transaction_date?: any;
  quantity?: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  laptop?: LaptopInterface;
  _count?: {};
}

export interface TransactionGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  laptop_id?: string;
  transaction_type?: string;
}
