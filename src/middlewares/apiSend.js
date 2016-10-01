const sendApi = (request) => {

// var _request = new XMLHttpRequest();
// _request.open('GET',request);
// _request.setRequestHeader('content-Type', 'application/json');
// _request.send()


fetch(request, {
  method: 'POST',
  body: JSON.stringify({
    longitude: 100,
    latitude: 100
  }),
  headers: {
   'content-type': 'application/json'
 },
})
  .then(response => response.json())
  .then(res => {
      console.log(url);
  })
}

export default sendApi;
