import { BookingInterface } from 'interfaces/booking';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface CabInterface {
  id?: string;
  model: string;
  license_plate: string;
  status: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  company?: CompanyInterface;
  _count?: {
    booking?: number;
  };
}

export interface CabGetQueryInterface extends GetQueryInterface {
  id?: string;
  model?: string;
  license_plate?: string;
  status?: string;
  company_id?: string;
}
