import ClientInterface from "./client_interface";
import RequestInterface from "./message/request_interface";
import ParameterBag from "./parameter";

export default interface GatewayInterface {

  constructor(client: ClientInterface, request: RequestInterface): any

  initialize(parameters: object): void

  getName(): string

  getModuleName(): string

  getParameters(): ParameterBag

  setParameter(parameters: object): void

}