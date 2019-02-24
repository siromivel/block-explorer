import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Search from './components/Search';

const store = configureStore();

render(
    <Provider store={store}>
        <Search />
    </Provider>,
    document.getElementById('root')
);
