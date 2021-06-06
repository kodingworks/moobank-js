import ClientInterface from '../client_interface'
import ResponseInterface from './response_interface'
import Parameter from '../parameter'

export default interface RequestInterface {
  initialize(httpClient: ClientInterface, parameters: object | Parameter): void
  getEndpoint(): string
  getMethod(): string
  getData(): object
  getOption(): object
  send(): any
  createResponse(response: any): ResponseInterface
}
