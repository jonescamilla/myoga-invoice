import { Button, Flex, FormLabel } from '@chakra-ui/react';
import { ArrayHelpers, FieldArray } from 'formik';
import React from 'react';
import { invoice, inv_ticket } from '../../types';
import { CheckboxField } from '../formik/CheckboxField';
import { InputField } from '../formik/InputField';
import {
  initialInvoiceLabor,
  initialInvoicePart,
} from './invoiceInitialValues';

export const TicketForm: React.FC<{ ticket: inv_ticket }> = ({ ticket }) => {
  return (
    <>
      <Flex flexDir="column">
        <FieldArray name="ticket.service">
          {({ remove, push }: ArrayHelpers) => {
            return (
              <Flex flexDir="column">
                <Flex>
                  <Button
                    m={2}
                    type="button"
                    onClick={() => push(initialInvoicePart)}
                  >
                    Add Part
                  </Button>
                  <Button
                    m={2}
                    type="button"
                    onClick={() => push(initialInvoiceLabor)}
                  >
                    Add Labor
                  </Button>
                </Flex>

                {ticket.service.length > 0 &&
                  ticket.service.map((item, index) => {
                    const {
                      itemName,
                      label,
                      amountLabel,
                    } = item?.hasOwnProperty('hours_worked')
                      ? {
                          itemName: 'hours_worked',
                          amountLabel: 'Hrs.',
                          label: 'Labor',
                        }
                      : item?.hasOwnProperty('quantity_used')
                      ? {
                          itemName: 'quantity_used',
                          amountLabel: 'Qty.',
                          label: 'Parts',
                        }
                      : { itemName: '', amountLabel: '', label: '' };

                    return (
                      <Flex>
                        <FormLabel>{label}</FormLabel>
                        <InputField
                          labelDir="row"
                          placeholder="Desc...."
                          name={`ticket.service.${index}.description`}
                        />
                        <InputField
                          labelDir="row"
                          name={`ticket.service.${index}.${itemName}`}
                          label={amountLabel}
                        />
                        <Button onClick={() => remove(index)}>x</Button>
                      </Flex>
                    );
                  })}
              </Flex>
            );
          }}
        </FieldArray>

        <Flex>
          <CheckboxField name="ticket.tax_exempt" label="Tax Exempt" />
          <CheckboxField
            name="ticket.save_for_package_job"
            label="Save For Package"
          />
        </Flex>
      </Flex>
    </>
  );
};
