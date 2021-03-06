import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { AutoCompInput } from '../formik/AutoCompInput';
import { InputField } from '../formik/InputField';
import { NumberField } from '../formik/NumberField';

export const CustomerAndVehicleForm = () => {
  const carOptions = [
    { name: 'Toyota' },
    { name: 'Ta' },
    { name: 'Tay' },
    { name: 'Honda' },
    { name: 'Nissan' },
    { name: 'Mercedes Benz' },
  ];

  const resultsRender = ({ name }: any) => <Box border="1px">{name}</Box>;

  return (
    <>
      <Flex>
        <AutoCompInput
          name="customer.first_name"
          label="First Name"
          placeholder=""
          options={carOptions}
          resultsRender={resultsRender}
        />

        <AutoCompInput
          name="customer.last_name"
          label="Last Name"
          placeholder=""
          options={carOptions}
          resultsRender={resultsRender}
        />

        <NumberField name="customer.number" label="PhoneNumber" />
        {/*
<InputField
          label="Phone Number"
          placeholder="000-000-0000"
          name="customer.number"
        />
  */}
        <InputField
          label="Optional Number"
          placeholder="000-000-0000"
          name="customer.number_2"
        />
      </Flex>

      <Flex>
        <InputField label="Year" placeholder="0000" name="car.year" />
        <InputField label="Make" placeholder="Honda" name="car.make" />
        <InputField label="Model" placeholder="Accord" name="car.model" />
        <InputField label="License" placeholder="1A2B3C4" name="car.license" />
        <InputField label="Vin" placeholder="123ABC" name="car.vin" />
        <InputField label="milage" placeholder="000,000" name="car.milage" />
        <InputField label="Color" placeholder="Black" name="car.color" />
      </Flex>
    </>
  );
};
