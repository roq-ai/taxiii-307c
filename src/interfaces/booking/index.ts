import { UserInterface } from 'interfaces/user';
import { CabInterface } from 'interfaces/cab';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  pickup_location: string;
  dropoff_location: string;
  booking_time: any;
  status: string;
  user_id: string;
  cab_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  cab?: CabInterface;
  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  pickup_location?: string;
  dropoff_location?: string;
  status?: string;
  user_id?: string;
  cab_id?: string;
}
