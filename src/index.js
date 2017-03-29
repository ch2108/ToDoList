import 'bootstrap/dist/css/bootstrap.css'
import './style.css';

import React, {Component} from 'react';
import {render} from 'react-dom';

import Layout from './components/Layout'

render(
  <div className = 'container'>
    <Layout />
  </div>,
  document.getElementById('root')

);
