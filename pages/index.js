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
      <WebLayout title="?????t s??n b??ng ???? online l???n nh???t H?? N???i">
        <div className={styles.site_home_page}>
          <Banner title="?????t S??n B??ng Ch??a Bao Gi??? D??? D??ng H??n Th???" site="?????ng ??a" hasFormSearch />
          <div className="container text-center">
            <div className={styles.offer_booking}>
              <h2>
                <Image alt="image-icon" src="/static/images/soccer.png" width={100} height={100} />
                ????? xu???t c??c s??n b??ng
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
                  S???n s??ng ch???p nh???n nh???ng <span>th??? th??ch</span> m???i ?
                </h3>
              </div>
              <div className={`col-xs-12 col-lg-4 ${styles.score_list}`}>
                <h4>Ch??ng t??i ???? c??</h4>
                <ul>
                  <li>
                    <p>
                      <span>+500</span> SV?? ???? ????ng k??
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
                      <span>+10k</span> ng?????i ???? tham gia
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
                      <span>+100</span> gi???i ?????u ???? ???????c t???o
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
                D??? D??ng ?????t S??n Ch??? Trong V??i Ph??t
                <div />
              </h2>
              <div className={`${styles.list_profit} row`}>
                <div className="col">
                  <div>
                    <FontAwesomeIcon icon={faCircleDot} />
                  </div>
                  <h3>T??m ki???m</h3>
                  <p>T??m s??n b??ng ???? g???n b???n</p>
                </div>
                <div className="col">
                  <div>
                    <FontAwesomeIcon icon={faCalendarDays} />
                  </div>
                  <h3>L???a ch???n</h3>
                  <p>L???a ch???n th???i gian ph?? g???p</p>
                </div>
                <div className="col">
                  <div>
                    <FontAwesomeIcon icon={faCreditCard} />
                  </div>
                  <h3>Thanh to??n</h3>
                  <p>Thanh to??n nhanh g???n uy t??n</p>
                </div>
              </div>
            </div>
            <div className={styles.best_news}>
              <h2 className={styles.title_section}>
                <div />
                Tin t???c m???i nh???t
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
