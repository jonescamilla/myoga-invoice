import { Flex } from '@chakra-ui/react';
import React from 'react';
import { InputField } from '../formik/InputField';

export const CustomerAndVehicleForm = () => (
  <>
    <Flex>
      <InputField
        label="First Name"
        placeholder="John"
        name="customer.first_name"
      />
      <InputField
        label="Last Name"
        placeholder="Smith"
        type="name"
        name="customer.last_name"
      />
      <InputField
        label="Phone Number"
        placeholder="000-000-0000"
        name="customer.number"
      />
      <InputField
        label="Optional Number"
        placeholder="000-000-0000"
        type=""
        name="customer.number_2"
      />
    </Flex>

    <Flex>
      <InputField label="Year" placeholder="2000" name="car.year" />
      <InputField label="Color" placeholder="Black" name="car.color" />
      <InputField label="Type" placeholder="Honda" name="car.type" />
      <InputField label="Make" placeholder="Accord" name="car.make" />
      <InputField label="License" placeholder="1A2B3C4" name="car.license" />
      <InputField label="Vin" placeholder="123ABC" name="car.vin" />
      <InputField label="milage" placeholder="000,000" name="car.milage" />
    </Flex>
  </>
);
