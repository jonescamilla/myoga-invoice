import { invoice, inv_labor, inv_part } from '../../types';

/**
 * Initial values for an invoice used/passed into `Formik`
 */
export const initialValues: invoice = {
  customer: {
    first_name: '',
    last_name: '',
    number: '',
  },
  car: {
    year: '',
    color: '',
    type: '',
    make: '',
    license: '',
    vin: '',
    milage: '',
  },
  ticket: {
    total: '',
    sub_total: '',
    service: [],
    misc_charges: '',
    save_for_package_job: false,
    tax_exempt: false,
  },
};

export const initialInvoicePart: inv_part = {
  quantity_used: 0,
  total: '',
  price: '',
  description: '',
};

export const initialInvoiceLabor: inv_labor = {
  hours_worked: 0,
  total: '',
  price: '',
  description: '',
};
