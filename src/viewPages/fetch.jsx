export const getOrder = (url, userToken) => {
    return fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + userToken,
        },
      })
      .then((res) => res.json())
      .then((data) => data)
      .catch(error => console.error('Error:', error))
}

export const changeOrderStatus = (url, userToken, data) => {
    return fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + userToken
        },
        body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((data) => data)
      .catch(error => console.error('Error:', error))

}