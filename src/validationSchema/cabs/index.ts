import * as yup from 'yup';

export const cabValidationSchema = yup.object().shape({
  model: yup.string().required(),
  license_plate: yup.string().required(),
  status: yup.string().required(),
  company_id: yup.string().nullable().required(),
});
