import { InventoryInterface } from 'interfaces/inventory';
import { UserCompanyInterface } from 'interfaces/user-company';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  address?: string;
  phone?: string;
  website?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;
  inventory?: InventoryInterface[];
  user_company?: UserCompanyInterface[];

  _count?: {
    inventory?: number;
    user_company?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  phone?: string;
  website?: string;
  name?: string;
  tenant_id?: string;
}
