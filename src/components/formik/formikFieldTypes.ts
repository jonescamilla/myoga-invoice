import { InputHTMLAttributes } from 'react';

export type fieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  placeholder?: string;
  labelDir?: 'column' | 'row';
};
