import { faCircleDot, faCalendarDays, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading from 'component/Global/Loading';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from 'static/scss/pages/home.module.scss';

const WebLayout = dynamic(() => import('layouts/WebLayout.js'), {
  ssr: true,
  loading: () => null,
});
const Banner = dynamic(() => import('component/sections/Banner'), {
  ssr: false,
  loading: () => null,
});
const SliderCustom = dynamic(() => import('component/sections/SliderCustom'), {
  ssr: true,
  loading: () => null,
});
const PitchCard = dynamic(() => import('component/sections/PitchCard'), {
  ssr: true,
  loading: () => null,
});
const New = dynamic(() => import('component/sections/New'), {
  ssr: true,
  loading: () => null,
});

const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: false,
  arrows: false,
  // lazyLoad: true,
  initialSlide: 0,
  appendDots: (dots) => (
    <div>
      <ul style={{ display: 'inline-flex', paddingTop: '20px' }}>
        {dots.map((item, ind) => {
          console.log(ind);
          const id = ind;
          return <li key={id}>{item?.prop?.children}</li>;
        })}{' '}
      </ul>
    </div>
  ),
  customPaging: () => (
    <button
      type="button"
      aria-label="Mute volume"
      style={{
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: '#85C240',
        margin: '0 4px',
      }}
    />
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
  ],
};

export default function Home() {
  const dispatch = useDispatch();
  const [listBlog, setListBlog] = useState([]);
  const [listPitchs, setListPitchs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPitchs = useCallback(() => {
    setIsLoading(true);
    dispatch({
      type: 'pitch/fetch',
      callback: (response) => {
        setIsLoading(false);
        setListPitchs(response?.data?.result);
      },
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch({
      type: 'blogs/fetchAllArticle',
      callback: (response) => {
        if (response?.data?.success) {
          setListBlog(response?.data?.result.reverse().slice(0, 4));
        }
      },
    });
    // callback fetchPitchs
    fetchPitchs();
  }, [fetchPitchs, dispatch]);

  return (
    <Loading spinning={isLoading}>
      <WebLayout title="Đặt sân bóng đá online lớn nhất Hà Nội">
        <div className={styles.site_home_page}>
          <Banner title="Đặt Sân Bóng Chưa Bao Giờ Dễ Dàng Hơn Thế" site="Đống Đa" hasFormSearch />
          <div className="container text-center">
            <div className={styles.offer_booking}>
              <h2>
                <Image alt="image-icon" src="/static/images/soccer.png" width={100} height={100} />
                Đề xuất các sân bóng
                <Image alt="image-icon" src="/static/images/soccer.png" width={100} height={100} />
              </h2>
              <div className="row">
                <SliderCustom settings={settings}>
                  {listPitchs?.map((item) => {
                    return <PitchCard data={item} key={item?.key} />;
                  })}
                </SliderCustom>
              </div>
            </div>
            <div className={`row ${styles.score}`}>
              <div className={`col-xs-12 col-lg-3 ${styles.score_image}`}>
                <Image alt="image-icon" src="/static/images/score.png" width={100} height={100} />
              </div>
              <div className={`col-xs-12 col-lg-5 ${styles.score_text}`}>
                <h3>
                  Sẵn sàng chấp nhận những <span>thử thách</span> mới ?
                </h3>
              </div>
              <div className={`col-xs-12 col-lg-4 ${styles.score_list}`}>
                <h4>Chúng tôi đã có</h4>
                <ul>
                  <li>
                    <p>
                      <span>+500</span> SVĐ đã đăng kí
                      <Image
                        alt="image-icon"
                        src="/static/images/pitch.png"
                        width={100}
                        height={100}
                      />
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>+10k</span> người đã tham gia
                      <Image
                        alt="image-icon"
                        src="/static/images/player.png"
                        width={100}
                        height={100}
                      />
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>+100</span> giải đấu đã được tạo
                      <Image
                        alt="image-icon"
                        className="col"
                        src="/static/images/cup.png"
                        width={100}
                        height={100}
                      />
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.profit}>
              <h2 className={styles.title_section}>
                <div />
                Dễ Dàng Đặt Sân Chỉ Trong Vài Phút
                <div />
              </h2>
              <div className={`${styles.list_profit} row`}>
                <div className="col">
                  <div>
                    <FontAwesomeIcon icon={faCircleDot} />
                  </div>
                  <h3>Tìm kiếm</h3>
                  <p>Tìm sân bóng đá gần bạn</p>
                </div>
                <div className="col">
                  <div>
                    <FontAwesomeIcon icon={faCalendarDays} />
                  </div>
                  <h3>Lựa chọn</h3>
                  <p>Lựa chọn thời gian phù gợp</p>
                </div>
                <div className="col">
                  <div>
                    <FontAwesomeIcon icon={faCreditCard} />
                  </div>
                  <h3>Thanh toán</h3>
                  <p>Thanh toán nhanh gọn uy tín</p>
                </div>
              </div>
            </div>
            <div className={styles.best_news}>
              <h2 className={styles.title_section}>
                <div />
                Tin tức mới nhất
                <div />
              </h2>
              <div className="row flex-lg-nowrap flex-xs-wrap">
                {listBlog?.slice(0, 4)?.map((item) => {
                  return (
                    <div className="col-xs-12 col-sm-6 col-lg-3" key={item?.key}>
                      <New data={item} hasButton pointer={false} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </WebLayout>
    </Loading>
  );
}
