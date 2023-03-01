import { Layout, Row, Col, Button, Table, Badge, Spin } from 'antd';
// import { ChartCustom } from 'component/Chart';
import { Notification } from 'component/Global/Notification';
import useModal from 'hooks/useModal';
import AdminLayout from 'layouts/AdminLayout';
import dynamic from 'next/dynamic';
import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { formatNumber } from 'utils/utils';

const AddAccountModal = dynamic(() => import('component/ModalPage/AddAccountModal'), {
  ssr: false,
  loading: () => null,
});

function Users() {
  const { isOpen, toggleOpen } = useModal();
  const [isLoading, setIsLoading] = useState(true);
  const [listEmployee, setListEmployee] = useState([]);
  const [row, setRow] = useState({});
  const [totalEmployee, setTotalEmployee] = useState(0);

  const dispatch = useDispatch();

  const fetch = useCallback(() => {
    setIsLoading(true);
    dispatch({
      type: 'accounts/fetchAllAccount',
      payload: { typeUser: 'users' },
      callback: (result) => {
        // console.log(result);
        if (result?.data?.success) {
          setListEmployee(result?.data?.result);
          setTotalEmployee(result?.data?.result.length);
          setIsLoading(false);
        }
      },
    });
  }, [dispatch]);

  useEffect(() => {
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
  //       label: 'Số lượng nhân viên',
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
      type: 'accounts/deleteOneAccount',
      payload: { id, typeUser: 'users' },
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
      dataIndex: 'idNumber',
      width: 50,
      render: (text, record, index) => formatNumber(index + 1),
    },
    {
      title: 'Tên tài khoản',
      dataIndex: 'username',
      key: 'username',
      // width: 250,
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Chức vụ',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createAt',
      key: 'createAt',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'statusActive',
      key: 'statusActive',
      render: (text) => (
        <Badge status={text ? 'success' : 'default'} text={text ? 'Online' : 'Offline'} />
      ),
    },
    {
      title: '',
      dataIndex: 'options',
      key: 'options',
      render: (text, record) => (
        <div>
          <Button
            style={{
              margin: '0 5px',
              background: '#ff4d4f',
              color: '#fff',
              borderColor: '#ff4d4f',
            }}
            onClick={() => handleDelete(record?.key)}
          >
            Xóa
          </Button>
          <Button style={{ margin: '0 5px' }} onClick={() => handleEdit(record)}>
            Sửa
          </Button>
        </div>
      ),
    },
  ];

  return (
    <AdminLayout title="Người dùng" breadName="Người dùng">
      <Layout style={{ paddingInline: '20px' }}>
        <Spin spinning={isLoading}>
          {/* <Row>
            <Col span={24}>
              <div className="box-item">
                <h4>Số lượng nhân viên</h4>
                <ChartCustom dataChart={dataChart} type="bar" />
              </div>
            </Col>
          </Row> */}
          <Row className="box-item" style={{ marginTop: '20px' }}>
            <Col span={12}>
              <h4>Danh sách người dùng: {totalEmployee} người dùng</h4>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              <Button type="primary" onClick={() => handleClick()}>
                Thêm người dùng
              </Button>
            </Col>
            <Col span={24}>
              <Table
                columns={columns}
                dataSource={listEmployee}
                style={{ width: '100%' }}
                rowKey={(item) => item.key}
              />
            </Col>
          </Row>
        </Spin>
        <AddAccountModal
          row={row}
          fetchList={fetch}
          isOpen={isOpen}
          toggleOpen={toggleOpen}
          typeAccount="users"
        />
      </Layout>
    </AdminLayout>
  );
}

export default Users;
