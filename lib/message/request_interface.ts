export default interface RequestInterface {
  getEndpoint(): string
  getMethod(): string
  getData(): object
  getOption(): object
  createResponse(): any
}