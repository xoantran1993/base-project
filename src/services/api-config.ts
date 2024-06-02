const env = {
  local: 'https://staging.sellonboard.com',
  staging: 'https://staging.sellonboard.com',
};

export default class ApiConfig {
  constructor() {}

  static isDebug = false;
  static isLog = false;

  static baseUrl = env.staging;

  //user
  static login = '/login';
  static logout = '/register';
}
