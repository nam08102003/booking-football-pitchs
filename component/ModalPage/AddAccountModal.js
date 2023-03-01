// import { UploadOutlined } from '@ant-design/icons';
import { Form, Input, Modal, Radio } from 'antd';
import { Notification } from 'component/Global/Notification';
// import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const AddBlogModal = (props) => {
  const [form] = Form.useForm();
  const { isOpen, toggleOpen, row, fetchList, typeAccount } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    if (row.key) {
      form.setFieldsValue(row);
    } else form.resetFields();
  }, [row, form]);

  const onCreate = async (values) => {
    console.log('values', values);
    const addItem = {
      ...values,
    };
    console.log('addItem', addItem);
    if (row?.key) {
      dispatch({
        type: 'accounts/updateOneAccount',
        payload: {
          id: row.key,
          data: addItem,
          typUser: typeAccount,
        },
        callback: (result) => {
          if (result.data.success) {
            Notification(result.data.message);
            fetchList();
          } else Notification(result.data.message, 'error');
        },
      });
    } else {
      dispatch({
        type: 'accounts/postOneAccount',
        payload: {
          typeUser: typeAccount,
          data: addItem,
        },
        callback: (result) => {
          if (result.data.success) {
            Notification(result.data.message);
            fetchList();
          } else Notification(result.data.message, 'error');
        },
      });
    }
    toggleOpen();
  };

  return (
    <Modal
      forceRender
      title={row.key ? 'Sửa thông tin' : 'Thêm thông tin'}
      open={isOpen}
      onCancel={toggleOpen}
      width={850}
      okText="Xong"
      cancelText="Quay lại"
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            // form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form labelCol={{ span: 4 }} form={form}>
        <Form.Item
          label="Họ và tên"
          labelAlign="left"
          name="fullname"
          // rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]}
        >
          <Input placeholder="Nhập họ và tên   ..." />
        </Form.Item>
        <Form.Item
          label="Tên tài khoản"
          labelAlign="left"
          name="username"
          rules={[{ required: true, message: 'Vui lòng nhập tên tài khoản' }]}
        >
          <Input placeholder="Nhập tên tài khoản   ..." />
        </Form.Item>
        <Form.Item label="Email" labelAlign="left" name="email">
          <Input placeholder="Nhập email   ..." type="email" autoComplete="username" />
        </Form.Item>
        <Form.Item
          label="Số điện thoại"
          labelAlign="left"
          name="phone"
          hidden={typeAccount === 'users'}
        >
          <Input placeholder="Nhập số điện thoại   ..." />
        </Form.Item>

        <Form.Item
          label="Ngày sinh"
          labelAlign="left"
          name="birthday"
          hidden={typeAccount === 'users'}
        >
          <Input placeholder="Nhập ngày sinh  ..." />
        </Form.Item>
        <Form.Item
          label="Giới tính"
          labelAlign="left"
          name="gender"
          hidden={typeAccount !== 'employees'}
        >
          <Radio.Group>
            <Radio value="Nam"> Nam </Radio>
            <Radio value="Nữ"> Nữ </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Căn cước công dân"
          labelAlign="left"
          name="ciId"
          hidden={typeAccount === 'users'}
        >
          <Input placeholder="Nhập căn cước công dân  ..." />
        </Form.Item>
        <Form.Item
          label="Địa chỉ"
          labelAlign="left"
          name="address"
          hidden={typeAccount === 'users'}
        >
          <Input placeholder="Nhập địa chỉ  ..." />
        </Form.Item>
        <Form.Item
          label="Chức vụ"
          labelAlign="left"
          name="position"
          hidden={typeAccount !== 'employees'}
        >
          <Input placeholder="Nhập chức vụ   ..." />
        </Form.Item>
        <Form.Item
          label="Mật khẩu"
          labelAlign="left"
          name="password"
          rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
        >
          <Input
            placeholder="Nhập mật khẩu   ..."
            type="password"
            autoComplete="current-password"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddBlogModal;
