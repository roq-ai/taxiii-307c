import * as yup from 'yup';

export const adminStaffValidationSchema = yup.object().shape({
  job_title: yup.string().required(),
  hire_date: yup.date().required(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
