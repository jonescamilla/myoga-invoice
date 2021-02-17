import { InputHTMLAttributes } from 'react';

/**
 * @property {string} `name` - of component/item in form to allow formik to handle props for inputs
 * @property {string || undefined} `label` - that is used in FormLabel from Chakra-ui
 * @property {string || undefined} `placeholder` - passed into inputs
 * @property {string || undefined} `labelDir` - flex attribute which changes positioning for form label that defaults to column
 * @property {string || undefined} `autoComplete` - attribute that enables browser autocompletion; defaults to off
 */

export type fieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  placeholder?: string;
  labelDir?: 'column' | 'row';
  autoComplete?: 'on' | 'off';
};
