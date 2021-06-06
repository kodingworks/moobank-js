export default class Parameter {
  protected parameters: object = {}

  constructor() {}

  all() {
    if (Object.keys(this.parameters).length > 0) {
      return this.parameters
    }

    return {}
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