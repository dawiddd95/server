import {store} from 'react-redux';
import {travel, user} from 'react-reducers';
import {themeProvider} from 'styled-components';

const reduxStore = store.init();

const reducers = combinerReducer(
  travel, 
  user
);

console.log(reduxStore);

const Component = () => (
    <div theme={themeProvider}></div>
)