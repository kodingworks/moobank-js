export default class ParameterBag {
  protected parameters: Object

  constructor() {}

  all() {
    return this.parameters
  }

  get(key: string, defaultValue?: any) {
    if (this.parameters[key] !== undefined) {
      return this.parameters[key]
    }

    return defaultValue
  }

  set(key: string, value: any) {
    this.parameters[key] = value
  }

  has(key: string) {
    if (this.parameters[key] !== undefined) {
      return true
    }

    return false
  }

  remove(key: string) {
    if (this.has(key)) {
      delete this.parameters[key]
    }
  }
}