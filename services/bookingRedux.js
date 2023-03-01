import CONFIG from 'utils/config';
import request from 'utils/request';

export async function creatBanking(params) {
  return request(`${CONFIG.API_SERVER_2}/booking/addone`, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
export async function updateBookings(params, id) {
  return request(`${CONFIG.API_SERVER_2}/booking/updateone?id=${id}`, {
    method: 'PUT',
    body: JSON.stringify(params),
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
export async function deleteBookings(params, id) {
  return request(`${CONFIG.API_SERVER_2}/booking/deleteone?id=${id}`, {
    method: 'DELETE',
    body: JSON.stringify(params),
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
export async function fetchBookings() {
  return request(`${CONFIG.API_SERVER_2}/booking/getall`, {
    method: 'GET',
  });
}
