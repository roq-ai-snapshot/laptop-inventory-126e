import * as yup from 'yup';

export const laptopValidationSchema = yup.object().shape({
  model: yup.string().required(),
  manufacturer: yup.string().nullable(),
  serial_number: yup.string().nullable(),
  purchase_date: yup.date().nullable(),
  warranty_expiration: yup.date().nullable(),
  status: yup.string().nullable(),
});
