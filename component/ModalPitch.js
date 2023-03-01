import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from 'static/scss/sections/modal.module.scss';
import { getCookie } from 'utils/cookies';
import { formatDate, getPositionPitch, getPrimaryPitch } from 'utils/helper';
import { formatNumber } from 'utils/utils';
import Loading from './Global/Loading';
import { Notification } from './Global/Notification';

const NEXT = 'next';
const PREV = 'prev';

const ModalPitch = (props) => {
  // console.log('props', props);
  const router = useRouter();
  const dispatch = useDispatch();

  const { data, date, idItemPitch, toggleDuration, togglePitch, handleClose } = props;
  const [currentDate, setCurrentDate] = useState(date || new Date());
  const [durationModal, setDurationModal] = useState(toggleDuration || -99);
  const [pitchModal, setPitchModal] = useState(togglePitch || -99);
  const [totalPrice, setTotalPrice] = useState(0);
  const [idParent, setIdParent] = useState(idItemPitch);
  const [isLoading, setIsLoading] = useState(false);
  const [emptyPitchs, setEmptyPitchs] = useState([]);
  const [toggleTime, setToggleTime] = useState(-99);
  // const [pitch, setPitch] = useState({});

  const findEmptyPitchs = useCallback(() => {
    const addItem = {
      keyMainPitch: data?.key || data?._id,
      idParent,
      duration: durationModal,
      idChildren: pitchModal,
      date: dayjs(currentDate).format('YYYY-MM-DD'),
    };
    console.log('addItem', addItem);
    setIsLoading(true);
    dispatch({
      type: 'pitch/findEmpty',
      payload: { params: addItem },
      callback: (response) => {
        if (response) {
          console.log('res', response);
          setIsLoading(false);
          setEmptyPitchs(response?.data?.result);
        }
      },
    });
  }, [dispatch, currentDate, data, durationModal, idParent, pitchModal]);

  useEffect(() => {
    if (durationModal !== -99 && pitchModal !== -99) findEmptyPitchs();
  }, [findEmptyPitchs, durationModal, pitchModal]);

  // const handleClick = (item) => {
  //   // if (e.target.checked) setTotalPrice((prePrice) => Number(prePrice) + Number(item.price));
  //   // else if (!e.target.checked && Number(totalPrice) > 0)
  //   //   setTotalPrice((prePrice) => Number(prePrice) - Number(item.price));
  //   setPitch(item);
  //   setToggleTime(item?.id);
  //   setTotalPrice(0);
  //   setTotalPrice((prePrice) => Number(prePrice) + Number(item.price));
  // };

  // hàm xử lý chọn ngày
  const handleSelectedDate = (day, type) => {
    const today = new Date(day);
    // console.log('handleSelectedDate da goi', day, today);
    if (type === 'next') {
      setCurrentDate((prev) => new Date(prev)?.setDate(today.getDate() + 1));
    } else if (type === 'prev') {
      setCurrentDate((prev) => new Date(prev)?.setDate(today.getDate() - 1));
    }
  };

  const handleSubmit = () => {
    const typePitch = getPrimaryPitch(data, idParent);
    const addItem = {
      keyMainPitch: data?.key || data?._id,
      idParentPitch: idParent,
      duration: durationModal,
      idChildPitch: pitchModal,
      day: dayjs(currentDate).format('YYYY-MM-DD'),
      timeStart: toggleTime,
      price: totalPrice,
      images: data?.image,
      type: typePitch?.pitch,
      position: getPositionPitch(typePitch, pitchModal),
      title: data?.title,
    };
    // console.log('addItem', addItem);
    console.log('dataUser', getCookie('isLogin'));
    if (getCookie('isLogin') === 'true') {
      dispatch({
        type: 'cart/increaseItem',
        payload: addItem,
      });

      router.push(`/checkout`);
    } else {
      Notification('Bạn chưa đăng nhập !!!', 'error');
      // router.push('/login');
    }
  };

  return (
    <div
      className="modal fade show"
      id="exampleModal"
      role="dialog"
      style={{ display: 'block' }}
      aria-hidden="false"
      aria-modal="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header border-0">
            <h5 className="modal-title text-center w-100" id="exampleModalLabel">
              {data?.title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => handleClose()}
            />
          </div>
          <div className="modal-body container">
            <div className="row">
              <div className="col-lg-6">
                <p className="fw-bold mb-1">Chọn ngày</p>
                <div className={styles.dateSlot}>
                  <div className="row align-items-center">
                    <div className="col-3">
                      <button type="button" onClick={() => handleSelectedDate(currentDate, PREV)}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                        Ngày trước
                      </button>
                    </div>
                    <div className="col-6">
                      <p>{formatDate(currentDate)}</p>
                    </div>
                    <div className="col-3">
                      <button type="button" onClick={() => handleSelectedDate(currentDate, NEXT)}>
                        Ngày sau
                        <FontAwesomeIcon icon={faAngleRight} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <p className="fw-bold mb-1">Thời gian</p>
                <div className="row">
                  {data?.duration?.map((item) => (
                    <div key={item} className="col">
                      <button
                        type="button"
                        className={
                          durationModal === item ? 'btn btn-primary' : 'btn btn-secondary'
                        }
                        style={{ width: '100%' }}
                        onClick={() => {
                          setDurationModal(item);
                          setTotalPrice(0);
                          setToggleTime(0);
                        }}
                      >
                        <span className="number">{item}</span>
                        {item && 'ph'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="fw-bold py-2">Chọn vị trí sân</p>
            <div className="row overflow-auto mb-3">
              {data?.listPitchs?.map((item) =>
                item?.children?.map((child) => (
                  <div key={child?.id} className="col">
                    <button
                      type="button"
                      className={`p-2 w-100 ${styles.pitch} ${
                        pitchModal === child?.id ? 'btn btn-primary' : 'btn btn-secondary'
                      }`}
                      style={{height: '100%'}}
                      onClick={() => {
                        setPitchModal(child.id);
                        setIdParent(item.id);
                        setTotalPrice(0);
                        setToggleTime(0);
                      }}
                    >
                      <span className="mx-2 number"> {item?.pitch}</span>
                      <span>Sân {child?.title}</span>
                    </button>
                  </div>
                ))
              )}
            </div>
            <Loading spinning={isLoading}>
              <div className="row">
                {emptyPitchs?.length > 0 ? (
                  emptyPitchs.map((item) => (
                    <div className="col-6 col-md-4" key={item.time}>
                      <button
                        type="button"
                        className={`p-3 mb-2 w-100 ${styles.pitch} ${
                          toggleTime === item.time ? 'btn btn-primary ' : 'btn btn-secondary'
                        } `}
                        onClick={() => {
                          setToggleTime(item.time);
                          setTotalPrice(item.price);
                        }}
                      >
                        <p className="fw-bold mb-1 number">
                          {item?.time} <br />
                          {formatNumber(item?.price)}&nbsp;VNĐ
                        </p>
                      </button>
                    </div>
                  ))
                ) : (
                  <h4 className="text-center my-4">Không còn sân trống</h4>
                )}
              </div>
            </Loading>
          </div>
          {Number(totalPrice) > 0 && (
            <div className="modal-footer">
              <div className="row w-100 justify-content-center">
                <div className="col-lg-8">
                  <button
                    type="button"
                    className="btn btn-filter w-100 fw-bolder my-2 text-uppercase"
                    onClick={() => handleSubmit()}
                  >
                    Đặt ngay (
                    <span className="float-right">
                      <span className="amount mx-1">{formatNumber(totalPrice)}</span>
                    </span>
                    VNĐ)
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalPitch;
