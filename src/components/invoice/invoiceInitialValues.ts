import { invoice } from '../../types';

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
