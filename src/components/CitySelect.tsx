import React, { useContext, useState } from 'react';
import Select from 'react-select'
import { optionsCities } from '../CitiesData.const';
import '../styles/citySelect.css'

const styles = {
  option: (provided: any, state: any) => ({
    ...provided,
    borderBottom: '1px solid blue',
    color: state.isSelected ? 'white' : 'black',
    padding: 10,
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}


function CitySelect(props: any) {

  return (
    <div>
        <h1>Select city...</h1>
        <div className="select-container">
            <Select options={optionsCities} styles={styles} onChange={props.onChange}/>
        </div>
    </div>
    )
}

export default CitySelect;
