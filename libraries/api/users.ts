class Users {
  private readonly url: string;

  constructor(url: string) {
    this.url = url;
  }

  public getUsers = (username: string) => ({
    method: 'get',
    uri: `${this.url}/${username}`,
  });
}

export default new Users('users');
