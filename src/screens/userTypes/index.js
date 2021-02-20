
import React from 'react';
import UserTypes from './UserTypes';
import  {StateProvider}   from '../../utils/store'

function index() {
  return (
  <StateProvider>
    <UserTypes />
  </StateProvider>
)};

export default index;