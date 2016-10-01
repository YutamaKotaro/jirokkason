

const getCurrentsend = (callback, _callback) =>{
  navigator.geolocation.getCurrentPosition(
    res => {
        const { coords: { latitude, longitude }} = res;
        _callback({latitude, longitude});
        const _url = `https://ziro-atk.c9users.io/search/${longitude},${latitude}`;
        const request = new XMLHttpRequest();
        request.open('GET', _url);
        request.setRequestHeader('content-type', 'application/json');
        request.onload = () => {
            const response = JSON.parse(request.responseText);
            callback(response);
        };
        request.send();
    },
    err => {
        console.log(err);
    }
  );

};


export default getCurrentsend;
