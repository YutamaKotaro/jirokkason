import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Refresh from 'material-ui/svg-icons/action/autorenew';

export default class FAB extends Component {

      _onPress() {
          location.reload();
      }

      render() {
        return (
          <FloatingActionButton
            backgroundColor="rgb(255, 230, 0)"
            style={{
               position:'fixed',
               bottom: '5%',
               right: '5%',
            }}
            onTouchTap={this._onPress}
          >
            <Refresh color={'black'} />
          </FloatingActionButton>
        );
      }
}
