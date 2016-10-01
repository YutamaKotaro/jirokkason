import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { COLORS, SUB_PAGE_PATH } from '../../constants';
import { browserHistory } from 'react-router';
import DATA from './../../../data';
import callApi from './../../middlewares/apiSend';
import getCurrentsend from './../../middlewares/apiSendCurrentPosition';
import RowOfJiro from './RowOfJiro';
import Radium,{ StyleRoot } from 'radium';

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
      }

    }
}

@Radium
export default class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentWillMount() {
        getCurrentsend((data) => {this.setState({data})});
    }

    _renderRow() {
        const array = this.state.data.map((prop, index) => (
            <RowOfJiro key={index} {...prop} />
        ))
        return array;
    }

    render() {
        return (
            <div style={[styles.container]}>
                {this._renderRow()}
            </div>
        );
    }
}
