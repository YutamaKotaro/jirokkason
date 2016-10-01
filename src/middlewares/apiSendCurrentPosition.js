

const getCurrentsend = (callback, _callback) =>{
  navigator.geolocation.getCurrentPosition(
    res => {
        const { coords: { latitude, longitude }} = res;
        _callback({latitude, longitude});
        const _url = `https://ziro-atk.c9users.io/search/${longitude},${latitude}`;
        fetch(_url, {
            headers: {
             'content-type': 'application/json'
            }
        })
          .then(response => response.json())
          .then(res => {
            callback(res);
          })
    },
    err => {
        console.log(err);
    }
  );

};


export default getCurrentsend;
