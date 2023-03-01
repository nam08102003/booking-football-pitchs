import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { createContext, useState, useEffect, useMemo } from 'react';
import styles from 'static/scss/layout.module.scss';
import { getCookie } from 'utils/cookies';

// let cssUrl1 = `/static/scss/layout.scss`;
// let cssUrl2 = `/static/scss/global.scss`;
// if (process.env.NODE_ENV === 'production') {
//   const folderCss = '_next/static/web/css';
//   cssUrl0 = `${publicRuntimeConfig.APP_URL}/${folderCss}/owl.carousel.css`;
// }
const Header = dynamic(() => import('component/header/Header'), {
  ssr: false,
  loading: () => null,
});
const FormForgetPass = dynamic(() => import('component/formForgetPass/FormForgetPass'), {
  ssr: false,
  loading: () => null,
});
const FormLogin = dynamic(() => import('component/formLogin/FormLogin'), {
  ssr: false,
  loading: () => null,
});
const FormSignUp = dynamic(() => import('component/formSignup/FormSignUp'), {
  ssr: false,
  loading: () => null,
});
const Footer = dynamic(() => import('component/footer/Footer'), {
  ssr: false,
  loading: () => null,
});

export const ShowFormContext = createContext();

const WebLayout = ({ children, title }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [login, setLogin] = useState(false);
  const [showForgetPass, setShowForgetPass] = useState(false);
  const [dataUser, setDataUser] = useState({});

  useEffect(() => {}, [showLogin, showSignUp, setShowForgetPass, title]);

  useEffect(() => {
    // setLogin();
    if (getCookie('isLogin') === 'true') {
      setLogin(true);
      const data = {
        username: getCookie('username'),
        roleId: getCookie('roleId'),
        id: getCookie('id'),
      };
      setDataUser(data);
    }
  }, []);

  const handleClick = () => {
    setShowLogin(false);
    setShowSignUp(false);
    setShowForgetPass(false);
  };

  const valueShowForm = useMemo(() => {
    return {
      showLogin,
      setShowLogin,
      showSignUp,
      setShowSignUp,
      showForgetPass,
      setShowForgetPass,
    };
  }, [showLogin, setShowLogin, showSignUp, setShowSignUp, showForgetPass, setShowForgetPass]);
  return (
    // <React.Fragment>
    <ShowFormContext.Provider value={valueShowForm}>
      <Head>
        {/* <link rel="stylesheet" href={`${cssUrl1}`} type="text/css" media="all" />
        <link rel="stylesheet" href={`${cssUrl2}`} type="text/css" media="all" /> */}
        <title>{title || 'Đặt sân bóng online nhanh nhất tại Hà Nội'}</title>
      </Head>
      <Header styles={styles} dataUser={dataUser} login={login} />
      <div
        role="none"
        className={`${styles.overlay} ${showLogin || showSignUp || showForgetPass ? 'show' : ''}`}
        onClick={handleClick}
      />
      <FormLogin />
      <FormSignUp />
      <FormForgetPass />
      <main className={styles.site_content_page}>{children}</main>
      <Footer styles={styles} />
    </ShowFormContext.Provider>
    // {/* </React.Fragment> */}
  );
};

export default WebLayout;
