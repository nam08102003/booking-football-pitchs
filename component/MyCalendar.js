import { Space } from 'antd';
import moment from 'moment';
import React, { useState, useEffect, useCallback } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import { useDispatch } from 'react-redux';
import Loading from './Global/Loading';

// BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

// momentLocalizer(moment);
const localizer = momentLocalizer(moment);

const MyCalendar = (props) => {
  const { data } = props;
  const dispatch = useDispatch();
  const [resourceMap, setResourceMap] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dataBookings, setDataBookings] = useState([]);

  // fetch những khung giờ đã đặt
  const fetchBooking = useCallback(() => {
    setIsLoading(true);
    dispatch({
      type: 'bookings/fetch',
      callback: (response) => {
        if (response?.data?.success) {
          setDataBookings(response?.data?.result);
          setIsLoading(false);
        }
      },
    });
  }, [dispatch]);

  // render ra tiêu đề bảng từng cột
  const handleResources = useCallback(() => {
    setResourceMap([]);
    data?.listPitchs?.forEach((item) => {
      item?.children?.forEach((child, index) => {
        const x = {
          resourceId: child.id,
          resourceTitle: `Sân ${item?.pitch} - Số ${index + 1}`,
        };
        setResourceMap((prev) => [...prev, x]);
      });
    });
  }, [data]);

  useEffect(() => {
    // setResourceMap([]);
    handleResources();
    fetchBooking();
  }, [data, handleResources, fetchBooking]);

  console.log('dataBookings', dataBookings);

  const getEvents = (array) => {
    return array?.map(item => ({
      ...item,
      id: item.key,
      title: item?.infoUser?.username,
      start: new Date(`${item?.day} ${item?.timeStart}`),
      end: new Date(`${item?.day} ${item?.timeEnd}`),
      resourceId: item?.idChildPitch
    }))
  }

  console.log('render', resourceMap);
  return (
    <Loading spinning={isLoading}>
      <Space>
        <button type="button" onClick={() => fetchBooking()} className="btn btn-filter my-2">Tải lại dữ liệu</button>
         <h3 className="mx-4">{data?.title}</h3> 
      </Space>
      <Calendar
        // cultures='vi'
        selectable
        defaultDate={new Date()}
        localizer={localizer}
        defaultView="day"
        timeslots={1}
        // steps={30}
        views={[Views.DAY]}
        events={getEvents(dataBookings)}
        // events={events}
        resources={resourceMap}
        resourceIdAccessor="resourceId"
        resourceTitleAccessor="resourceTitle"
        // startAccessor="start"
        // endAccessor="end"
        allDayAccessor={null}
      />
    </Loading>
  );
};

export default MyCalendar;
