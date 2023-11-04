import * as yup from 'yup';

export const transactionValidationSchema = yup.object().shape({
  transaction_type: yup.string().nullable(),
  transaction_date: yup.date().nullable(),
  quantity: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
  laptop_id: yup.string().nullable().required(),
});
