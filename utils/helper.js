export const formatDate = (date) => {
  const newDate = new Date(date);
  const dateOptions = {
    // timeZone: 'UTC',
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  //   console.log('formatdate', newDate);

  return newDate.toLocaleDateString('vi-Vn', dateOptions);
};

export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export const isClient = typeof window !== 'undefined';

export const getTotalPitchs = (arr) => {
  return arr?.reduce((sum, obj) => sum + Number(obj.amountPitch), 0);
};

export const compareView = (a, b) => {
  const viewItem1 = a?.countRead;
  const viewItem2 = b?.countRead;
  if (viewItem1 > viewItem2) {
    return -1;
  }
  if (viewItem1 < viewItem2) {
    return 1;
  }
  return 0;
};

export const compareDate = (a, b) => {
  const dateItem1 = new Date(a.createdAt);
  const dateItem2 = new Date(b.createdAt);
  return dateItem1 - dateItem2;
};

// lấy thông tin sân: vd 7vs7
export const getPrimaryPitch = (obj, id) => {
  // console.log("getPrimaryPitch", obj)
  return obj.listPitchs.find((item) => item.id === id);
};

// lấy ra vị trí của sân được chọn
export const getPositionPitch = (obj, id) => {
  return obj.children.find((item) => item.id === id).title;
};
