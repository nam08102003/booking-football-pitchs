import {
  CheckOutlined,
  ClockCircleOutlined,
  DeleteOutlined,
  EditOutlined, // MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import {
  Button,
  Checkbox,
  DatePicker,
  Divider,
  Form,
  Image,
  Input,
  Modal, // notification,
  Popconfirm,
  Select,
  Space,
  Table,
  TimePicker,
  Tooltip,
  Typography,
  Upload,
} from 'antd';
import { Notification } from 'component/Global/Notification';
import dayjs from 'dayjs';
import moment from 'moment';
// import 'moment/locale/vi-vn';
import dynamic from 'next/dynamic';
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import customParseFormat from 'static/js/customParseFormat';
import { getBase64 } from 'utils/helper';
import regexHelper from 'utils/regexHelper';
import { formatNumber } from 'utils/utils';
import { v4 as uuidv4 } from 'uuid';

dayjs.extend(customParseFormat);

const MyEditor = dynamic(() => import('component/Global/MyEditor'), {
  ssr: false,
  loading: () => null,
});
// const NumericInput = dynamic(() => import('component/Global/NumericInput'), {
//   ssr: true,
//   loading: () => null,
// });
// const _ = require('lodash');

// moment.locale('vi');

// const TYPE_ADD = 'add';
// const TYPE_UPDATE = 'update';

const format = 'HH:mm';
const dateFormat = 'YYYY-MM-DD';

