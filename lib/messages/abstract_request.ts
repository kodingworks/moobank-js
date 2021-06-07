import ClientInterface from '../client_interface'
import Parameter from '../parameter'
import RequestInterface from './request_interface'
import ResponseInterface from './response_interface'

export default abstract class AbstractRequest implements RequestInterface {
  protected httpClient: ClientInterface
  protected parameters: Parameter

  /**
   * set destination url
   *
   * @returns string
   */
  abstract getEndpoint(): string

  /**
   * manipulate and generate new response
   *
   * @param response ResponseInterface
   */
  abstract createResponse(response: any): ResponseInterface

  /**
   * init object
   *
   * @param httpClient
   * @param parameters
   */
  initialize(httpClient: ClientInterface, parameters?: object | Parameter) {
    this.httpClient = httpClient

    if (!this.parameters) {
      this.parameters = new Parameter()
    }

    if (parameters instanceof Parameter) {
      this.parameters = parameters
    } else {
      Object.keys(parameters).forEach((key) => {
        this.parameters.set(key, parameters[key])
      })
    }
  }

  /**
   * set request method
   *
   * @returns string
   */
  getMethod(): string {
    return 'GET'
  }

  /**
   * set request configuration
   *
   * @returns object
   */
  getOption(): object {
    return {
      header: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    }
  }

  /**
   * data to be send
   *
   * @returns object
   */
  getData(): object {
    return {}
  }

  /**
   * send request
   *
   * @returns ResponseInterface
   */
  async send() {
    const response = await this.httpClient.send(
      this.getMethod(),
      this.getEndpoint(),
      this.getData(),
      this.getOption()
    )

    return this.createResponse(response)
  }
}
