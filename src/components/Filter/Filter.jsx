import { FilterTitle, FilterInput, FilterDiv } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilter);

  const handleFilterChange = filters => dispatch(setFilter(filters));
  const changeFilter = event => {
    handleFilterChange(event.currentTarget.value);
    console.log(filters);
  };

  return (
    <FilterDiv>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput type="text" onChange={changeFilter} />
    </FilterDiv>
  );
};

export default Filter;
