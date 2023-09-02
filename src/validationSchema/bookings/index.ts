import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  pickup_location: yup.string().required(),
  dropoff_location: yup.string().required(),
  booking_time: yup.date().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  cab_id: yup.string().nullable().required(),
});
