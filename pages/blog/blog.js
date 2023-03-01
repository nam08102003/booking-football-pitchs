import BreadCrumb from 'component/BreadCrumb';
import Loading from 'component/Global/Loading';
import BlogSideBar from 'component/sections/BlogSideBar';
import { dataCategories } from 'data/data';
import WebLayout from 'layouts/WebLayout';
import dynamic from 'next/dynamic';
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import cate from 'static/scss/listCategory.module.scss';
import styles from 'static/scss/pages/blog.module.scss';

const New = dynamic(() => import('component/sections/New'), {
  ssr: false,
  loading: () => null,
});
// const BlogSideBar = dynamic(() => import('component/sections/BlogSideBar'), {
//   ssr: false,
//   loading: () => null,
// });
// import { blogs } from 'models/blogsModel';
// import withDva from 'utils/store';
// import models from 'models';

const Blog = () => {
  const [active, setActive] = useState(0);
  const [blogRender, setBlogRender] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState([]);
  const [typeBlog, setTypeBlog] = useState('');

  const dispatch = useDispatch();

  const handleSetPage = (numberPage) => {
    setPage(numberPage);
  };

  // const renderDotsPage = () => {
  // if(totalPage < 4) {
  //   return <li className={`${page === index+1 ? 'dot active' : ''}`}>{index + 1}</li>;
  // }

  // if (index > 1 && index < totalPage - 1) {
  //   return (
  //     <>
  //       ...
  //       <li>{totalPage}</li>
  //     </>
  //   );
  // }

  //   for (let i = 0; i < totalPage; i += 1) {
  //     console.log(1);
  //     arrayComponentDots.push(
  //       <li
  //         className={`${page === i + 1 ? 'dot active' : ''}`}
  //         onClick={() => handleSetPage(i + 1)}
  //         aria-hidden="true"
  //       >
  //         {i + 1}
  //       </li>
  //     );
  //   }
  // };

  useEffect(() => {
    dispatch({
      type: 'blogs/fetchAllArticle',
      callback: (response) => {
        if (response?.data?.success) {
          const totalBlog = response?.data?.result.length;
          if (totalBlog % 12 === 0) {
            const arrayString = [];
            for (let i = 0; i < totalBlog / 12; i += 1) {
              arrayString.push(i + 1);
            }
            setTotalPage(arrayString);
          } else {
            const arrayString = [];
            if (totalBlog > 0) {
              for (let i = 0; i < Math.floor(totalBlog / 12) + 1; i += 1) {
                arrayString.push(i + 1);
              }
            }
            setTotalPage(arrayString);
          }
        }
      },
    });
  }, [dispatch, typeBlog]);

  const fetchArticles = useCallback(() => {
    setIsLoading(true);
    dispatch({
      type: 'blogs/fetchListArticle',
      payload: { currenPage: page, amount: 12, typeBlog },
      callback: (response) => {
        if (response?.data?.success) {
          setBlogRender(response?.data?.result.reverse());
          setIsLoading(false);
        }
      },
    });
  }, [dispatch, page, typeBlog]);
  useEffect(() => {
    fetchArticles();
  }, [fetchArticles, typeBlog]);

  const handleClickCategory = (index, category) => {
    setActive(index);
    if (category === 'Tất cả tin tức') {
      setTypeBlog('');
      return;
    }
    setTypeBlog(category);
  };

  return (
    <Loading spinning={isLoading}>
      <WebLayout title="Tin tức - Booking Football Pitch">
        <BreadCrumb name1="Tin tức" />
        <div className="container">
          <div>
            <ul className={cate.list_category}>
              {dataCategories[1]?.children?.map((item, index) => (
                <li
                  // role="button"
                  key={item?.idCategory}
                  className={`${active === index ? 'active' : ''} ${cate?.category_item}`}
                  onClick={() => handleClickCategory(index, item?.title)}
                  aria-hidden="true"
                >
                  {item?.title}
                </li>
              ))}
            </ul>
          </div>
          <div className={`${styles.body_page} row`}>
            <div className={`${styles.content_main} col-lg-8 col-xs-12`}>
              <div className="row flex-xs-wrap">
                {blogRender?.map((item) => {
                  return (
                    <a
                      href={`/blog/detail/${item?.key}`}
                      className="col-12 col-sm-6 col-lg-6 col-xl-4 "
                      key={item?.key}
                    >
                      <New data={item} hasButton={false} pointer />
                    </a>
                  );
                })}
              </div>
              <div className={styles.dots_page}>
                <ul>
                  {totalPage.map((item) => {
                    return (
                      <li
                        key={Number(item)}
                        className={`${page === item ? 'dot active' : ''}`}
                        onClick={() => handleSetPage(item)}
                        aria-hidden="true"
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-xs-12">
              <BlogSideBar />
            </div>
          </div>
        </div>
      </WebLayout>
    </Loading>
  );
};

export default Blog;
// export default withDva((state) => state.blogs)(Blog);
// export default connect(mapStateToProps)(Blog);
