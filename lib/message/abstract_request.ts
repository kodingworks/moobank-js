import RequestInterface from './request_interface';

export default abstract class AbstractRequest implements RequestInterface {
  abstract getEndpoint(): string
  abstract createResponse(): any

  getMethod(): string {
    return 'GET'
  }

  getOption(): object {
    return {
      header: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    }
  }

  getData(): object {
    return {}
  }
}