const AddPitchModal = ({ toggleOpen, isOpen, row, fetchList }) => {
  const [form] = Form.useForm();
  const initualDurations = [
    {
      label: '60 phút',
      value: '60'
    },
    {
      label: '90 phút',
      value: '90'
    },
    {
      label: '120 phút',
      value: '120'
    },
  ];
  // const datas = useSelector((state) => state.pitch.data);
  const dataStore = useSelector((state) => state.pitch.data);
  const valueEditor = useSelector((state) => state.editor.data);
  const dispatch = useDispatch();
  const getDataSource = (params, option = 'dataSource') => {
    const result = {};
    params?.forEach((item) => {
      item.listPitchs?.forEach((child) => {
        if (option !== 'dataSource') {
          result[child.id] = false;
          child.infoPitchs?.forEach((childTwo) => {
            result[childTwo.key] = true;
          });
        } else result[child.id] = child.infoPitchs;
      });
    });
    // console.log('result', result);
    return result;
  };
  const [data, setData] = useState([]);
  const [pitch, setPitch] = useState('7vs7');
  const [amountPitch, setAmountPitch] = useState('');
  const [price, setPrice] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [isDisabled, setIsDisabled] = useState({});
  const [dataSource, setDataSource] = useState({});
  const [thumbUrl, setThumbUrl] = useState('');
  const [fileList, setFileList] = useState([]);
  // const [dataPost, setDataPost] = useState({});
  // const [initialValues, setInitialValues] = useState({
  //   type: '7vs7',
  // });
  // const initialValue = { key: uuidv4(), hour: '', day: '', price: '' };
  const { isNumber } = regexHelper;
  const resetData = useCallback(() => {
    setData([]);
    form.resetFields();
    setFileList([]);
  }, [form]);
  useEffect(() => {
    setDataSource(getDataSource(dataStore));
    setIsDisabled(getDataSource(dataStore, 'isDisabled'));
  }, [dataStore]);

  useEffect(() => {
    if (row.key) {
      console.log("row", row)
      setData(row?.listPitchs);
      setThumbUrl(row?.image);
      setFileList(row?.slideShow);
      form.setFieldsValue(row);
      // row?.listPitchs?.forEach((item) => {
      //   setDataSource((prev) => ({ ...prev, [item.id]: item.infoPitchs }));
      // });
    } else resetData();
  }, [row, form, resetData]);

  // const rules = {
  //   required: true,
  //   message: null,
  // };

  // title price VND
  const title = <span>{formatNumber(price)} VNĐ</span>;

  const handleChangePitch = (value) => {
    setPitch(value);
  };

  //
  const handleChangeInput = (event, setNewState) => {
    const { value } = event.target;
    const reg = isNumber;
    if ((!Number.isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      setNewState(value);
    }
  };

  // thêm số lượng sân bóng
  const handleAddPitch = () => {
    const dataPitch = { pitch, amountPitch, id: uuidv4() };
    setData((pre) => [...pre, dataPitch]);
  };

  const updateDataSource = (record) => {
    const update = { ...record, hour: time, day: date, price };
    // console.log('update', update);
    setDataSource((prev) => ({
      ...prev,
      [update.idTable]: dataSource[update.idTable]?.map((item) => {
        if (item.key === update.key) {
          return update;
        }
        return item;
      }),
    }));
  };

  // thêm khung giờ
  const handleAddHours = (table) => {
    // console.log('handleAddHours', data);

    const newData = {
      key: uuidv4(),
      hour: '',
      day: '',
      price: '',
      idTable: table.id,
    };
    // setDataSource([...dataSource, newData]);
    // console.log('dataSource', dataSource);
    if (dataSource[table.id]) {
      setDataSource((prev) => ({ ...prev, [table.id]: [...dataSource[table.id], newData] }));
    } else setDataSource((prev) => ({ ...prev, [table.id]: [newData] }));
    // if (!dataSource[table.id]) {
    // console.log('dataSource[table.id]', dataSource[table.id]);
    setIsDisabled((prev) => ({
      ...prev,
      [table.id]: true,
    }));
  };

  // xóa khung giờ
  const handleDeleteHours = (record) => {
    const newData = dataSource[record.idTable].filter((item) => item.key !== record.key);
    setDataSource((prev) => ({
      ...prev,
      [record.idTable]: newData,
    }));
    if (!isDisabled[record.key])
      setIsDisabled((prev) => ({
        ...prev,
        [record.idTable]: false,
      }));
  };

  // onChange
  const handleChangeHour = (value, timeString) => {
    // console.log('handleChangeHour', value, timeString);
    setTime(timeString);
  };
  const handleChangeDate = (value, dateString) => {
    // console.log('handleChangeDate', value, dateString);
    setDate(dateString);
  };
  const handleChangeTable = () => {
    console.log('handleChangeTable');
  };

  // const RangeDisabledTime = () => {
  //   console.log('time', time, date, price);
  //   console.log('completedRow', completedRow);
  //   // Convert về date
  //   const dateAfter = new Date(`${date[0]} ${time[0]}`);
  //   const dateBefore = new Date(`${completedRow?.day[1]} ${completedRow?.hour[1]}`);
  //   //
  //   console.log('newDate', dateAfter, dateBefore);
  //   // Nếu thấy thời gian sau nằm trong thời gian trước
  //   if (dateBefore && dateAfter?.getTime() <= dateBefore?.getTime()) {
  //     console.log('validate true');
  //     return false;
  //   }
  //   return true;
  // };

  // handleComplete
  const handleComplete = (record) => {
    // if (RangeDisabledTime) {
    //   console.log('true', RangeDisabledTime());
    // } else console.log('false', RangeDisabledTime());
    // const flag = RangeDisabledTime();
    // console.log('flag', flag);
    // Nếu thấy trùng khung giờ thông báo lỗi
    // if (!flag) message.error('Lỗi trùng khung giờ trong ngày');
    // console.log('dataSource', dataSource);

    setIsDisabled((prev) => ({
      ...prev,
      [record.key]: true, // flag,
      [record.idTable]: false, // !flag,
      // [record.key]: flag,
      // [record.idTable]: !flag,
    }));
    const dataRow = { ...record, hour: time, day: date, price };
    // if (flag) setCompletedRow(dataRow);
    // console.log('dataRow', dataRow);
    updateDataSource(dataRow);
    // setDataSource(
    //   dataSource[record.idTable].map((item) =>
    //     item.id === record.key ? { ...item, hour: time, day: date, price } : item
    //   )
    // );

    // set
  };
  const handleEditRow = (record) => {
    // console.log('handleEditRow', record);
    setIsDisabled((prev) => ({
      ...prev,
      [record.key]: false,
      [record.idTable]: true,
    }));

    updateDataSource(record);
  };
  // Column Table
  const columns = [
    {
      title: 'Khung giờ',
      dataIndex: 'hour',
      render: (text, record) => {
        return (
          <TimePicker.RangePicker
            // disabledTime={RangeDisabledTime}
            minuteStep={30}
            format={format}
            locale={moment.localeData()}
            // {...other}
            defaultValue={
              text.length > 0 ? [moment(text[0], 'HH:mm'), moment(text[1], 'HH:mm')] : null
            }
            onChange={handleChangeHour}
            disabled={isDisabled[record.key]}
          />
        );
      },
    },
    {
      title: 'Ngày trong tuần',
      dataIndex: 'day',
      render: (text, record) => {
        return (
          <DatePicker.RangePicker
            // format={dateFormat}
            defaultValue={
              text.length > 0 ? [dayjs(text[0], dateFormat), dayjs(text[1], dateFormat)] : null
            }
            onChange={handleChangeDate}
            disabled={isDisabled[record.key]}
          />
        );
      },
    },
    {
      title: 'Giá',
      dataIndex: 'price',
      align: 'right',
      render: (text, record) => (
        <Tooltip
          trigger={['focus']}
          title={title}
          placement="topLeft"
          overlayClassName="numeric-input"
        >
          <Input
            placeholder="Nhập giá"
            disabled={isDisabled[record.key]}
            defaultValue={text}
            // value={text}
            onChange={(event) => handleChangeInput(event, setPrice)}
          />
        </Tooltip>
      ),
    },
    {
      title: 'Hanh dong',
      dataIndex: null,
      key: '',
      render: (record) => (
        <Space>
          {!isDisabled[record.key] ? (
            <Button
              type="primary"
              icon={<CheckOutlined />}
              onClick={() => handleComplete(record)}
            />
          ) : (
            <Button type="primary" icon={<EditOutlined />} onClick={() => handleEditRow(record)} />
          )}
          <Popconfirm title="Chắc chắn xóa?" onConfirm={() => handleDeleteHours(record)}>
            <Button type="primary" icon={<DeleteOutlined />} danger />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  // render header table
  const headerTable = (table) => {
    return (
      <Typography.Text strong>
        Loại sân:&nbsp;{table?.pitch} | SL: {table?.amountPitch}&nbsp;sân
      </Typography.Text>
    );
  };
  // render footer table
  const footerTable = (table) => {
    return (
      <Button
        icon={<ClockCircleOutlined />}
        onClick={() => handleAddHours(table)}
        disabled={isDisabled[table.id]}
      >
        Thêm khung giờ
      </Button>
    );
  };

  const onCreate = (values) => {
    const dataNew = data?.map((item) =>
      item.id === Object.keys(dataSource)?.find((child) => child === item.id)
        ? { ...item, infoPitchs: dataSource[item.id] }
        : item
    );
    // console.log('dataNew', dataNew);
    const addItem = {
      ...values,
      image: thumbUrl,
      slideShow: fileList,
      description: valueEditor,
      listPitchs: dataNew,
      key: uuidv4(),
    };
    // setDataPost({ ...values, description: valueEditor, listPitchs: dataNew, key: uuidv4() });
    console.log('addItem', addItem);
    if (row.key) {
      // console.log('row update', row);
      dispatch({
        type: 'pitch/update',
        payload: {
          id: row.key,
          params: addItem,
        },
        callback: (result) => {
          if (result?.data?.success) {
            Notification(result.data.message);
            fetchList();
          } else {
            Notification(result.data.message, 'error');
          }
        },
      });
    } else
      dispatch({
        type: 'pitch/add',
        payload: addItem,
        callback: (result) => {
          console.log('resilt', result);
          if (result?.data?.success) {
            Notification(result.data.message);
            fetchList();
          } else {
            Notification(result.data.message, 'error');
          }
        },
      });
    toggleOpen();
    // form.setFieldsValue(row);
    // resetData();
    // setIsLoading(!isLoading);
  };

  // const normFile = (e) => {
  //   console.log('Upload event:', e);
  //   if (Array.isArray(e)) {
  //     return e;
  //   }
  //   return e?.fileList;
  // };

  return (
    <Modal
      forceRender
      title={!row.key ? 'Thêm sân mới' : 'Sửa thông tin sân'}
      open={isOpen}
      onCancel={toggleOpen}
      width={850}
      okText={!row.key ? 'Tạo mới' : 'Xong'}
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
        form={form}
        // initialValues={{
        //   type: '7vs7',
        // }}
        initialValues={{ type: '7vs7' }}
      >
        <Divider orientation="left">Thông tin cơ bản</Divider>
        <Form.Item
          label="Tên sân"
          labelAlign="left"
          name="title"
          rules={[{ required: true, message: 'Vui lòng nhập tên sân' }]}
        >
          <Input placeholder="Tên sân bóng" />
        </Form.Item>
        <Form.Item label="Giới thiệu sân" labelAlign="left" name="description">
          <MyEditor row={row} />
          {/* <Input.TextArea rows={4} placeholder="Giới thiệu, mô tả về sân bóng" /> */}
        </Form.Item>
        <Divider orientation="left">Địa chỉ</Divider>
        {/* <Form.Item
          label="Quận/Huyện"
          labelAlign="left"
          name="district"
          // rules={[{ required: true, message: 'Vui lòng chọn quận/huyện' }]}
        >
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item> */}
        <Form.Item
          label="Số nhà / đường"
          labelAlign="left"
          name="address"
          // rules={[{ required: true, message: 'Vui lòng nhập địa chỉ chi tiết' }]}
        >
          <Input placeholder="Địa chỉ số nhà, số đường" />
        </Form.Item>
        <Form.Item
          label="Bản đồ"
          labelAlign="left"
          name="map"
          // rules={[{ required: true, message: 'Vui lòng chọn vị trí trên bản đồ' }]}
        >
          <Input placeholder="Địa chỉ số nhà, số đường" />
        </Form.Item>
        <Divider orientation="left">Thông tin liên hệ</Divider>
        <Form.Item label="Số điện thoại" labelAlign="left" name="phone">
          <Input placeholder="Nhập số điện thoại" />
        </Form.Item>
        {/* <Form.Item label="Địa chỉ Email" labelAlign="left" name="email">
          <Input placeholder="Nhập email" />
        </Form.Item> */}
        <Form.Item label="Facebook" labelAlign="left" name="facebook">
          <Input placeholder="Nhập link/url facebook" />
        </Form.Item>
        <Form.Item label="Website" labelAlign="left" name="website">
          <Input placeholder="Địa chỉ website" />
        </Form.Item>
        <Divider orientation="left">Hình ảnh sân</Divider>
        <Form.Item
          // name="image"
          label="Ảnh đại diện"
          labelAlign="left"
          valuePropName="file"
          // getValueFromEvent={normFile}
          // rules={[{ required: true, message: 'Vui lòng tải lên ảnh đại diện' }]}
        >
          <Upload
            showUploadList={false}
            // fileList={[{ uid: '-1', url: thumbUrl }]}
            customRequest={async (info) => {
              console.log('info', info);
              // setFileList(info);
              if (info.file) {
                await getBase64(info.file).then((thumb) => {
                  // console.log('thumb', thumb);
                  setThumbUrl(thumb);
                });
              }
            }}
            listType="picture"
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>TẢI ẢNH LÊN (Tối đa: 1 ảnh)</Button>
            {thumbUrl && <Image src={thumbUrl} alt="image" width={150} />}
          </Upload>
        </Form.Item>
        <Form.Item
          // name="slideShow"
          label="SlideShow"
          labelAlign="left"
          valuePropName="fileList"
          getValueFromEvent={(e) => e.fileList}
        >
          <Upload
            multiple
            showUploadList={false}
            // fileList={[{ uid: '-1', url: thumbUrl }]}
            customRequest={async (info) => {
              console.log('info', info);
              // setFileList(info);
              if (info.file) {
                await getBase64(info.file).then((thumb) => {
                  setFileList((prev) => [...prev, thumb]);
                  // setThumbUrl(thumb);
                });
              }
            }}
            listType="picture-card"
          >
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Tải lên
              </div>
            </div>
          </Upload>
          {fileList.length > 0 &&
            fileList?.map((file) => <Image key={file} src={file} alt="image" width={100} />)}
        </Form.Item>
        {/* <Form.Item label="Giờ làm việc" labelAlign="left" name="timeInWork">
          <TimePicker.RangePicker format={format}
            // locale={moment.localeData()}
            onChange={(_,timeString) => setTimeInWork(timeString)}
            />
        </Form.Item> */}
        <Form.Item label="Thời gian đá" labelAlign="left" name="duration">
          <Checkbox.Group options={initualDurations} onChange={(checkedValues) => console.log('checked = ', checkedValues)}/>
        </Form.Item>
        <Divider orientation="left" orientationMargin="0">
          Giá thuê sân/trận
        </Divider>
        {/* <Form.Item> */}
        <Space>
          {/* <Form.Item name='size'> */}
          <Select defaultValue="7vs7" onChange={handleChangePitch}>
            <Select.Option value="5vs5">5 vs 5</Select.Option>
            <Select.Option value="7vs7">7 vs 7</Select.Option>
            <Select.Option value="11vs11">11 vs 11</Select.Option>
          </Select>
          {/* </Form.Item> */}
          {/* <Form.Item
            // name="amountPitch"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập số lượng sân',
              },
            ]}
          > */}
          <Input
            placeholder="Số lượng"
            value={amountPitch}
            onChange={(event) => handleChangeInput(event, setAmountPitch)}
          />
          {/* </Form.Item> */}
          {/* <Form.Item> */}
          <Button type="primary" onClick={handleAddPitch}>
            Thêm
          </Button>
          {/* </Form.Item> */}
        </Space>
        {/* </Form.Item> */}
        {/* {console.log('data render', data)}
        {console.log('dataSource', dataSource)} */}
        {data?.map((table) => {
          // console.log('table render', table);
          return (
            <div key={table?.id}>
              <Table
                columns={columns}
                dataSource={dataSource[table.id]}
                bordered
                title={() => headerTable(table)}
                footer={() => footerTable(table)}
                onChange={handleChangeTable}
              />
            </div>
          );
        })}
      </Form>
    </Modal>
  );
};

export default AddPitchModal;
