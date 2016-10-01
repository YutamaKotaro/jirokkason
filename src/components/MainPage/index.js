import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { COLORS, SUB_PAGE_PATH } from '../../constants';
import { browserHistory } from 'react-router';
import DATA from './../../../data';
import callApi from './../../middlewares/apiSend';
import getCurrentsend from './../../middlewares/apiSendCurrentPosition';
import RowOfJiro from './RowOfJiro';
import Radium,{ StyleRoot } from 'radium';
import FAB from './FAB';

const style = {
    margin: 5,
};

const styles = {
    container: {
      '@media screen and (min-width: 800px)': {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      '@media screen and (max-width: 800px)': {
        width: '100%',
      },
      marginBottom: '8rem',
    },
    header: {
      backgroundColor:"rgb(247, 226, 25)",
      width:'100%',
      height:'64px',
      marginBottom: '10px',
      boxShadow: '0px 3px 3px rgb(143, 143, 143)',
      lineHeight: '64px',
      paddingLeft:'5px',
    },
    headerText: {
      color:' black',
      fontSize: '35px',
      fontWeight: '900',
      fontFamily: 'font-family: "Hiragino Kaku Gothic ProN","メイリオ", sans-serif',
    },
    headerTextInner: {
      color:'rgb(203, 28, 28)',
      paddingRight:'5px',
    },
}

@Radium
export default class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            currentLocation: {
                latitude: 0,
                longitude: 0,
            },
            mobile: false,
        };

        const _ua = (function(u){
          return {
            Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1)
              || u.indexOf("ipad") != -1
              || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
              || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
              || u.indexOf("kindle") != -1
              || u.indexOf("silk") != -1
              || u.indexOf("playbook") != -1,
            Mobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
              || u.indexOf("iphone") != -1
              || u.indexOf("ipod") != -1
              || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
              || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
              || u.indexOf("blackberry") != -1
          }
        })(window.navigator.userAgent.toLowerCase());
        const { Mobile } = _ua;
        this.setState({mobile: Mobile});
    }

    componentWillMount() {
        getCurrentsend(
          (data) => {this.setState({data})},
          (currentLocation) => {this.setState({currentLocation})}
        );
    }

    _renderRow() {
        const array = this.state.data.map((prop, index) => (
            <RowOfJiro
                key={index}
                {...prop}
                currentLocation={this.state.currentLocation}
                mobile={this.state.mobile}
            />
        ))
        return array;
    }

    render() {
        return (
            <div>
              <div style={styles.header}>
                  <span style={styles.headerText}>
                    <span style={styles.headerTextInner}>ラーメン</span>
                    近二郎
                  </span>
              </div>
              <div style={[styles.container]}>
                  {this._renderRow()}
              </div>
              <FAB />
            </div>
        );
    }
}
