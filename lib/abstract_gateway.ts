import ClientInterface from './client_interface'
import RequestInterface from './message/request_interface'
import GatewayInterface from './gateway_interface'
import Parameter from './parameter'

export default abstract class AbstractGateway implements GatewayInterface {
  client: ClientInterface
  request: RequestInterface
  parameters: Parameter

  constructor(client: ClientInterface, request: RequestInterface) {
    this.client = client
    this.request = request
  }

  initialize(parameters: object): void {
    this.setParameter(parameters)
  }
  getParameters(): Parameter {
    return this.parameters
  }
  setParameter(parameters: object): void {
    this.parameters = new Parameter()

    Object.keys(parameters).forEach((key) => {
      this.parameters.set(key, parameters[key])
    })
  }
  abstract getName(): string
  abstract getModuleName(): string
}
