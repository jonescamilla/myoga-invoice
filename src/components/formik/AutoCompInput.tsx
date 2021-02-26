import { Box, Button, Flex, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

type dataType = { name: string; age?: number; position?: string };

type stateType = {
  data: dataType[];
  keyword: string;
  results: dataType[];
};

const data = [
  { name: 'Andrew R. Kelly', age: 22, position: 'Janitor' },
  { name: 'Honda' },
  { name: 'Adrian Sanchez', age: 30, position: 'Teacher' },
  { name: 'Anderson Brown', age: 25, position: 'Principal' },
  { name: 'Anna Valio', age: 30, position: 'guidance councelor' },
  { name: 'Asha Mathews', age: 50, position: 'Teacher' },
  { name: 'Alicia keys', age: 25, position: 'Librarian' },
  { name: 'Alexa Dot', age: 30, position: 'teacher' },
  { name: 'Bob Squarepants', age: 20, position: 'secretary' },
];

/**
 * Returns on input field that renders autocomplete suggestions
 */

// export const AutoCompInput = ({ data }: { data: dataType }) => {
export const AutoCompInput = () => {
  const [state, setState] = useState<stateType>({
    data: data,
    keyword: '',
    results: [],
  });

  /**
   * Finds matches based on the user's typed input relative to the data
   */
  const matchName = (name: string, keyword: string) => {
    name = name.toLowerCase().substring(0, keyword.length);
    if (keyword == '') return false;
    return name == keyword.toLowerCase();
  };

  /**
   * set the results to all of the matched data to the user input
   */
  const onSearch = (text: string) => {
    state.results = []; // clear the array
    state.data.forEach((item) => {
      if (true == matchName(item.name, text)) state.results.push(item);
    });
  };

  /**
   * A generalized function that updates multiple queries based on passed field and value
   */
  const updateField = (field: string, value: any, update = true) => {
    if (update) onSearch(value);
    setState(() => ({ ...state, [field]: value }));
  };

  return (
    <>
      <SearchBar
        results={state.results}
        keyword={state.keyword}
        updateField={updateField}
      />
      <pre>{JSON.stringify(state.keyword, null, 2)}</pre>
    </>
  );
};

/**
 * Renders the Input and suggestions based on the data passed
 */
const SearchBar = ({
  results,
  keyword,
  updateField,
}: {
  results: dataType[];
  keyword: string;
  updateField: (field: string, value: any, update?: boolean) => void;
}) => {
  const updateText = (text: string) => {
    updateField('keyword', text, false);
    updateField('results', []);
  };

  const cancelSearch = () => updateField('keyword', '');

  const redenderResults = results.map(({ position, name, age }, index) => {
    return (
      <SearchPreview
        key={index}
        updateText={updateText}
        index={index}
        position={position}
        name={name}
        age={age}
      />
    );
  });

  return (
    <Flex flexDir="column" className="auto">
      <Flex>
        <Input
          name="customer.first_name"
          className="search-bar"
          placeholder="Search"
          value={keyword}
          onChange={(e) => updateField('keyword', e.target.value)}
        />

        <Button
          onClick={() => cancelSearch()}
          className={`cancel-btn ${keyword.length > 0 ? 'active' : 'inactive'}`}
        >
          x
        </Button>
      </Flex>
      <Flex>
        {results.length > 0 ? (
          <Box className="search-results">{redenderResults}</Box>
        ) : null}
      </Flex>
    </Flex>
  );
};

/**
 * The array of suggestions
 */
const SearchPreview = ({
  name,
  position,
  index,
  updateText,
}: dataType & {
  index: number;
  updateText: (text: any) => void;
}) => (
  <Box
    onClick={() => updateText(name)}
    border="1px"
    className={`search-preview ${index == 0 ? 'start' : ''}`}
  >
    <p className="name">{`${name} - ${position}`}</p>
  </Box>
);
