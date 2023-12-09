import {
  SearchContainer,
  SearchInput,
  SearchLabel,
} from './FilterSearch.styled';
import { useDispatch } from 'react-redux';
import { filterSearch } from '../../redux/filterSearchSlice';
import { nanoid } from '@reduxjs/toolkit';

export default function FilterSearch() {
  const dispatch = useDispatch();

  const handleFilterSearch = e => {
    const { value } = e.currentTarget;

    dispatch(filterSearch(value.toLowerCase().trim()));
  };

  const searchId = nanoid();

  return (
    <SearchContainer>
      <SearchLabel htmlFor={searchId}>Find contact by name</SearchLabel>
      <SearchInput
        id={searchId}
        type="text"
        onChange={handleFilterSearch}
        placeholder="Enter name"
      />
    </SearchContainer>
  );
}
