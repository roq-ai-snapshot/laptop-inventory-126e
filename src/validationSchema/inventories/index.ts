import * as yup from 'yup';

export const inventoryValidationSchema = yup.object().shape({
  quantity: yup.number().integer().nullable(),
  location: yup.string().nullable(),
  last_inventory_check: yup.date().nullable(),
  laptop_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
