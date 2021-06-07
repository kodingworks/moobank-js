import ClientInterface from './client_interface'
import RequestInterface from './messages/request_interface'
import Parameter from './parameter'

export default interface GatewayInterface {
  initialize(httpClient: ClientInterface, parameters?: object): void

  getName(): string

  getModuleName(): string

  getParameters(): Parameter

  setParameter(parameters: object): void

  createRequest(request: RequestInterface, parameters?: object | Parameter): RequestInterface
}
