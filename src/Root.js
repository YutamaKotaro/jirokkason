import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { Header, MainPage, SubPage } from './components';
import middleware from './middlewares';
import { DEFAULT_PAGE_PATH, SUB_PAGE_PATH } from './constants';

const reducer = combineReducers({
    routing: routerReducer,
});
const store = createStore(reducer);
const history = syncHistoryWithStore(browserHistory, store);

const Root = () => (
    <Provider store={store}>
        <Router history={history}>
                <Route path={DEFAULT_PAGE_PATH} component={MainPage} />
        </Router>
    </Provider>
);

export default Root;
