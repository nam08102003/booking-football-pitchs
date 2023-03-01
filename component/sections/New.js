import Image from 'next/image';
import styles from 'static/scss/sections/new.module.scss';

export default function New({ data, hasButton, pointer }) {
  return (
    <div className={`col card ${styles.new_card} ${pointer ? 'pointer' : ''}`}>
      <div className="card-image">
        {/* <img src={data?.image} /> */}
        <Image src={data?.image} alt={data?.title} width={120} height={100} priority />
      </div>
      <div className={styles.card_content}>
        <div className={styles.name}>
          <h5>{data?.title}</h5>
          {/* Element Sao */}
          {/* <p className={styles.description}>{data?.description}</p> */}
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.description }}
          />
        </div>
      </div>
      {hasButton ? (
        <div className="card-button">
          <a href={`/blog/detail/${data?.key}`} className="btn btn-primary">
            Xem chi tiết
          </a>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
