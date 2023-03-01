import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Image, Input, Modal, Select, Upload } from 'antd';
import { Notification } from 'component/Global/Notification';
import dynamic from 'next/dynamic';
// import MyEditor from 'component/Global/MyEditor';
// import Tags from 'component/Global/Tag';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { formatDate, getBase64 } from 'utils/helper';

const MyEditor = dynamic(() => import('component/Global/MyEditor'), {
  ssr: false,
  loading: () => null,
});
const Tags = dynamic(() => import('component/Global/Tag'), {
  ssr: false,
  loading: () => null,
});

const AddBlogModal = (props) => {
  const [form] = Form.useForm();
  const { isOpen, toggleOpen, dataAdmin, row, fetchList } = props;
  const valueEditor = useSelector((state) => state.editor.data);
  // const dataBlog = useSelector((state) => state.blogs.data);

  const [tags, setTags] = useState([]);
  const [thumbUrl, setThumbUrl] = useState('');
  // const [fileList, setFileList] = useState([]);
  // const formRef = useRef(null);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   form.setFieldsValue({
  //     title: dataModal?.record?.title,
  //     tags: dataModal?.record?.tags,
  //     typeBlog: dataModal?.record?.typeBlog,
  //   });
  // }, [dataModal, form]);
  // hanldeChangeTag
  const handleChangeTag = (tag) => {
    setTags(tag);
  };
  useEffect(() => {
    if (row.key) {
      form.setFieldsValue(row);
      setThumbUrl(row?.image);
      // handleChangeTag(row.tags);
    } else {
      form.resetFields();
      setThumbUrl('');
    }
  }, [row, form]);

  const onCreate = async (values) => {
    console.log('values', values);
    // console.log('row', row);
    const addItem = {
      ...values,
      image: thumbUrl,
      description: valueEditor,
      tags,
      author: dataAdmin?.username,
      date: formatDate(Date()),
    };
    console.log('addItem', addItem);
    if (row.key) {
      dispatch({
        type: 'blogs/updateOneArticle',
        payload: {
          id: row.key,
          params: addItem,
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
        type: 'blogs/postOneArticle',
        payload: addItem,
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

  // const handleChange = (info) => {
  //   console.log('asdasdas', info);
  //   if (info.file.status === 'uploading') {
  //     console.log('uploading');
  //     // return;
  //   }
  //   if (info.file.status === 'done') {
  //     console.log('done');
  //     // getBase64(info.file.originFileObj).then(thumb => {
  //     //   setThumbUrl(thumb);
  //     // });
  //   }
  // };

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
      <Form
        labelCol={{ span: 4 }}
        // ref={formRef}
        form={form}
        // initialValues={row}
      >
        <Form.Item
          label="Tiêu đề"
          labelAlign="left"
          name="title"
          rules={[{ required: true, message: 'Vui lòng nhập tiêu đề' }]}
        >
          <Input placeholder="Nhập tiêu đề ..." />
        </Form.Item>
        <Form.Item label="Nội dung" labelAlign="left" name="content">
          <MyEditor row={row} />
        </Form.Item>
        <Form.Item label="Loại tin tức" labelAlign="left" name="typeBlog">
          <Select placeholder="Chọn loại tin tức" allowClear>
            <Select.Option value="Tin trong nước">Tin trong nước</Select.Option>
            <Select.Option value="Tin quốc tế">Tin quốc tế</Select.Option>
            <Select.Option value="Tin khuyến mãi">Tin khuyến mãi</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Thêm nhãn dãn/Tag" labelAlign="left" name="tags">
          <Tags row={row} handleChangeTag={handleChangeTag} />
        </Form.Item>
        <Form.Item
          name="thumbnail"
          label="Ảnh đại diện"
          labelAlign="left"
          valuePropName="file"
          // getValueFromEvent={normFile}
          rules={[{ required: true, message: 'Vui lòng tải lên ảnh đại diện' }]}
        >
          <Upload
            showUploadList={false}
            // fileList={[{ uid: '-1', url: thumbUrl }]}
            customRequest={async (info) => {
              // console.log('info', info);
              // setFileList(info);
              if (info.file) {
                await getBase64(info.file).then((thumb) => {
                  // console.log('thumb', thumb);
                  setThumbUrl(thumb);
                });
              }
            }}
            // onChange={handleChange}
            listType="picture"
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>TẢI ẢNH LÊN (Tối đa: 1 ảnh)</Button>
            <br />
            {thumbUrl && <Image width={300} src={thumbUrl} alt="image" />}
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddBlogModal;
