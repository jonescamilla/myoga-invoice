import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { FastField, FieldProps } from 'formik';
import { fieldProps } from './formikFieldTypes';

/**
 * Custom Formik Field that returns JSX of a Chakra-ui Input w/ predefined styling
 */

export const InputField = ({
  name,
  label,
  placeholder,
  labelDir = 'column',
  autoComplete = 'off',
}: fieldProps) => (
  <FastField name={name}>
    {({ field, meta }: FieldProps) => {
      const isInvalid = !!meta.error && meta.touched;

      return (
        <FormControl name={name} isInvalid={isInvalid}>
          <Flex flexDir={labelDir} p={1}>
            {label ? <FormLabel htmlFor={name}>{label}</FormLabel> : null}
            <Input
              {...field}
              autoComplete={autoComplete}
              id={name}
              name={name}
              placeholder={placeholder}
            />
          </Flex>
          <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
      );
    }}
  </FastField>
);
