import React from 'react';
import styles from 'static/scss/sections/pitchCard.module.scss';
import { getTotalPitchs } from 'utils/helper';
import { formatNumber } from 'utils/utils';

export default function PitchCard({ data }) {
  return (
    <div className={`card ${styles.pitch_card} col`}>
      <div className="card-image">
        <a href={`/book/${data?.key}`}>
          <img src={data?.image} alt="anh" />
        </a>
      </div>
      <div className={styles.card_content}>
        <div className={styles.name}>
          <h5>{data?.title}</h5>
          {/* Element Sao */}
        </div>
        <div className={styles.type}>
          <p>Số sân: {getTotalPitchs(data?.listPitchs)}</p>
        </div>
        <div className={styles.price}>
          <p>
            Giá:{' '}
            <span className='number'>
              {formatNumber(data?.minPrice) || ''}VNĐ - {formatNumber(data?.maxPrice) || ''}VNĐ
            </span>
          </p>
        </div>
      </div>
      <div className="card-button">
        <button type="button" className="btn btn-primary">
          <a href={`/book/${data?.key}`}>Đặt sân</a>
        </button>
      </div>
    </div>
  );
}
