import React from 'react';
import styles from 'static/scss/sections/success.module.scss';

const Success = () => {
  return (
    <div className={styles.success}>
      <div className={styles.box}>
        <center className={styles.card}>
          <div className={styles.image}>
            <img src="/static/images/success.svg" alt="succes" />
          </div>
          <h1>Thành công</h1>
          <p className="my-4">
            Chúng tôi sẽ phản hồi sớm cho bạn.
            <br />
            Cảm ơn !!!
          </p>
          <button type="button" className="btn btn-secondary">
            <a href="/" className={styles.back}>
              Về trang chủ
            </a>
          </button>
          <button type="button" className="mx-1 btn btn-filter">
            <a href="/book">Đặt tiếp</a>
          </button>
        </center>
      </div>
    </div>
  );
};

export default Success;
