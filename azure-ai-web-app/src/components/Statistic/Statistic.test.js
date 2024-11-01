import React from 'react';
import ReactDOM from 'react-dom';
import Statistic from './Statistic';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Statistic />, div);
  ReactDOM.unmountComponentAtNode(div);
});