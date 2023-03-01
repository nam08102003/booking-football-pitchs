import {
  faStar,
  faLocationDot, // faAngleLeft,
  // faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading from 'component/Global/Loading';
import { Notification } from 'component/Global/Notification';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from 'static/scss/pages/pitchDetail.module.scss';
import { getTotalPitchs } from 'utils/helper';

const WebLayout = dynamic(() => import('layouts/WebLayout.js'), {
  ssr: false,
  loading: () => null,
});

const BreadCrumb = dynamic(() => import('component/BreadCrumb'), {
  ssr: false,
  loading: () => null,
});
const ModalPitch = dynamic(() => import('component/ModalPitch'), {
  ssr: false,
  loading: () => null,
});

const DatePicker = dynamic(() => import('sassy-datepicker'), {
  ssr: false,
  loading: () => null,
});

const SliderCustom = dynamic(() => import('component/sections/SliderCustom'), {
  ssr: false,
  loading: () => null,
});

const PitchDetail = () => {
  // // console.log('public', CONFIG.APP_NAME);
  // const router = useRouter();
  const dispatch = useDispatch();
  // const todayDate = new Date();
  const [date, setDate] = useState(new Date());
  const [toggleDuration, setToggleDuration] = useState(-99);
  const [togglePitch, setTogglePitch] = useState(-99);
  const [idParent, setIdParent] = useState(null);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const { query } = useRouter();
  console.log('query', query);
  const fetchOne = useCallback(() => {
    setIsLoading(true);
    dispatch({
      type: 'pitch/fetchOne',
      payload: { id: query?.id },
      callback: (response) => {
        if(response?.data?.success){
          setData(response?.data?.result?._doc);
          setIsLoading(false);
        } else {Notification(response?.data?.message, 'error'); setIsLoading(false)}
      },
    });
  }, [dispatch, query]);
  useEffect(() => {
    fetchOne();
  }, [fetchOne]);
  // const getDate = (day) => {
  //   return day.toLocaleDateString('vi-Vn', options);
  // };
  const onChangeDate = (newDate) => {
    // console.log(`New date selected - ${newDate.toString()}`);
    setDate(newDate);
  };
  // const handleChange = (e, item) => {
  //   console.log('e', e);
  //   console.log('item', item);
  // };
  // const handleClick = (e, item) => {
  //   if (e.target.checked) setTotalPrice((prePrice) => Number(prePrice) + Number(item.price));
  //   else if (!e.target.checked && Number(totalPrice) > 0)
  //     setTotalPrice((prePrice) => Number(prePrice) - Number(item.price));
  // };
  //   console.log('router', router);
  //   console.log('useRouter()', query.id);
  //   console.log('dataPitch', dataPitch);

  const handleClose = () => {
    // console.log('handleClose dc goi');
    setShowModal(false);
  };

  // hàm xử lý chọn thời gian
  // const handleSelectedTime = (index) => {
  //   setToggleDuration(index);
  // };
  // // hàm xử lý chọn sân bóng
  // const handleSelectedPitch = (index) => {
  //   setTogglePitch(index);
  // };
  const settings = {
    autoplay: true,
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    lazyLoad: true,
  };
  return (
    <WebLayout title={`Đặt sân ${data?.title || ''}`}>
      <Loading spinning={isLoading}>
        <BreadCrumb name1="Đặt sân" urlSlug1="/book" name2={data?.title} />
        <div className={`container py-4 ${styles.detailPitch}`}>
          <h3 className="pb-2">{data?.title}</h3>
          <p className={styles.rate}>
            <span className={`number ${styles.star}`}>
              <FontAwesomeIcon icon={faStar} />
              {data?.vote}/5
            </span>
            <span className="mx-2 number">{data.countOffer || '15'}&nbsp;</span>đánh giá
            <span className={`ps-lg-5 mx-2 ${styles.address}`}>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            {data?.address}
          </p>
          <div className="row g-0 pt-4">
            <div className="col-12 col-md-8">
              <div className={styles.introStad}>
                <div className="d-flex">
                  <div>
                    <Image
                      src="/static/images/football-pitch-svgrepo-com.svg"
                      alt="a"
                      width={55}
                      height={55}
                    />
                  </div>
                  <div className="mx-3">
                    <h5 className="fw-semibold">{data?.title}</h5>
                    <p className="mt-2">{data?.address}</p>
                  </div>
                </div>
                <p className="d-none d-md-flex align-items-center mt-2">
                  <b>Số sân</b>&nbsp;
                  {getTotalPitchs(data?.listPitchs)}
                  {data?.listPitchs?.map((child) =>
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
                </p>
                <p>
                  <b>Giờ mở cửa</b>&nbsp; 7:00 AM - 8:00 PM
                </p>
                <div className={styles.slide_image}>
                  <SliderCustom settings={settings}>
                    {data?.slideShow?.map((image) => (
                      <Image key={image} src={image} alt="image" width={800} height={400} />
                    ))}
                  </SliderCustom>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 d-none d-md-block">
              <div className="text-center">
                <p className="fw-bold">Đặt {data?.title}</p>
                <p className="subtitle mb-4">
                  Chọn ngày và thời lượng đá để hiển thị sân bóng phù hợp
                </p>
                <DatePicker
                  onChange={onChangeDate}
                  value={date}
                  className=""
                  style={{ width: '100%' }}
                />
              </div>
              <p className="d-none d-md-block fw-bold py-2">Chọn sân bóng</p>
              <div className="row">
                {data?.listPitchs?.map((pitch) =>
                  pitch?.children?.map((item) => (
                    <div key={item?.id} className="col">
                      <button
                        type="button"
                        className={`w-100 ${styles.pitch} ${
                          togglePitch === item?.id ? 'btn-primary' : 'btn-secondary'
                        }`}
                        onClick={() => {
                          setTogglePitch(item?.id);
                          setIdParent(pitch.id);
                        }}
                      >
                        {/* <img src="/static/images/soccer.png" width={15} alt="img" /> */}
                        <span className="mx-2"> {pitch?.pitch}</span>
                        <span>Sân {item?.title}</span>
                      </button>
                    </div>
                  ))
                )}
              </div>
              <p className="fw-bold py-2 d-none d-md-block ">Thời lượng đá</p>
              <div className="row">
                {data?.duration?.map((item) => (
                  <div key={item} className="col">
                    <button
                      type="button"
                      className={
                        toggleDuration === item ? 'btn btn-primary' : 'btn btn-secondary'
                      }
                      style={{ width: '100%' }}
                      onClick={() => setToggleDuration(item)}
                    >
                      <span className="number">{item}</span> {item && 'Phút'}
                    </button>
                  </div>
                ))}
              </div>
              <button
                type="button"
                className={`btn btn-filter mt-4 text-uppercase ${styles.showPitchs}`}
                style={{ width: '100%' }}
                onClick={() => setShowModal(!showModal)}
              >
                Hiển thị sân trống
              </button>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-filter mt-4 text-uppercase d-block d-md-none"
            style={{ width: '100%' }}
            onClick={() => setShowModal(!showModal)}
          >
            Hiển thị sân trống
          </button>
          <h5 className="pt-4">Vị trí Sân vận động</h5>
          <div className={styles.line} />
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6621700080723!2d105.82535616476295!3d21.00617498601064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac80fd0e1987%3A0x783638bc0f1fef37!2zU8OibiBiw7NuZyBUaOG7p3kgTOG7o2k!5e0!3m2!1svi!2s!4v1670511614780!5m2!1svi!2s"
              // width={600}
              // height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
            />
          </div>
          {data?.service && (
            <>
              <h5 className="pt-4">Tiện ích tại sân</h5>
              <div className={styles.line} />
              <div className="row pt-4">
                <div className="col my-1">
                  <div className={styles.facilities}>
                    <Image src="/static/images/facilities/ball.png" width={40} alt="Image" />
                    <span className="ml-2"> Bóng</span>
                  </div>
                </div>
                <div className="col my-1">
                  <div className={styles.facilities}>
                    <Image src="/static/images/facilities/shirt.png" width={40} alt="Image" />
                    <span className="ml-2"> Quần áo</span>
                  </div>
                </div>
                <div className="col my-1">
                  <div className={styles.facilities}>
                    <Image src="/static/images/facilities/shower.png" width={40} alt="Image" />
                    <span className="ml-2"> Khu tắm rửa</span>
                  </div>
                </div>
                <div className="col my-1">
                  <div className={styles.facilities}>
                    <Image src="/static/images/facilities/toilet.png" width={40} alt="Image" />
                    <span className="ml-2"> Khu vệ sinh</span>
                  </div>
                </div>
                <div className="col my-1">
                  <div className={styles.facilities}>
                    <Image src="/static/images/facilities/water.png" width={40} alt="Image" />
                    <span className="ml-2"> Nước uống</span>
                  </div>
                </div>
              </div>
            </>
          )}
          {data?.description && (
            <>
              <h5 className="pt-4">Giới thiệu về sân</h5>
              <div className={styles.line} />
              <p dangerouslySetInnerHTML={{ __html: data.description }} />
            </>
          )}
          <h5 className="pt-4">Đánh giá</h5>
          <div className={styles.line} />
          {/* <div className={styles.reviews}>
            <div className="d-flex">
              <div>
                <span className={`number ${styles.star}`}>
                  <FontAwesomeIcon icon={faStar} />
                  {data?.vote}
                </span>
              </div>
              <div>
                <h6 className="fw-bold">Có 9 đánh giá về sân vận động này</h6>
              </div>
            </div>
          </div> */}
        </div>
        {/* Modal */}
        {showModal && (
          <ModalPitch
            data={data}
            date={date}
            idItemPitch={idParent}
            togglePitch={togglePitch}
            toggleDuration={toggleDuration}
            handleClose={handleClose}
            // handleSelectedDate={handleSelectedDate}
            // handleSelectedPitch={handleSelectedPitch}
            // handleSelectedTime={handleSelectedTime}
          />
        )}
      </Loading>
    </WebLayout>
  );
};

export default PitchDetail;
