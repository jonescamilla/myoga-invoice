import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { FastField, FieldProps, useFormikContext } from 'formik';
import React, { useState } from 'react';
import { invoice } from '../../types';
import { fieldProps } from '../formik/formikFieldTypes';

export type AutoCompOptions = {
  /**
   * the key that will be matched to user input to generate the suggestions
   */
  name: string;
  /**
   * all additional keys that may be used by the developer in `resultsRenderer`
   */
  [key: string]: any;
};

type AutoCompInputProps = {
  options: AutoCompOptions[];
  /**
   * The passed function that renders a JSX.Element the way the user intends
   */
  resultsRender: (result: AutoCompOptions) => JSX.Element;
} & fieldProps;

/**
 * Displays a chakra-ui Input that renders autocomplete suggestions and integrates with formik
 */
export const AutoCompInput = ({
  name,
  label: inputLabel,
  options,
  placeholder,
  resultsRender,
}: AutoCompInputProps) => {
  const [userInput, setUserInput] = useState('');

  const [suggestionResults, setSuggestionResults] = useState<AutoCompOptions[]>(
    []
  );

  // used to update formik state alongside autocomplete component
  const { setFieldValue } = useFormikContext<invoice>();

  /**
   * Finds matches based on the user's typed input relative to the data
   */
  const matchName = (optionLabel: string, userInput: string) => {
    const parsedLabel = optionLabel
      .toLowerCase()
      .substring(0, userInput.length);
    if (userInput == '') return false;
    return parsedLabel === userInput.toLowerCase();
  };

  /**
   * set the results to all of the matched data to the user input
   */
  const onSearch = (text: string) => {
    const newResults = options.filter((item) => {
      if (true == matchName(item.name, text)) return true;
      else return false;
    });
    setSuggestionResults(newResults);
  };

  /**
   * A generalized function that updates multiple queries based on passed field and value for local Input and for formik
   */
  const updateField = (
    field: 'keyword' | 'results',
    value: any,
    update = true
  ) => {
    if (update) onSearch(value);
    if (field === 'keyword') {
      setUserInput(value);
      setFieldValue(name, value);
    }
    if (field === 'results') setSuggestionResults(value);
  };

  /**
   * Updates field keyword with text and resets results
   */
  const updateKeyword = (text: string) => {
    updateField('keyword', text, false);
    updateField('results', []);
  };

  /**
   * Array JSX.Elements that are wrapped in a Chakra-ui box that handles updates based on click of
   */
  const renderedResults = suggestionResults.map((item, _index) => {
    return (
      <Box onClick={() => updateKeyword(item.name)}>{resultsRender(item)}</Box>
    );
  });

  return (
    <FastField name={name}>
      {({ field, meta }: FieldProps) => {
        const isInvalid = !!meta.error && meta.touched;

        return (
          <>
            <FormControl name={name} invalid={isInvalid}>
              <Flex flexDir="column" p={1}>
                {inputLabel ? (
                  <FormLabel htmlFor={name}>{inputLabel}</FormLabel>
                ) : null}

                <Input
                  {...field}
                  id={name}
                  name={name}
                  placeholder={placeholder}
                  value={userInput}
                  onChange={(event: any) => {
                    const value = event.target.value;
                    updateField('keyword', value);
                  }}
                />
              </Flex>

              <FormErrorMessage>{meta.error}</FormErrorMessage>
            </FormControl>

            {suggestionResults.length > 0 ? (
              <Box position="relative">{renderedResults}</Box>
            ) : null}
          </>
        );
      }}
    </FastField>
  );
};
