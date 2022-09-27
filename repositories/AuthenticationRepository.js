import Repository, { baseUrl, getError } from "./genericRepository";

const routes = {
  login: "/api/login",
  logout: "/api/user/logout",
  signup: "/api/register",
  deposit: "/api/user/deposit/insert",
  withdraw: "/api/user/withdraw/store",
  depositHistory: "/api/user/deposit/history",
};

class AuthenticationRepository {
  async userRegister(payload) {
    try {
      const request = await Repository.post(
        `${baseUrl}${routes.signup}`,
        payload
      );
      const { data } = request;
      console.log(data);
      return {
        data: data.user,
      };
    } catch (error) {
      throw getError(error);
    }
  }

  async login(payload) {
    try {
      const postObject = { ...payload };
      const request = await Repository.post(
        `${baseUrl}${routes.login}`,
        payload
      );
      const { data } = request;
      console.log(data.data);
      return {
        token: data.data.access_token,
        user: data.data.user,
      };
    } catch (error) {
      console.log(error);
      throw getError(error);
    }
  }

  async logout() {
    try {
      await Repository.get(`${baseUrl}${routes.logout}`);
    } catch (error) {
      throw getError(error);
    }
  }

  async deposit(payload) {
    try {
      const request = await Repository.post(
        `${baseUrl}${routes.deposit}`,
        payload
      );
      const { data } = request;
      console.log(data);
      return {
        data: data.deposit,
      };
    } catch (error) {
      throw getError(error);
    }
  }

  async withdraw(payload) {
    try {
      const request = await Repository.post(
        `${baseUrl}${routes.withdraw}`,
        payload
      );
      const { data } = request;
      console.log(data);
      return {
        data: data.data,
      };
    } catch (error) {
      throw getError(error);
    }
  }
  async depositHistory() {
    try {
      const request = await Repository.get(
        `${baseUrl}${routes.depositHistory}`
      );
      const { data } = request;

      return {
        data: data.data.deposit.data,
      };
    } catch (error) {
      throw getError(error);
    }
  }
}

export default new AuthenticationRepository();
