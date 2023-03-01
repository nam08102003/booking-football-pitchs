import { notification } from 'antd';

export const Notification = (message, type = 'success') => {
  notification[type]({
    message,
  });
};
