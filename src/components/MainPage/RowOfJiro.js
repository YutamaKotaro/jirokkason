import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
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
      const { longitude, latitude } = this.props;
      window.open(`http://maps.google.com/maps?q=${latitude},${longitude}`, 'new');
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
                    <div>この店舗までの距離：{this.props.distance}km</div>
                  </div>
                  <div style={styles.buttonArea}>
                    <FlatButton label="店舗へGO" onTouchTap={this._onPress}/>
                  </div>
                </div>
              </CardText>
          </Card>
        </div>
                  );
    }
}
