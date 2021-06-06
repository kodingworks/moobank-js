import AxiosClient from '../lib/extensions/axios_client'

describe('Axios clien test', () => {
  const axiosClient = new AxiosClient()

  it('check init', () => {
    expect(axiosClient).toBeInstanceOf(AxiosClient)
  })

  it('check get page', () => {
    return axiosClient.send(
      'GET',
      'https://www.google.com',
      {},
      {
        header: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }
    ).then(result => {
      expect(result.success).toBeTruthy()
    })
    .catch(err => {
      console.log(err)
    })
  })
})
