import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class RowOfJiro extends Component {
    constructor(props) {
        super(props);

        this._onPress = this._onPress.bind(this);
    }
    static defaultProps = {
        name: '',
        longitude: 0,
        latitude: 0,
        distance: 0,
    }

    _onPress() {
      const { longitude, latitude } = this.props;
      window.open(`http://maps.google.com/maps?q=${latitude},${longitude}`, 'new');
    }

    // http://maps.google.com/maps?q=35.656573,139.69952+(ココ)
    render() {
        return (
          <Card>
              <CardMedia
                overlay={<CardTitle title={this.props.name} />}
              >
                <img src="https://static.retrip.jp/article/3462/images/3462f2485fa0-a586-41c5-80b6-e746446dcf5e_m.jpg" />
              </CardMedia>
              <CardText>
                この店舗までの距離：{this.props.distance}m
                <FlatButton label="店舗へGO" onTouchTap={this._onPress}/>

              </CardText>
          </Card>
                  );
    }
}
