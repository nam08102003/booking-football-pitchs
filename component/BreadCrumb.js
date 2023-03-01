import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import banner from 'static/images/football-grunge-banner.png';
import styles from 'static/scss/breadcrumb.module.scss';

const BreadCrumb = ({ name1, name2, urlSlug1 }) => {
  return (
    <div className={styles.breadcrumb}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.banner}>
            <Image height={70} src={banner} alt="banner" />
          </div>
          <ul className={styles.list_item}>
            <li className={styles.breadcrumb_item}>
              <a href="/">Trang chủ</a>
            </li>
            {name1 && <FontAwesomeIcon icon={faAngleRight} />}
            <li className={styles.breadcrumb_item}>
              <a href={urlSlug1}>{name1}</a>
            </li>
            {/* <li className={name2 ? styles.breadcrumb_item : styles.breadcrumb_active}>{name1}</li> */}
            {name2 && <FontAwesomeIcon icon={faAngleRight} />}
            {name2 && <li className={styles.breadcrumb_item}>{name2}</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
