const callApi = (request) => {

// var _request = new XMLHttpRequest();
// _request.open('GET',request);
// _request.setRequestHeader('content-Type', 'application/json');
// _request.send()


fetch(request, {
  headers: {
   'content-type': 'application/json'
 },
})
  .then(response => response.json())
  .then(res => {
      console.log(url);
  })
}

export default callApi;
