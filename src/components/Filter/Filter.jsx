import { setFilter } from 'redux/filterSlice';
import css from '../Filter/Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/store';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <div className={css.filter}>
      <input
        type="text"
        name="filter"
        className={css.filter__input}
        value={filter}
        onChange={event => dispatch(setFilter(event.target.value.trim()))}
        placeholder="Enter name"
      />
    </div>
  );
};
