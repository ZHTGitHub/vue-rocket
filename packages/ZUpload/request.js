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
    .then((result) => result.json())
    .then((result) => resolve(result))
    .catch((error) => resolve(error))
  })
}

export default request