import { AdminStaffInterface } from 'interfaces/admin-staff';
import { CabInterface } from 'interfaces/cab';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  admin_staff?: AdminStaffInterface[];
  cab?: CabInterface[];
  user?: UserInterface;
  _count?: {
    admin_staff?: number;
    cab?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
