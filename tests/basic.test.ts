import Moobank from '..'
import AbstractGateway from '../lib/abstract_gateway'
import AbstractRequest from '../lib/message/abstract_request'
import RequestInterface from '../lib/message/request_interface'
import AxiosClient from '../lib/extensions/axios_client'
import Parameter from '../lib/parameter'
import ResponseInterface from '../lib/message/response_interface'

class GatewayConcrete extends AbstractGateway {
  getName(): string {
    return 'Gateway Concrete Class'
  }

  getModuleName(): string {
    return 'gateway-concrete-class'
  }

  concrete(): RequestInterface {
    return this.createRequest(new RequestConcrete)
  }
}

class RequestConcrete extends AbstractRequest {
  getEndpoint(): string {
    return 'https://www.google.com'
  }

  createResponse(): ResponseInterface {
    return
  }
}

describe('Basic test', () => {
  it('check basic class init', () => {
    const moobank = new Moobank
    expect(moobank).toBeInstanceOf(Moobank)

    const gateway = moobank.createGateway(new GatewayConcrete, new AxiosClient)
    expect(gateway).toBeInstanceOf(GatewayConcrete)
    expect(gateway.getModuleName()).toBe('gateway-concrete-class')

    const req = gateway.createRequest(new RequestConcrete, {foo: 'bar'})
    expect(req.getEndpoint() === 'https://www.google.com').toBeTruthy()
  })
})

describe('Parameter test', () => {
  const parameter = new Parameter()

  it('check parameter init', () => {
    expect(parameter).toBeInstanceOf(Parameter)
  })

  it('check parameter read all', () => {
    expect(Object.keys(parameter.all()).length < 1).toBeTruthy()
  })

  it ('check parameter store data & get data', () => {
    parameter.set('foo', 'bar')
    expect(Object.keys(parameter.all()).length > 0).toBeTruthy()
    expect(parameter.get('foo') == 'bar').toBeTruthy()

    parameter.set('foo', 'not bar')
    expect(parameter.get('foo') == 'not bar').toBeTruthy()
  })
})