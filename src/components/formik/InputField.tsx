import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { FastField, FieldProps } from 'formik';
import { InputHTMLAttributes } from 'react';

export type fieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  placeholder?: string;
};

export const InputField: React.FC<fieldProps> = ({
  name,
  label,
  placeholder,
}) => {
  return (
    <>
      <FastField name={name}>
        {({ field, meta }: FieldProps) => {
          const isInvalid = !!meta.error && meta.touched;
          return (
            <FormControl name={name} isInvalid={isInvalid}>
              {label ? <FormLabel htmlFor={name}>{label}</FormLabel> : null}
              <Input
                {...field}
                id={name}
                isInvalid={isInvalid}
                name={name}
                placeholder={placeholder}
                errortext={meta.error}
              ></Input>
              <FormErrorMessage>{meta.error}</FormErrorMessage>
            </FormControl>
          );
        }}
      </FastField>
    </>
  );
};
