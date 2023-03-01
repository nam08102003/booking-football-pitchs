import { Row, Table, Layout, Col, Button, Space, Spin, Image } from 'antd';
import { Notification } from 'component/Global/Notification';
// import { ChartCustom } from 'component/Chart';
// import AddBlogModal from 'component/ModalPage/AddBlogModal';
import useModal from 'hooks/useModal';
import AdminLayout from 'layouts/AdminLayout';
import dynamic from 'next/dynamic';
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { formatNumber } from 'utils/utils';

const AddBlogModal = dynamic(() => import('component/ModalPage/AddBlogModal'), {
  ssr: false,
  loading: () => null,
});

function Blogs() {
  const { isOpen, toggleOpen } = useModal();
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState({});
  const [listBlog, setListBlog] = useState([]);
  // const [reload, setReload] = useState(false);
  const [row, setRow] = useState({});
  // const [blogUpdate, setBlogUpdate] = useState({});
  const [lengthBlog, setLengthBlog] = useState(0);

  const dispatch = useDispatch();

  const fetch = useCallback(() => {
    setIsLoading(true);
    dispatch({
      type: 'blogs/fetchAllArticle',
      callback: (result) => {
        if (result?.data?.success) {
          setListBlog(result?.data?.result);
          setLengthBlog(result?.data?.result.length);
          setIsLoading(false);
        }
      },
    });
  }, [dispatch]);

  useEffect(() => {
    const dataAdmin = JSON.parse(localStorage.getItem('admin'));
    setAdmin(dataAdmin);
    fetch();
  }, [fetch]);

  // const weights = [1000, 1230, 1495, 1594, 1678, 1799, 1923, 2012, 2222, 2375, 3500, 4000];
  // const labels = [
  //   'Tháng 1',
  //   'Tháng 2',
  //   'Tháng 3',
  //   'Tháng 4',
  //   'Tháng 5',
  //   'Tháng 6',
  //   'Tháng 7',
  //   'Tháng 8',
  //   'Tháng 9',
  //   'Tháng 10',
  //   'Tháng 11',
  //   'Tháng 12',
  // ];

  // const dataChart = {
  //   labels,
  //   datasets: [
  //     {
  //       backgroundColor: '#85C240',
  //       label: 'Số lượt đọc tin tức',
  //       data: weights,
  //       fill: true,
  //       borderWidth: 2,
  //       borderColor: '#198754',
  //       lineTension: 0.2,
  //       pointBackgroundColor: '#198754',
  //       pointRadius: 3,
  //     },
  //   ],
  // };

  // hanlde click thêm tin tức
  const handleClick = () => {
    toggleOpen();
    setRow({});
    // setBlogUpdate({
    //   title: 'Thêm tin tức',
    //   record: {},
    // });
  };

  const handleDelete = (id) => {
    dispatch({
      type: 'blogs/deleteOneArticle',
      payload: id,
      callback: (result) => {
        if (result?.data?.success) {
          Notification(result?.data?.message);
          fetch();
        } else {
          Notification(result?.data?.message, 'error');
        }
      },
    });
  };

  const handleEdit = (record) => {
    toggleOpen();
    setRow(record);
  };

  const columns = [
    {
      title: 'STT',
      dataIndex: 'id',
      // key: 'id',
      width: 50,
      render: (text, record, index) => formatNumber(index + 1),
    },
    {
      title: 'Ảnh',
      dataIndex: 'image',
      key: 'image',
      width: 100,
      render: (text) => <Image src={text} alt="ảnh" width={100} />,
    },
    {
      title: 'Tên tin tức',
      dataIndex: 'title',
      key: 'title',
      width: 300,
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'Thể loại',
      dataIndex: 'typeBlog',
      key: 'typeBlog',
    },
    {
      title: 'Người đăng',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Ngày đăng',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Lượt xem',
      dataIndex: 'countRead',
      key: 'countRead',
    },
    {
      title: 'Tác vụ',
      dataIndex: 'options',
      key: 'options',
      render: (text, record) => (
        <Space>
          <Button onClick={() => handleEdit(record)}>Sửa</Button>
          <Button danger type="primary" onClick={() => handleDelete(record.key)}>
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <AdminLayout title="Tin tức" breadName="Tin tức">
      <Layout style={{ paddingInline: '20px' }}>
        {/* <Row>
          <Col span={24}>
            <div className="box-item">
              <h4>Số lượt đọc bài viết mỗi tháng</h4>
              <ChartCustom dataChart={dataChart} type="bar" />
            </div>
          </Col>
        </Row> */}
        <Spin spinning={isLoading}>
          <Row className="box-item" style={{ marginTop: '20px' }}>
            <Col span={12}>
              <h4>Danh sách tin tức: {lengthBlog} tin tức</h4>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              <Button type="primary" onClick={handleClick}>
                Thêm tin tức
              </Button>
            </Col>
            <Col span={24}>
              <Table
                columns={columns}
                dataSource={listBlog}
                style={{ width: '100%' }}
                rowKey={(item) => item.key}
              />
            </Col>
          </Row>
        </Spin>
        <AddBlogModal
          dataAdmin={admin}
          row={row}
          fetchList={fetch}
          // dataModal={blogUpdate}
          isOpen={isOpen}
          toggleOpen={toggleOpen}
        />
      </Layout>
    </AdminLayout>
  );
}

export default Blogs;
