import ClientApi from '../../apis/client.api'

export class Client {
  static login(account: string, password: string) {
    return ClientApi.login({ account, password })
  }
}