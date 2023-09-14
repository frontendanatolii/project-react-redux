import { configureStore } from '@reduxjs/toolkit';
import reducer from './Bugs.js';

export const store = configureStore({ reducer });