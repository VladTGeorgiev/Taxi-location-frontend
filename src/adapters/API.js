const endpoint = 'http://localhost:5000'

const fetchData = () => {
    return fetch(endpoint)
    .then(response => response.json())
  };

const requestUpdate = () => {
    console.log('updating')
    return fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({updateRequest: true})
    }).then(d=>console.log(d))
}

export default {
    fetchData,
    requestUpdate
}