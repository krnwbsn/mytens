class Users {
  private readonly url: string;

  constructor(url: string) {
    this.url = url;
  }

  public getUsers = (username: string) => ({
    method: 'get',
    uri: `${this.url}/${username}`,
  });

  public getRepos = (username: string) => ({
    method: 'get',
    uri: `${this.url}/${username}/repos`,
  });
}

export default new Users('users');
