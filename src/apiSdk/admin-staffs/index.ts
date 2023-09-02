import axios from 'axios';
import queryString from 'query-string';
import { AdminStaffInterface, AdminStaffGetQueryInterface } from 'interfaces/admin-staff';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAdminStaffs = async (
  query?: AdminStaffGetQueryInterface,
): Promise<PaginatedInterface<AdminStaffInterface>> => {
  const response = await axios.get('/api/admin-staffs', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createAdminStaff = async (adminStaff: AdminStaffInterface) => {
  const response = await axios.post('/api/admin-staffs', adminStaff);
  return response.data;
};

export const updateAdminStaffById = async (id: string, adminStaff: AdminStaffInterface) => {
  const response = await axios.put(`/api/admin-staffs/${id}`, adminStaff);
  return response.data;
};

export const getAdminStaffById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/admin-staffs/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAdminStaffById = async (id: string) => {
  const response = await axios.delete(`/api/admin-staffs/${id}`);
  return response.data;
};
