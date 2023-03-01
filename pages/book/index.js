import {
  faStar,
  faLocationDot, // faAngleLeft,
  // faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Pagination } from 'antd';
import Loading from 'component/Global/Loading';
import { Notification } from 'component/Global/Notification';
import ModalPitch from 'component/ModalPitch';
import { matchDuration, pitchSizes } from 'data/data';
import moment from 'moment';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TimePicker } from 'sassy-datepicker';
import styles from 'static/scss/pages/book.module.scss';
import { getTotalPitchs } from 'utils/helper';
import { formatNumber } from 'utils/utils';

// import Head from 'next/head'
const PAGE_SIZE = 8;

const WebLayout = dynamic(() => import('layouts/WebLayout.js'), {
  ssr: false,
  loading: () => null,
});
const BreadCrumb = dynamic(() => import('component/BreadCrumb'), {
  ssr: false,
  loading: () => null,
});
const Banner = dynamic(() => import('component/sections/Banner'), {
  ssr: false,
  loading: () => null,
});
const DatePicker = dynamic(() => import('sassy-datepicker'), {
  ssr: false,
  loading: () => null,
});
// const displayFormat = '24hr';
const minutesInterval = 5;

const Book = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState({ hours: 15, minutes: 30 });
  const [toggleDuration, setToggleDuration] = useState(-99);
  const [togglePitch, setTogglePitch] = useState(-99);

  // const [totalPrice, setTotalPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showModalFilter, setShowModalFilter] = useState(false);
  const [data, setData] = useState([]);
  const [dataPitchs, setDataPitchs] = useState([]);

  const [total, setTotal] = useState(null);
  // const total = dataPitchs?.length || 6;
  const [current, setCurrent] = useState('1');

  // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  // const todayDate = new Date();

  // fetch data
  const fetch = useCallback(() => {
    setIsLoading(true);
    const addItem = {
      page: current,
      amount: PAGE_SIZE,
    };
    dispatch({
      type: 'pitch/fetchListPage',
      payload: {
        params: addItem,
      },
      callback: (response) => {
        console.log('res', response);
        if (response?.data?.success) {
          setDataPitchs(response?.data?.result);
          setCurrent(response?.data?.pagination?.currentPage);
          setTotal(response?.data?.pagination?.length);
        } else Notification(response?.data?.message, 'error');
        setIsLoading(false);
      },
    });
  }, [dispatch, current]);
  useEffect(() => {
    fetch();
  }, [fetch]);

  const filterActivePitchs = (params) => {
    return params?.filter((item) => item.isActive === true);
  };

  const onChangeTime = (newTime) => {
    // console.log(`New time selected - ${newTime.hours}:${newTime.minutes}`);
    setTime(newTime);
  };
  const onChangeDate = (newDate) => {
    // console.log(`New date selected - ${newDate.toString()}`);
    setDate(newDate);
  };

  const nextPagination = (page) => {
    setCurrent(page);
    // console.log('page', page);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const onFillter = () => {
    // let timeQuery;
    // if (time.hours < 10) {
    //   timeQuery = `0${time.hours}:${time.minutes}`;
    // }
    // if (time.minutes < 10) {
    //   timeQuery = `${time.hours}:0${time.minutes}`;
    // }
    const dayQuery = moment(date).format('YYYY-MM-DD');
    const timeQuery = moment(`${dayQuery} ${time.hours}:${time.minutes}`).format('HH:mm');

    let query = {
      day: dayQuery,
      time: timeQuery,
    };
    if(toggleDuration !== -99){
      query ={
        ...query,
        duration: toggleDuration,
      }
    }
    if(togglePitch !== -99){
      query ={
        ...query,
      typePitch: togglePitch,
      }
    }
    console.log('query', query);
    setIsLoading(true);
    dispatch({
      type: 'pitch/filter',
      payload: {
        params: query,
      },
      callback: (response) => {
        console.log('res filter', response);
        if (response?.data?.success) {
          setDataPitchs(response?.data?.result);
          // setCurrent(response?.data?.pagination?.currentPage);
          // setTotal(response?.data?.pagination?.length);
        } else Notification(response?.data?.message, 'error');
        setIsLoading(false);
      },
    });
  };
  return (
    <WebLayout title="Đặt sân - Booking Football Pitch">
      {/* <Head>
        <link rel="stylesheet" href="static/scss/css/datepicker.css" />
      </Head> */}
      <Loading spinning={isLoading}>
        <BreadCrumb name1="Đặt sân" />
        <Banner title="Đặt sân bóng thật dễ dàng" site="Đống Đa" hasFormSearch={false} />
        <div className={styles.book}>
          <div className="container">
            <div className="row">
              <div className="d-md-none d-flex align-items-center justify-content-between mb-4">
                <h1 className="">Đặt Sân Bóng</h1>
                <button
                  type="button"
                  className="btn btn-filter"
                  data-toggle="modal"
                  data-target="#modalFilter"
                  onClick={() => setShowModalFilter(!showModalFilter)}
                >
                  <img src="/static/images/Settings.png" alt="tìm nhanh" /> Tìm nhanh
                </button>
              </div>
              <div className={`d-none d-md-block col-md-4 ${styles.left}`}>
                <h4 className={styles.filter}>
                  <span>Tìm kiếm</span>
                </h4>
                {/* Chon ngay */}
                <div>
                  <p className="fw-bold mt-4 mb-1">Chọn ngày</p>
                  <div className={styles.datepicker}>
                    <DatePicker
                      onChange={onChangeDate}
                      value={date}
                      className=""
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>
                {/* Filter theo thời gian */}
                <div>
                  <p className="fw-bold mt-4 mb-1">Thời gian</p>
                  <div className={styles.time}>
                    <TimePicker
                      onChange={onChangeTime}
                      value={time}
                      minutesInterval={minutesInterval}
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>
                {/* Thời lượng trận đấu */}
                <div>
                  <p className="fw-bold mt-4 mb-1">Thời lượng trận đấu</p>
                  <div className="row">
                    {matchDuration?.map((item) => (
                      <div key={item?.id} className="col-4">
                        <button
                          type="button"
                          className={
                            toggleDuration === item?.time ? 'btn btn-primary' : 'btn btn-secondary'
                          }
                          style={{ width: '100%' }}
                          onClick={() => setToggleDuration(item?.time)}
                        >
                          <span className="number">{item?.time}</span> {item?.time && 'Phút'}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Filter theo loại sân */}
                <div>
                  <p className="fw-bold mt-4 mb-1">Loại sân</p>
                  <div className="row">
                    {pitchSizes?.map((item) => (
                      <div key={item?.id} className="col-4">
                        <button
                          type="button"
                          className={
                            togglePitch === item?.value ? 'btn btn-primary' : 'btn btn-secondary'
                          }
                          style={{ width: '100%' }}
                          onClick={() => setTogglePitch(item?.value)}
                        >
                          <span className="number">{item?.title}</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="row mt-4 mb-1">
                  <div className="col-6">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      style={{ width: '100%', fontSize: '1.25rem' }}
                    >
                      Xoá
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      type="button"
                      className="btn btn-filter"
                      style={{
                        width: '100%',
                        fontSize: '1.25rem',
                        backgroundColor: '#198754!important',
                      }}
                      onClick={() => onFillter()}
                    >
                      Lọc
                    </button>
                  </div>
                </div>
              </div>

              <ul className={`col-12 col-md-8 ${styles.right}`}>
                {filterActivePitchs(dataPitchs)?.map((item) => (
                  <li key={item?.key} className={styles.item}>
                    <div className="row g-2 ">
                      <div className="col-md-4">
                        <div className={styles.image}>
                          <a href={`/book/${item.key}`}>
                            <img src={item.image} alt={item?.title} />
                          </a>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className={styles.info}>
                          <h5 className={styles.title}>
                            <a href={`/book/${item.key}`}>{item?.title}</a>
                            <span className={`number ${styles.stars}`}>
                              <FontAwesomeIcon icon={faStar} />
                              {item?.vote}/5
                            </span>
                          </h5>
                          <p className={styles.location}>
                            <FontAwesomeIcon icon={faLocationDot} />
                            &nbsp;
                            <small>{item?.address}</small>
                          </p>
                          <p className={styles.price}>
                            Giá:&nbsp;
                            <span className="number">
                              {' '}
                              {`${formatNumber(`${item?.minPrice}`)} - ${formatNumber(
                                `${item?.maxPrice}`
                              )}`}{' '}
                              VNĐ
                            </span>
                          </p>
                          <div className="d-none d-md-flex gap-2 flex-wrap">
                            {getTotalPitchs(item?.listPitchs)}&nbsp;sân
                            {item?.listPitchs?.map((child) =>
                              child?.children?.map((childTwo) => (
                                <span key={childTwo?.id} className={styles.badge}>
                                  <Image
                                    src="/static/images/soccer.png"
                                    alt="ảnh bóng"
                                    width={18}
                                    height={18}
                                  />
                                  &nbsp; {child?.pitch}
                                </span>
                              ))
                            )}
                          </div>
                          <div className="mt-2 mb-1 row">
                            <div className="col">
                              <button
                                type="button"
                                className="btn btn-primary"
                                style={{ width: 'inherit' }}
                                onClick={() => router.push(`/book/${item.key}`)}
                              >
                                Xem chi tiết
                              </button>
                            </div>
                            <div className="col">
                              <button
                                type="button"
                                className="btn btn-primary"
                                style={{ width: 'inherit' }}
                                onClick={() => {
                                  setShowModal(!showModal);
                                  setData(item);
                                }}
                              >
                                Đặt sân
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
                {dataPitchs?.length > 0 ? (
                  <Pagination
                    defaultPageSize={PAGE_SIZE}
                    current={current}
                    size="default"
                    total={total}
                    className="paginationPage"
                    onChange={(page) => nextPagination(page)}
                  />
                ) : (
                  <h3>Không có sân nào trống !!!</h3>
                )}
              </ul>
            </div>
          </div>
        </div>
        {showModal && <ModalPitch data={data} handleClose={handleClose} />}
        {showModalFilter && (
          <div
            className={`modal fade ${showModalFilter ? 'show' : ''}`}
            id="modalFilter"
            // tabIndex={-1}
            role="dialog"
            style={showModalFilter ? { display: 'block' } : { display: 'none' }}
            // aria-labelledby="exampleModalLabel"
            aria-hidden={!showModalFilter}
            aria-modal={showModalFilter}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="modalFilter">
                    Tìm nhanh
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setShowModalFilter(!showModalFilter)}
                  />
                </div>
                <div className="modal-body">
                  {/* Chon ngay */}
                  <div>
                    <p className="fw-bold mt-4 mb-1">Chọn ngày</p>
                    <div className={styles.datepicker}>
                      <DatePicker
                        onChange={onChangeDate}
                        value={date}
                        className=""
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  {/* Filter theo thời gian */}
                  <div>
                    <p className="fw-bold mt-4 mb-1">Thời gian</p>
                    <div className={styles.time}>
                      <TimePicker
                        onChange={onChangeTime}
                        value={time}
                        minutesInterval={minutesInterval}
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  {/* Thời lượng trận đấu */}
                  <div>
                    <p className="fw-bold mt-4 mb-1">Thời lượng trận đấu</p>
                    <div className="row">
                      {matchDuration?.map((item) => (
                        <div key={item?.id} className="col-4">
                          <button
                            type="button"
                            className={
                              toggleDuration === item?.time ? 'btn btn-filter' : 'btn btn-secondary'
                            }
                            style={{ width: '100%' }}
                            onClick={() => setToggleDuration(item?.time)}
                          >
                            <span className="number">{item?.time}</span> {item?.time && 'Phút'}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Filter theo loại sân */}
                  <div>
                    <p className="fw-bold mt-4 mb-1">Loại sân</p>
                    <div className="row">
                      {pitchSizes?.map((item) => (
                        <div key={item?.id} className="col-4">
                          <button
                            type="button"
                            className={
                              togglePitch === item?.value ? 'btn btn-filter' : 'btn btn-secondary'
                            }
                            style={{ width: '100%' }}
                            onClick={() => setTogglePitch(item?.value)}
                          >
                            <span className="number">{item?.title}</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="row mt-4 mb-1">
                    <div className="col-6">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        style={{ width: '100%', fontSize: '1.25rem' }}
                      >
                        Xoá
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        type="button"
                        className="btn btn-filter"
                        style={{
                          width: '100%',
                          fontSize: '1.25rem',
                          backgroundColor: '#198754!important',
                        }}
                      >
                        Lọc
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Loading>
      {/* Modal Filter */}
    </WebLayout>
  );
};

export default Book;
