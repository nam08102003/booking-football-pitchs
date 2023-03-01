import BreadCrumb from 'component/BreadCrumb';
import { dataCategories } from 'data/data';
import WebLayout from 'layouts/WebLayout';
import React from 'react';
// import cate from 'static/scss/listCategory.module.scss';
import styles from 'static/scss/about.module.scss';

// import dynamic from 'next/dynamic';

// const ListCategory = dynamic(() => import('component/ListCategory'), {
//   ssr: true,
//   loading: () => null,
// });

const About = () => {
  // const sanitizer = DOMPurify.sanitize;
  return (
    <WebLayout title="Giới thiệu về chúng tôi">
      <BreadCrumb name1="Giới thiệu" />
      <div className={styles.about}>
        <div className="container">
          <h2 className={styles.title}>{dataCategories[0]?.children[0]?.title}</h2>
          <div
            className={styles.content_about}
            dangerouslySetInnerHTML={{ __html: dataCategories[0]?.children[0]?.content }}
          />
        </div>
      </div>
    </WebLayout>
  );
};

export default About;
