import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Radium from 'radium';

const styles = {
  container:{
    '@media screen and (min-width: 800px)': {
      width: '80%',

    },
    '@media screen and (max-width: 800px)': {
      width: '100%',
    },
    marginBottom: '1rem',
  },
  buttonContainer: {
      display: 'flex',
  },
  distanceText: {
      width: '50%',
      display: 'flex',
      alignItems: 'center',
  },
  buttonArea: {
      width: '50%',
      display:'flex',
      flexDirection:'row-reverse',
  }
};

@Radium
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
      const { longitude, latitude, currentLocation } = this.props;
      const { longitude: _lon, latitude: _lat } = currentLocation;
      window.open(`http://maps.google.com/maps?saddr=${_lat},${_lon}&daddr=${latitude},${longitude}`, 'new');
    }

    roundOff(value){
      const _pow = Math.pow( 10 , 2 ) ;
      return Math.round( value * _pow ) / _pow ;
    }

    render() {
        const { imageurl } = this.props;
        const imageStyle = {
              height: '300px',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundImage: `url(${imageurl})`,
        };
        return (
          <div style={styles.container}>
          <Card>
              <CardMedia
                overlay={<CardTitle title={this.props.name} />}
              >
                <div style={imageStyle} />
              </CardMedia>
              <CardText>
                <div style={styles.buttonContainer}>
                  <div style={styles.distanceText}>
                    <div>この店舗までの距離：{this.roundOff(this.props.distance)}km</div>
                  </div>
                  <div style={styles.buttonArea}>
                    <RaisedButton
                        label="店舗へGO"
                        onTouchTap={this._onPress}
                        backgroundColor="rgb(255, 230, 0)"
                        labelColor="black"
                    />
                  </div>
                </div>
              </CardText>
          </Card>
        </div>
                  );
    }
}
