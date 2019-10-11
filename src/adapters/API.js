const endpoint = 'http://localhost:3000'

const fetchData = () => {
    return fetch(endpoint)
    .then(response => response.json())
  };

export default {
    fetchData
}