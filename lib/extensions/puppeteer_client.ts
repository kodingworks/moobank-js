import ClientInterface from '../client_interface'

export default class PuppeteerClient implements ClientInterface {
  constructor() {}

  sendRequest(
    method: string,
    url: string,
    data?: object,
    options?: object
  ): any {
    //
  }

  getEndpoint(): string {
    return ''
  }

  getMethod(): string {
    return ''
  }

  getData(): object {
    return {}
  }

  getOption(): object {
    return {}
  }

  async send(): Promise<any> {}
}