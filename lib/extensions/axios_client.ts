import ClientInterface from '../client_interface'
import axios from 'axios'

enum Method {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete'
}

export default class AxiosClient implements ClientInterface {
  constructor() {}

  /**
   * send request
   *
   * @param method request method
   * @param url url destination
   * @param data sended data
   * @param options general configuration
   * @returns Promise
   */
  async sendRequest(
    method: string,
    url: string,
    data?: object,
    options?: object
  ): Promise<any> {
    let requestConfig = {
      url: url,
      method: Method[method],
      header: options['header'] !== undefined ? options['header'] : {},
      timeout: options['timeout'] !== undefined ? options['timeout'] : 5000, // on ms
      withCredentials:
        options['withCredentials'] !== undefined
          ? options['withCredentials']
          : false,
      params: options['param'] !== undefined ? options['param'] : {},
    }

    if (method == 'GET') {
      requestConfig['params'] = data
    } else if (method == 'POST') {
      requestConfig['data'] = data
    } else {
      requestConfig['data'] = data
    }

    let result = null
    try {
      result = await axios(requestConfig)
    } catch (err) {
      return {
        success: false,
        message: err,
      }
    }

    return {
      success: true,
      data: result.data,
    }
  }

  /**
   * send request and get response as a promise
   *
   * @param method request method
   * @param url url destination
   * @param data sended data
   * @param options general configuration
   * @returns Promise
   */
  async send(
    method: string,
    url: string,
    data?: object,
    options?: object
  ): Promise<any> {
    const response = await this.sendRequest(method, url, data, options)

    return new Promise((resolve) => {
      resolve(response)
    })
  }
}