import {store} from 'react-redux';
import {travel, user} from 'react-reducers';

const reduxStore = store.init();

const reducers = combinerReducer(
  travel, 
  user
);

console.log(reduxStore);
