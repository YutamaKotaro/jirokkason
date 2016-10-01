import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { COLORS, SUB_PAGE_PATH } from '../../constants';
import { browserHistory } from 'react-router';
import DATA from './../../../data';
import callApi from './../../middlewares/apiSend';
import RowOfJiro from './RowOfJiro';

const style = {
    margin: 5,
};

export default class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: DATA
        };
    }

    componentWillMount() {
        callApi('https://ziro-atk.c9users.io/test')
    }

    _renderRow() {
        const array = this.state.data.map((prop, index) => (
            <RowOfJiro key={index} {...prop} />
        ))
        return array;
    }

    render() {
        return (
            <div>
                {this._renderRow()}
            </div>
        );
    }
}
