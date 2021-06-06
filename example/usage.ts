import AxiosClient from '../lib/extensions/axios_client'

const axiosClient = new AxiosClient

axiosClient
  .send(
    'GET',
    'https://www.google.com',
    {},
    {
      withCredentials: true,
      header: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    }
  )
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })