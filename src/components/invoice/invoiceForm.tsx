import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React from 'react';
import { CustomerAndVehicleForm } from './invoiceCustomerAndVehicleForm';
import { initialValues } from './invoiceInitialValues';
import { TicketForm } from './invoiceTicketForm';

/**
 * Form of an invoice utilizing `Formik for form management and `Yup` for validation w/ predefined styling
 */
const InvoiceForm = () => {
  return (
    <Box pt={8} pb={30} mx="auto" height="90vh" maxW="900px">
      <Heading>Invoice</Heading>
      <Formik initialValues={initialValues} onSubmit={async () => {}}>
        {({ values }) => (
          <>
            <Form>
              <Tabs
                isFitted
                isManual
                variant="solid-rounded"
                colorScheme="gray"
              >
                <TabList mb="1em">
                  <Tab>Customer</Tab>
                  <Tab>Invoice</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <CustomerAndVehicleForm />
                  </TabPanel>

                  <TabPanel>
                    <TicketForm />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Form>

            <pre>{JSON.stringify(values, null, 2)}</pre>
          </>
        )}
      </Formik>
    </Box>
  );
};

export default InvoiceForm;
