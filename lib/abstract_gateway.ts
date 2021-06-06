import ClientInterface from './client_interface'
import RequestInterface from './message/request_interface'
import GatewayInterface from './gateway_interface'
import Parameter from './parameter'

export default abstract class AbstractGateway implements GatewayInterface {
  httpClient: ClientInterface
  request: RequestInterface
  parameters: Parameter

  constructor(parameters?: object) {
    this.setParameter(parameters)
  }

  abstract getName(): string
  abstract getModuleName(): string

  initialize(httpClient: ClientInterface, parameters?: object|null): void {
    this.httpClient = httpClient
    this.setParameter(parameters)
  }
  getParameters(): Parameter {
    return this.parameters
  }
  setParameter(parameters?: object): void {
    if (! this.parameters) {
      this.parameters = new Parameter()
    }

    if (parameters && Object.keys(parameters).length > 0) {
      Object.keys(parameters).forEach((key) => {
        this.parameters.set(key, parameters[key])
      })
    }
  }
  createRequest(request: RequestInterface, parameters?: object|Parameter) {
    // set parameter for request
    this.setParameter(parameters)

    request.initialize(
      this.httpClient,
      this.parameters
    )

    return request
  }
}
