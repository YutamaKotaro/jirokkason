import React from 'react';
import ReactDom from 'react-dom';
import Root from './Root';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {StyleRoot} from 'radium';
injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
        <Root />
    </MuiThemeProvider>
);

ReactDom.render(
    <StyleRoot><App /></StyleRoot>,
    document.getElementById('content')
  );
