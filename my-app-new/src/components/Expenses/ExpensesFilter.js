import React, {useState} from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    // const [filterYear, setFilterYear] = useState('');
    const onChangeHandler = (e) => {
        // setFilterYear(e.target.value);
        // props.onFilterYear(filterYear);
        const selectValue = e.target.value;
        props.onFilterYear(selectValue);
        // console.log(selectValue);
    };


  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={onChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;