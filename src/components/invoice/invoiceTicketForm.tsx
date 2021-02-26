import {
  Button,
  DarkMode,
  Flex,
  FormLabel,
  Kbd,
  Tooltip,
} from '@chakra-ui/react';
import { ArrayHelpers, FieldArray } from 'formik';
import React from 'react';
import { inv_labor, inv_part, inv_ticket } from '../../types';
import { AutoCompInput } from '../formik/AutoCompInput';
import { CheckboxField } from '../formik/CheckboxField';
import { InputField } from '../formik/InputField';
import {
  initialInvoiceLabor,
  initialInvoicePart,
} from './invoiceInitialValues';
import { KbdTooltip } from '../KbdInverted';

/**
 * returns form for services and parts
 */

export const TicketForm: React.FC<{ ticket: inv_ticket }> = ({ ticket }) => {
  return (
    <>
      <Flex flexDir="column">
        <FieldArray name="ticket.service">
          {({ remove, push }: ArrayHelpers) => {
            return (
              <Flex flexDir="column">
                <AutoCompInput />
                {ticket.service.length > 0 &&
                  ticket.service.map((item, index) => {
                    const { itemName, amountLabel, label } = getItemInfo(item);

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

                <Flex>
                  <KbdTooltip keys={['alt', 'P']}>
                    <Button m={2} onClick={() => push(initialInvoicePart)}>
                      Add Part
                    </Button>
                  </KbdTooltip>

                  <KbdTooltip keys={['alt', 'L']}>
                    <Button
                      m={2}
                      type="button"
                      onClick={() => push(initialInvoiceLabor)}
                    >
                      Add Labor
                    </Button>
                  </KbdTooltip>

                  <CheckboxField
                    labelDir="row"
                    name="ticket.tax_exempt"
                    label="Tax Exempt"
                  />

                  <CheckboxField
                    labelDir="row"
                    name="ticket.save_for_package_job"
                    label="Save For Package"
                  />
                </Flex>
              </Flex>
            );
          }}
        </FieldArray>
      </Flex>
    </>
  );
};

/**
 * returns obj of relevent information used in FieldArray for ticket.service
 */
const getItemInfo = (item: inv_labor | inv_part | undefined) => {
  return item?.hasOwnProperty('hours_worked')
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
};
