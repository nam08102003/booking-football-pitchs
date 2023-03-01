import CONFIG from 'utils/config';
import request from 'utils/request';

// import stringify from 'utils/stringifyParams';

export async function login(data) {
  //   const { filter, sort, range, attributes } = params;
  //   const query = {
  //     filter: JSON.stringify(filter),
  //     sort: JSON.stringify(sort || ['createDate', 'DESC']),
  //     range: JSON.stringify(range || [0, 49]),
  //   };
  //   if (attributes) {
  //     query.attributes = attributes;
  //   }
  return request(`${CONFIG.API_SERVER}/v2/auth/login`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  });
}

export async function register(data) {
  //   const { filter, sort, range, attributes } = params;
  //   const query = {
  //     filter: JSON.stringify(filter),
  //     sort: JSON.stringify(sort || ['createDate', 'DESC']),
  //     range: JSON.stringify(range || [0, 49]),
  //   };
  //   if (attributes) {
  //     query.attributes = attributes;
  //   }
  return request(`${CONFIG.API_SERVER}/v2/auth/register`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  });
}
