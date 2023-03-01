import CONFIG from 'utils/config';
import request from 'utils/request';

// import stringify from 'utils/stringifyParams';

export async function queryAccountList(params) {
  const page = params?.currentPage || 1;
  return request(`${CONFIG.API_SERVER_2}/${params?.typeUser}/getlist?page=${page}`);
}

export async function queryAccountAll(params) {
  return request(`${CONFIG.API_SERVER_2}/${params?.typeUser}/getall`);
}

export async function createAccount(params) {
  console.log(params);
  return request(`${CONFIG.API_SERVER_2}/${params?.typeUser}/addone`, {
    method: 'POST',
    body: JSON.stringify(params?.data),
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export async function deleteAccount(params) {
  return request(`${CONFIG.API_SERVER_2}/${params?.typeUser}/deleteone?id=${params?.id}`, {
    method: 'DELETE',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export async function updateAccount(params) {
  return request(`${CONFIG.API_SERVER_2}/${params?.typeUser}/updateone?id=${params?.id}`, {
    method: 'PUT',
    body: JSON.stringify(params?.data),
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
