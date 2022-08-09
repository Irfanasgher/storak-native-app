// const baseUrl = "https://dopelin.thehexaa.com/";
const baseUrl = 'https://api.storak.qa/';

export default {
  server_url: 'https://api.storak.qa/api',
  server_api: baseUrl + 'api/',
  createUrl: value => baseUrl + 'api/' + value,
  resourceUrl: value => baseUrl + value,
};
