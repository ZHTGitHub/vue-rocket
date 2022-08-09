const request = ({
  action,
  headers,
  method,
  body
}) => {
  return new Promise((resolve) => {
    fetch(action, {
      headers,
      method,
      body
    })
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      resolve(response)
    })
    .catch((error) => {
      resolve({
        status: 404
      })
    })
  })
}

export default request