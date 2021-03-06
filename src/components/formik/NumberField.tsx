import {
  Flex,
  FormLabel,
  FormControl,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormErrorMessage,
} from '@chakra-ui/react';
import { FastField, FieldProps } from 'formik';
import React from 'react';
import { fieldProps } from './formikFieldTypes';

type NumberFieldProps = {
  precision?: number;
  steppers?: boolean;
  displayType?: 'phone' | 'price';
} & fieldProps;

/**
 * Custom formik `Field` displayed as chakra-ui `NumberInput` w/ predefined styling.
 *
 * Offers `FormLabel` through JSX Attribute `label`
 * @see chakra-ui {@link https://chakra-ui.com/docs/form/number-input `NumberInput` Docs}
 * @see Formik {@link https://formik.org/docs/api/field `Field` Docs}
 */

export const NumberField = ({
  label,
  name,
  labelDir = 'column',
  precision = 0,
  steppers = false,
  displayType,
}: NumberFieldProps) => {
  const { max } =
    displayType === 'phone'
      ? { max: 1000000000 }
      : displayType === 'price'
      ? { max: 10000 }
      : { max: Infinity };

  return (
    <FastField name={name}>
      {({ form, field, meta }: FieldProps) => {
        const isInvalid = !!meta.error && meta.touched;

        return (
          <FormControl name={name} isInvalid={isInvalid}>
            <Flex flexDir={labelDir} p={1}>
              {label ? <FormLabel htmlFor={name}>{label}</FormLabel> : null}
              <NumberInput
                {...field}
                id={name}
                min={0}
                max={max}
                onChange={async (value) =>
                  form.setFieldValue(field.name, value)
                }
                allowMouseWheel
                precision={precision}
                name={name}
              >
                <NumberInputField />
                {steppers ? (
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                ) : null}
              </NumberInput>
            </Flex>
            <FormErrorMessage>{meta.error}</FormErrorMessage>
          </FormControl>
        );
      }}
    </FastField>
  );
};
