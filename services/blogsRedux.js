import CONFIG from 'utils/config';
import request from 'utils/request';

// import stringify from 'utils/stringifyParams';

export async function queryArticleList(params) {
  const page = params?.currentPage || 1;
  console.log(params);
  return request(
    `${CONFIG.API_SERVER_2}/blogs/getlist?page=${page}&amount=${params?.amount || 8}&typeBlog=${
      params?.typeBlog
    }`,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }
  );
}

export async function queryArticleAll() {
  return request(`${CONFIG.API_SERVER_2}/blogs/getall`);
}

export async function queryArticleOne(params) {
  return request(`${CONFIG.API_SERVER_2}/blogs/getone?id=${params?.id}`);
}

export async function createArticle(data) {
  return request(`${CONFIG.API_SERVER_2}/blogs/addone`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export async function deleteArticle(params) {
  return request(`${CONFIG.API_SERVER_2}/blogs/deleteone?id=${params}`, {
    method: 'DELETE',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export async function updateArticle(payload) {
  const { id, params } = payload;
  // console.log(payload);
  return request(`${CONFIG.API_SERVER_2}/blogs/updateone?id=${id}`, {
    method: 'PUT',
    body: JSON.stringify(params),
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export async function increaseView(payload) {
  // console.log(payload);
  return request(`${CONFIG.API_SERVER_2}/blogs/increaseviews`, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
