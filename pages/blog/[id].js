import BreadCrumb from 'component/BreadCrumb';
import Loading from 'component/Global/Loading';
import BlogSideBar from 'component/sections/BlogSideBar';
import WebLayout from 'layouts/WebLayout';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from 'static/scss/pages/blog_detail.module.scss';

const BlogDetail = () => {
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const blogId = String(router.query.id);
  console.log(router);

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch({
        type: 'blogs/increaseViewArticle',
        payload: { id: blogId },
        callback: (response) => {
          console.log(response);
        },
      });
    }, 10000);

    return () => {
      clearTimeout(timeout);
    };
  }, [blogId, dispatch]);

  useEffect(() => {
    setIsLoading(true);
    if (blogId) {
      dispatch({
        type: 'blogs/fetchOneArticle',
        payload: {
          id: blogId,
        },
        callback: (response) => {
          setIsLoading(false);
          if (response?.data?.success) {
            setBlog(response?.data?.result);
          }
        },
      });
    }
  }, [blogId, dispatch]);

  return (
    <Loading spinning={isLoading}>
      <WebLayout title={blog?.title}>
        <BreadCrumb name1="Tin tức" urlSlug1="/blog" />
        <div className="container ">
          <div className="row mt-3 mt-lg-5">
            <div className={`${styles.content_main} col-12 col-sm-12 col-lg-8`}>
              <div>
                <h2 className={styles.title}>{blog?.title}</h2>
              </div>
              <div className={styles.image}>
                <Image
                  src={
                    blog?.image || '/static/images/light-gray-color-solid-background-1920x1080.png'
                  }
                  alt={blog?.title || 'Tin tức'}
                  width={120}
                  height={100}
                />
              </div>
              <div
                className={styles.content_about}
                dangerouslySetInnerHTML={{ __html: blog?.description }}
              />
            </div>
            <div className="col-12 col-sm-12 col-lg-4">
              <BlogSideBar />
            </div>
          </div>
        </div>
      </WebLayout>
    </Loading>
  );
};

export default BlogDetail;
