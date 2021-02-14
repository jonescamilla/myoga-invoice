import { Flex } from '@chakra-ui/react';
import React from 'react';
import { CheckboxField } from '../formik/CheckboxField';
import { fieldProps } from '../formik/InputField';

export const TicketForm: React.FC<fieldProps> = () => {
  return (
    <>
      <Flex>
        <CheckboxField name="ticket.tax_exempt" label="Tax Exempt" />
        <CheckboxField
          name="ticket.save_for_package_job"
          label="Save For Package"
        />
      </Flex>
    </>
  );
};
