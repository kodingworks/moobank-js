export default interface ClientInterface {
  sendRequest(
    method: string,
    url: string,
    data?: object,
    options?: object
  ): Promise<any>
  send(
    method: string,
    url: string,
    data?: object,
    options?: object
  ): Promise<any>
}
