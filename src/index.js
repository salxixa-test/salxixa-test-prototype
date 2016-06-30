// modules
import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Loader from 'react-loader';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

// material-ui
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

// styles
import Theme from './components/common/Theme';
import './styles/styles.scss'; //Webpack can import CSS files too!

// actions
import {authInitialized} from './actions/authActions';

// components
import App from './components/App';

// Store
import initialState from './reducers/initialState';
import configureStore from './store/configureStore'; //eslint-disable-line import/default

// store initialization
const store = configureStore(initialState);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);
const rootEl = document.getElementById('root');

ReactDOM.render(
    <MuiThemeProvider muiTheme={Theme}>
        <AppContainer>
            <Provider store={store}>
                <App history={history} store={store}/>
            </Provider>
        </AppContainer>
    </MuiThemeProvider>,
    rootEl
);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        // If you use Webpack 2 in ES modules mode, you can
        // use <App /> here rather than require() a <NextApp />.
        const NextApp = require('./components/App').default;
        ReactDOM.render(
            <MuiThemeProvider muiTheme={Theme}>
                <AppContainer>
                    <Provider store={store}>
                        <NextApp history={history} store={store}/>
                    </Provider>
                </AppContainer>
            </MuiThemeProvider>,
            rootEl
        );
    });
}
