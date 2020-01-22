import React from 'react';

import { addItem } from '../actions/addItem'

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => {
          addItem(props.feature.id)
        }} >Add</button>

      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
