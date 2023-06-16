import axios from 'axios'
const baseURL = 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd'

export const get = (url, data) => {
  // eslint-disable-next-line promise/param-names
  return new Promise((reslove, reject) => {
    axios.get(url, { params: data }, {
      baseURL: baseURL
    })
      .then(response => reslove(response.data))
      .catch(err => reject(err.data))
  })
}

export const post = (url, data) => {
  // eslint-disable-next-line promise/param-names
  return new Promise((reslove, reject) => {
    axios.post(url, data, {
      baseURL,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => reslove(response.data))
      .catch(err => reject(err.data))
  })
}
