import { Layout, Row, Col, Button, Table, Badge, Spin } from 'antd';
// import { ChartCustom } from 'component/Chart';
import { Notification } from 'component/Global/Notification';
import useModal from 'hooks/useModal';
import AdminLayout from 'layouts/AdminLayout';
import dynamic from 'next/dynamic';
import { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

const AddAccountModal = dynamic(() => import('component/ModalPage/AddAccountModal'), {
  ssr: false,
  loading: () => null,
});

function Owners() {
  const [listOwner, setListOwner] = useState([]);
  // const page = 1;
  // const [page, setPage] = useState(1);
  const [allOwner, setAllOwner] = useState(0);
  const { isOpen, toggleOpen } = useModal();
  const [isLoading, setIsLoading] = useState(true);
  const [row, setRow] = useState({});

  const dispatch = useDispatch();

  const fetch = useCallback(() => {
    setIsLoading(true);
    dispatch({
      type: 'accounts/fetchAllAccount',
      payload: { typeUser: 'owners' },
      callback: (result) => {
        // console.log(result);
        if (result?.data?.success) {
          setListOwner(result?.data?.result);
          setAllOwner(result?.data?.result.length);
          setIsLoading(false);
        }
      },
    });
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch({
  //     type: 'accounts/fetchListAccount',
  //     payload: {
  //       currentPage: page,
  //       typeUser: 'owners',
  //     },
  //     callback: (response) => {
  //       // console.log(response);
  //       if (response?.data?.success) {
  //         setListOwner(response?.data?.result);
  //         setIsLoading(false);
  //       }
  //     },
  //   });
  // }, [page, dispatch]);

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
  //       label: 'Số lượng chủ sân',
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

  const deleteAccount = (id) => {
    dispatch({
      type: 'accounts/deleteOneAccount',
      payload: {
        id,
        typeUser: 'owners',
      },
      callback: (response) => {
        // console.log(response);
        if (response?.data?.success) {
          Notification(response?.data?.message);
          fetch();
        } else {
          Notification(response?.data?.message, 'error');
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
      key: 'idNumber',
      width: 50,
    },
    {
      title: 'Tên tài khoản',
      dataIndex: 'username',
      key: 'username',
      width: 250,
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
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
            onClick={() => deleteAccount(record?.key)}
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

  const handleClick = () => {
    toggleOpen();
    setRow({});
  };

  return (
    <AdminLayout title="Chủ sân" breadName="Chủ sân">
      <Spin spinning={isLoading}>
        <Layout style={{ paddingInline: '20px' }}>
          <Row>
            <Col span={24}>
              <div className="box-item">
                <h4>Số lượng chủ sân</h4>
                {/* <ChartCustom dataChart={dataChart} type="bar" /> */}
              </div>
            </Col>
          </Row>
          <Row className="box-item" style={{ marginTop: '20px' }}>
            <Col span={12}>
              <h4>Danh sách chủ sân: {allOwner} chủ sân</h4>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              <Button type="primary" onClick={() => handleClick()}>
                Thêm chủ sân
              </Button>
            </Col>
            <Col span={24}>
              <Table
                columns={columns}
                dataSource={listOwner}
                style={{ width: '100%' }}
                rowKey={(item) => item.key}
              />
            </Col>
          </Row>
          <AddAccountModal
            row={row}
            fetchList={fetch}
            isOpen={isOpen}
            toggleOpen={toggleOpen}
            typeAccount="owners"
          />
        </Layout>
      </Spin>
    </AdminLayout>
  );
}

export default Owners;
