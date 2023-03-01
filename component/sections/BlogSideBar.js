import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from 'static/scss/sections/blogSideBar.module.scss';
import { compareView, compareDate } from 'utils/helper';

export default function BlogSideBar() {
  const [listBestView, setListBestView] = useState([]);
  const [listNewDate, setListNewDate] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'blogs/fetchAllArticle',
      callback: (response) => {
        if (response?.data?.success) {
          setListBestView(response?.data?.result.sort(compareView).slice(0, 5));
          setListNewDate(response?.data?.result.sort(compareDate).reverse().slice(0, 5));
        }
      },
    });
  }, [dispatch]);

  return (
    <div className={`${styles.sidebar}`}>
      <div className={styles.best_often}>
        <div className={styles.title}>
          <h3>Tin mới nhất</h3>
        </div>
        <div className={styles.list_new}>
          {listNewDate?.map((item) => {
            return (
              <div className={`${styles.new_item} row`} key={item?.key}>
                <div className={`${styles.new_image} col-sm-2 col-lg-4 col-4`}>
                  <Image src={item?.image} alt={item?.title} width={100} height={80} priority />
                </div>
                <div className={`${styles.new_title} col-sm-10 col-lg-8 col-8`}>
                  <a href={`/blog/detail/${item?.key}`}>{item?.title}</a>
                  <div
                    className={styles.description}
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.best_new}>
        <div className={styles.title}>
          <h3>Tin xem nhiều</h3>
        </div>
        <div className={styles.list_new}>
          {listBestView?.map((item) => {
            return (
              <div className={`${styles.new_item} row`} key={item?.key}>
                <div className={`${styles.new_image} col-sm-2 col-lg-4 col-4`}>
                  <Image src={item?.image} alt={item?.title} width={100} height={80} priority />
                </div>
                <div className={`${styles.new_title} col-sm-10 col-lg-8 col-8`}>
                  <a href={`/blog/detail/${item?.key}`}>{item?.title}</a>
                  <div
                    className={styles.description}
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
