import ClientInterface from './lib/client_interface'
import GatewayInterface from './lib/gateway_interface'
import RequestInterface from './lib/message/request_interface'

export default class Moobank {
  protected gateways: Array<GatewayInterface>

  constructor() {}

  getGateways() {
    return this.gateways
  }

  getGateway(gateway: GatewayInterface) {
    let filter = this.gateways.some((item) => {
      let objName: any = item.constructor['name'].toString()
      if (gateway instanceof objName) {
        return item
      }
    })

    if (filter) {
      return filter
    }

    return null
  }

  createGateway(
    gateway: GatewayInterface,
    client: ClientInterface
  ) {
    let obj = gateway.constructor(client)
    let objName = obj.constructor['name']

    this.gateways[`${objName}`] = obj

    return obj
  }
}
