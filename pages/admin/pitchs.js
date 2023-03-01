import {
  CalendarOutlined,
  CheckCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusSquareOutlined,
  StopOutlined,
  TrophyOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { Button, Col, Popconfirm, Row, Space, Table, Tabs } from 'antd';
import Loading from 'component/Global/Loading';
import { Notification } from 'component/Global/Notification';
import MyCalendar from 'component/MyCalendar';
import useModal from 'hooks/useModal';
import AdminLayout from 'layouts/AdminLayout';
import dynamic from 'next/dynamic';
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { formatNumber } from 'utils/utils';

const AddPitchModal = dynamic(() => import('component/ModalPage/AddPitchModal'), {
  ssr: false,
  loading: () => null,
});
// const MyCalendar = dynamic(() => import('component/MyCalendar'), {
//   ssr: false,
//   loading: () => null,
// });

function Pitchs() {
  // const { TabPane } = Tabs;
  const dispatch = useDispatch();
  const { isOpen, toggleOpen } = useModal();
  const [activeKey, setActiveKey] = useState('1');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [row, setRow] = useState({});
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPage, setTotalPage] = useState(0);

  // const dataStore = useSelector((state) => state.pitch.data);

  const [dataBookings, setDataBookings] = useState([]);
  const [data2, setData2] = useState([]);

  const fetch = useCallback(() => {
    setIsLoading(true);
    dispatch({
      type: 'pitch/fetch',
      callback: (response) => {
        if(response?.data?.success){
          setData2(response?.data?.result);
          setIsLoading(false);
        }else {Notification(response?.data?.message, 'error'); setIsLoading(false)}
      },
    });
  }, [dispatch]);

  // fetch những user đang chờ xử lý đặt sân
  const fetchBooking = useCallback(() => {
    setIsLoading(true);
    dispatch({
      type: 'bookings/fetch',
      callback: (response) => {
        if (response?.data?.success) {
          setDataBookings(response?.data?.result);
          setIsLoading(false);
        }else {Notification(response?.data?.message, 'error'); setIsLoading(false)}
      },
    });
  }, [dispatch]);

  useEffect(() => {
    if(activeKey === '2')
    fetch();
  }, [fetch, activeKey]);
  useEffect(() => {
    fetchBooking();
  }, [fetchBooking]);

  // handle Edit
  const handleEdit = (record) => {
    setRow(record);
    toggleOpen();
  };

  // handleConfirm
  const handleConfirm = (record, type) => {
    console.log('record', record, type);
    setIsLoading(true);
    if (type === true) {
      const addItem = {
        ...record,
        isBooked: type,
      };
      dispatch({
        type: 'bookings/update',
        payload: {
          id: record.key,
          params: addItem,
        },
        callback: (res) => {
          if (res.data.success) {
            Notification(res.data.message);
            fetchBooking();
          } else Notification(res.data.message, 'error');
          setIsLoading(false);
        },
      });
    } else {
      const addItem = {
        ...record,
        isBooked: type,
        timeStart: record?.timeStart,
        timeEnd: record?.timeEnd,
        day: record?.day
      };
      dispatch({
        type: 'bookings/delete',
        payload: {
          id: record.key,
          params: addItem
        },
        callback: (res) => {
          if (res.data.success) {
            Notification(res.data.message);
            fetchBooking();
          } else Notification(res.data.message, 'error');
          setIsLoading(false);
        },
      });
    }
  };

  // }
  const handlePitch = (record) => {
    setIsDisabled(false);
    setRow(record);
    setActiveKey('3');
  };
  const handleDelete = (record) => {
    dispatch({
      type: 'pitch/delete',
      payload: { id: record.key },
      callback: (result) => {
        if (result.data.success) {
          Notification(result.data.message);
          fetch();
        } else Notification(result.data.message, 'error');
      },
    });
    fetch();
  };
  const handleStop = (record) => {
    const addItem = { ...record, isActive: !record.isActive };
    dispatch({
      type: 'pitch/update',
      payload: { id: record.key, params: addItem },
      callback: (result) => {
        if (result.data.success) {
          Notification(result.data.message);
          fetch();
        } else Notification(result.data.message, 'error');
      },
    });
  };

  // lấy ra data những user đặt sân đang chờ duyệt
  const getDataBooked = (data) => {
    return data?.filter((item) => item.isBooked === false);
  };

  const columns1 = [
    {
      dataIndex: null,
      title: 'STT',
      render: (text, record, index) => formatNumber(index + 1),
    },
    {
      title: 'Sân bóng',
      dataIndex: 'namePitch',
      key: 'namePitch',
    },
    {
      title: 'Loại sân',
      dataIndex: ['typePitch', 'childPitch'],
      key: ['typePitch', 'childPitch'],
      render: (_, record) => (
        <p>
          {record?.typePitch} - {record?.childPitch}
        </p>
      ),
    },
    {
      title: 'Tài khoản đặt',
      dataIndex: 'infoUser',
      key: 'infoUser',
      render: (text) => <p>{text?.username}</p>,
    },
    {
      title: 'Thời gian',
      dataIndex: 'day',
      key: 'day',
    },
    {
      title: 'Đặt cọc',
      dataIndex: 'price',
      key: 'price',
      render: (text) => formatNumber(text),
    },
    {
      title: 'Hình thức thanh toán',
      dataIndex: 'infoPaypal',
      key: 'infoPaypal',
      render: (text) => <p>{text?.title}</p>,
    },
    {
      title: 'Tác vụ',
      dataIndex: '',
      key: '',
      render: (_, record) => (
        <Space wrap>
          <Popconfirm
            title="Xác nhận từ chối"
            description="Bạn chắc chắn xóa yêu cầu này?"
            onConfirm={() => handleConfirm(record, false)}
          >
            <Button type="primary" danger>
              Từ chối
            </Button>
          </Popconfirm>
          <Popconfirm
            title="Xác nhận thành công"
            description="Bạn muốn chấp nhận yêu cầu này?"
            onConfirm={() => handleConfirm(record, true)}
          >
            <Button type="primary">Chấp nhận</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const columns2 = [
    {
      dataIndex: null,
      title: 'STT',
      render: (text, record, index) => formatNumber(index + 1),
    },
    {
      title: 'Loại sân',
      key: 'type',
      dataIndex: 'listPitchs',
      render: (text) => (
        <React.Fragment>
          {text.map((item) => (
            <p key={item?.id}>
              Sân: {item?.pitch} - {item?.amountPitch} sân
            </p>
          ))}
        </React.Fragment>
      ),
    },
    {
      title: 'Thông tin sân',
      key: 'name',
      dataIndex: ['title', 'address', 'phone', 'email', 'facebook', 'website'],
      render: (text, record) => (
        <React.Fragment>
          <h5>{record?.title}</h5>
          <p>Địa chỉ: {record?.address}</p>
          <p>SĐT: {record?.phone}</p>
          <p>Email: {record?.email}</p>
          <p>Facebook: {record?.facebook}</p>
          <p>Website: {record?.website}</p>
        </React.Fragment>
      ),
    },
    // {
    //   title: 'Ảnh đại diện',
    //   key: 'thumbnail',
    //   dataIndex: 'thumnail',
    //   render: (text, record) => console.log('thumbnail', text),
    //   // <Image src={text} width={150} />
    // },
    {
      title: 'Tác vụ',
      dataIndex: '',
      key: '',
      render: (_, record) => (
        <div className="d-flex flex-column gap-2">
          <Button type="primary" icon={<TrophyOutlined />} onClick={() => handlePitch(record)}>
            Đặt sân
          </Button>
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)}>
            Sửa thông tin
          </Button>
          <Row gutter={16}>
            <Col span={12}>
              <Button
                // type="dashed"
                icon={record.isActive ? <StopOutlined /> : <CheckCircleOutlined />}
                danger
                style={{ width: '100%' }}
                onClick={() => handleStop(record)}
              >
                {record.isActive ? 'Dừng' : 'Hoạt động'}
              </Button>
            </Col>
            <Col span={12}>
              <Button
                type="primary"
                icon={<DeleteOutlined />}
                danger
                style={{ width: '100%' }}
                onClick={() => handleDelete(record)}
              >
                Xóa
              </Button>
            </Col>
          </Row>
        </div>
      ),
    },
  ];

  // items props Tabs Component
  const initialItems = [
    {
      key: '1',
      label: (
        <span>
          <UnorderedListOutlined />
          Yêu cầu đặt sân
        </span>
      ),
      children: <Space direction="vertical" style={{ width: '100%' }}>
        <Button
        className='btn btn-filter'
            // type="primary"
            onClick={() => fetchBooking()}
          >
            Tải lại dữ liệu
          </Button>
        <Table columns={columns1} dataSource={getDataBooked(dataBookings)} />
      </Space>,
    },
    {
      key: '2',
      label: (
        <span>
          <UnorderedListOutlined />
          Danh sách sân
        </span>
      ),
      children: (
        <Space direction="vertical" style={{ width: '100%' }}>
          <Button
            type="primary"
            icon={<PlusSquareOutlined />}
            onClick={() => {
              toggleOpen();
              setRow({});
            }}
          >
            Thêm sân mới
          </Button>
          <Table
            columns={columns2}
            dataSource={data2}
            pagination={{ pageSize: 8 }}
            // rowClassName={(record) => !record.isActive && 'disabled-row'}
          />
        </Space>
      ),
    },
    {
      key: '3',
      label: (
        <span>
          <CalendarOutlined />
          Đặt sân
        </span>
      ),
      children: <MyCalendar data={row} />,
      disabled: isDisabled,
    },
  ];
  // const [items, setItems] = useState(initialItems);

  const items = initialItems;
  //

  const handleTabClick = (key) => {
    // console.log('key', key);
    if (key !== items[2].key) {
      setIsDisabled(true);
    }
  };

  return (
    <AdminLayout title="Sân bóng" breadName="Sân bóng">
      {/* {console.log('data render', data2)} */}
      {/* <Spin spinning={isLoading}> */}
      <Loading spinning={isLoading}>
        <Tabs
          activeKey={activeKey}
          items={items}
          onChange={(key) => setActiveKey(key)}
          onTabClick={(key) => handleTabClick(key)}
        />
        <AddPitchModal
          row={row}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          isOpen={isOpen}
          toggleOpen={toggleOpen}
          fetchList={fetch}
        />
      </Loading>
      {/* </Spin> */}
    </AdminLayout>
  );
}

export default Pitchs;
