/* eslint-disable import/extensions */
import React from 'react';
import { render } from '@testing-library/react';
import App from '../App.js';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<App />, div);
  });
});
