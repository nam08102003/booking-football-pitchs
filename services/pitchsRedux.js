import CONFIG from 'utils/config';
import request from 'utils/request';

// import stringify from 'utils/stringifyParams';

export async function createPitchs(params) {
  // console.log('params', params);
  return request(`${CONFIG.API_SERVER_2}/pitchs/addone`, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
export async function deletePitchs(params) {
  console.log('params delete', params);
  return request(`${CONFIG.API_SERVER_2}/pitchs/deleteone?id=${params}`, {
    method: 'DELETE',
  });
}
export async function fetchAllPitchs() {
  // console.log('params', params);
  // const { page } = params;
  return request(`${CONFIG.API_SERVER_2}/pitchs/getall`, {
    method: 'GET',
  });
}
export async function fetchActivePitchs(params) {
  // console.log('params', params);
  const query = new URLSearchParams(params).toString();
  return request(`${CONFIG.API_SERVER_2}/pitchs/getlistactive?${query}`, {
    method: 'GET',
  });
}
export async function fetchOnePitchs(params) {
  console.log('params', params);
  // const { page } = params;
  return request(`${CONFIG.API_SERVER_2}/pitchs/getone?id=${params}`, {
    method: 'GET',
  });
}
export async function updatePitchs(params, id) {
  console.log('params', params, id);
  return request(`${CONFIG.API_SERVER_2}/pitchs/updateone/?id=${id}`, {
    method: 'PUT',
    body: JSON.stringify(params),
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export async function findEmptyPitchs(params) {
  // console.log('params', params);
  return request(`${CONFIG.API_SERVER_2}/pitchs/find-empty-pitchs`, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
export async function filterPitchs(params) {
  // const query = new URLSearchParams(params).toString();
  // const {time, day, duration, typePitch} = params;
  const qs =
    // '?' +
    Object.keys(params)
      .map((key) => `${key}=${encodeURI(params[key])}`)
      .join('&');
  // console.log('query', query);
  // console.log('qs', qs);
  return request(`${CONFIG.API_SERVER_2}/pitchs/filter-pitchs?${qs}`, {
    method: 'GET',
  });
}
