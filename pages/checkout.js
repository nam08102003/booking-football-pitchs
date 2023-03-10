import {
  faMoneyBill,
  faCircleInfo,
  faCalendarDays,
  faClock,
  faFutbol,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading from 'component/Global/Loading';
import { Notification } from 'component/Global/Notification';
import Success from 'component/Success';
import { dataBanks } from 'data/data';
import dynamic from 'next/dynamic';
// import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from 'static/scss/pages/checkout.module.scss';
import { getCookie } from 'utils/cookies';
import { formatDate } from 'utils/helper';
import { formatNumber } from 'utils/utils';

const WebLayout = dynamic(() => import('layouts/WebLayout.js'), {
  ssr: true,
  loading: () => null,
});
const BreadCrumb = dynamic(() => import('component/BreadCrumb'), {
  ssr: false,
  loading: () => null,
});

const Checkout = () => {
  // const router = useRouter();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.dataCart);
  const [infoPaypal, setInfoPaypal] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    dispatch({
      type: 'cart/createCart',
    });
  }, [dispatch]);
  console.log('dataCart', data);

  const handleSubmit = () => {
    if (getCookie('isLogin') === 'true') {
      console.log('dung', getCookie('isLogin'));
      const infoUser = {
        username: getCookie('username'),
        roleId: getCookie('roleId'),
        id: getCookie('id'),
      };
      const addItem = {
        ...data,
        infoUser,
        infoPaypal,
      };
      // console.log('addItem', addItem);
      setIsLoading(true);
      dispatch({
        type: 'bookings/add',
        payload: { params: addItem },
        callback: (response) => {
          if (response.data.success) {
            console.log(response);
            setIsSuccess(true);
            setIsLoading(false);
          } else {
            Notification(response?.data?.message, 'error');
          }
        },
      });
    } else {
      console.log('saiiii', getCookie('isLogin'));
      Notification('B???n ch??a ????ng nh???p !!!', 'error');
    }
  };

  return (
    <Loading spinning={isLoading}>
      <WebLayout title="Thanh to??n - Booking Football Pitch">
        <BreadCrumb name1="Thanh to??n" />
        <div className={styles.checkout}>
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className={styles.title}>
                  <FontAwesomeIcon icon={faMoneyBill} className={styles.icon} />
                  <h3 className="text-uppercase">H??nh th???c thanh to??n</h3>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    defaultValue="option1"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="exampleRadios1">
                    Ti???n m???t (Thanh to??n t???i s??n cho nh??n vi??n)
                  </label>
                </div>
                {dataBanks?.map((item) => (
                  <div key={item.id} className={styles.list_bank}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        defaultValue="option1"
                        defaultChecked=""
                        onClick={() => setInfoPaypal(item)}
                      />
                      <label className="form-check-label" htmlFor="exampleRadios1">
                        Chuy???n kho???n qua
                      </label>
                      <img src={item?.image} alt="???nh ng??n h??ng" />
                    </div>
                    <div className={styles.info_bank}>
                      <p>
                        <span>S??? t??i kho???n:</span>&nbsp;
                        <b>{item?.accountNumber}</b>
                      </p>
                      <p>
                        <span>T??n t??i kho???n:</span>&nbsp;
                        <b>{item?.accountName}</b>
                      </p>
                      <p>
                        <span>Ng??n h??ng:</span>&nbsp;
                        <b>{item?.title}</b>
                      </p>
                      <p>
                        <span>Chi nh??nh:</span>&nbsp;
                        <b>{item?.branch}</b>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={`col-8 pb-5 ${styles.right}`}>
                <div className={styles.title}>
                  <FontAwesomeIcon icon={faCircleInfo} className={styles.icon} />
                  <h3 className="text-uppercase">Th??ng tin s??n b??ng</h3>
                </div>
                <div className={styles.info_cart}>
                  <div className={styles.info__title}>
                    <div className={styles.info__image}>
                      <img src={data?.images} alt="anh" />
                    </div>
                    <div>
                      <h5 className="mx-2">{data?.title}</h5>
                      <div className={styles.info__details}>
                        <div className={styles.item}>
                          <FontAwesomeIcon icon={faCalendarDays} />
                          <p>Th???i gian: {formatDate(data?.day)}</p>
                        </div>
                        <div className={styles.item}>
                          <FontAwesomeIcon icon={faClock} />
                          <p>Th???i l?????ng ????: {data?.duration}ph??t</p>
                        </div>
                        <div className={styles.item}>
                          <FontAwesomeIcon icon={faFutbol} />
                          <p>
                            S??n {data?.type} - S??? {data?.position}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="number">{formatNumber(data?.price)}VN??</p>
                  </div>

                  <div className={styles.total}>
                    <p>T???ng gi??</p>
                    <p className="number">{formatNumber(data?.price)}VN??</p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-filter" onClick={handleSubmit}>
                      B??o c??o ???? thanh to??n
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isSuccess && <Success />}
      </WebLayout>
    </Loading>
  );
};

export default Checkout;
