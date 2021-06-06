import GatewayInterface from './gateway_interface'
import ClientInterface from './client_interface'

export default class Factory {
  protected gateways: Array<GatewayInterface>

  constructor() {}

  getGateways() {
    return this.gateways
  }

  getGateway(gateway: GatewayInterface) {
    if (! this.gateways) {
      this.gateways = new Array
    }

    let filter = this.gateways.filter((item) => {
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

  createGateway(gateway: GatewayInterface, httpClient: ClientInterface) {
    const getGateway = this.getGateway(gateway)
    if (getGateway !== null && getGateway[0] !== undefined) {
      return getGateway[0]
    }

    gateway.initialize(httpClient)
    this.gateways.push(gateway)

    return gateway
  }
}
