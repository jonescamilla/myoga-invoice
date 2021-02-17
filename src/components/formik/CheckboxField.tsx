import { FormControl, FormLabel, Checkbox } from '@chakra-ui/react';
import { FastField, FieldProps } from 'formik';
import React from 'react';
import { fieldProps } from './formikFieldTypes';

/**
 * Custom Formik Field that returns JSX of a Chakra-ui Checkbox w/ predefined styling
 */

export const CheckboxField: React.FC<fieldProps> = ({ name, label }) => {
  return (
    <FastField name={name}>
      {({ meta, field }: FieldProps) => {
        const isInvalid = !!meta.error && meta.touched;
        return (
          <>
            <FormControl name={name} isInvalid={isInvalid}>
              {label ? <FormLabel htmlFor={name}>{label}</FormLabel> : null}
              <Checkbox isInvalid={isInvalid} id={name} {...field} />
            </FormControl>
          </>
        );
      }}
    </FastField>
  );
};
