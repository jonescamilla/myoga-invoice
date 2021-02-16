import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { FastField, FieldProps } from 'formik';
import { fieldProps } from './formikFieldTypes';

export const InputField: React.FC<fieldProps> = ({
  name,
  label,
  placeholder,
  labelDir,
}) => {
  return (
    <>
      <FastField name={name}>
        {({ field, meta }: FieldProps) => {
          const isInvalid = !!meta.error && meta.touched;
          return (
            <FormControl name={name} isInvalid={isInvalid}>
              <Flex flexDir={labelDir || 'column'} p={1}>
                {label ? <FormLabel htmlFor={name}>{label}</FormLabel> : null}
                <Input
                  {...field}
                  id={name}
                  isInvalid={isInvalid}
                  name={name}
                  placeholder={placeholder}
                  errortext={meta.error}
                ></Input>
              </Flex>
              <FormErrorMessage>{meta.error}</FormErrorMessage>
            </FormControl>
          );
        }}
      </FastField>
    </>
  );
};
