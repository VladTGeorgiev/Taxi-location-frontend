const endpoint = 'https://taxi-b.herokuapp.com/'

const fetchData = () => {
    return fetch(endpoint)
    .then(response => response.json())
  };

const requestUpdate = () => {
    return fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({updateRequest: 'update'})
    })
    .then(response => response.json())
}

export default {
    fetchData,
    requestUpdate
}