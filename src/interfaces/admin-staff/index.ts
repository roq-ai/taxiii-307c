import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface AdminStaffInterface {
  id?: string;
  job_title: string;
  hire_date: any;
  user_id: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface AdminStaffGetQueryInterface extends GetQueryInterface {
  id?: string;
  job_title?: string;
  user_id?: string;
  company_id?: string;
}
