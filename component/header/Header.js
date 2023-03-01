import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { dataMenu } from 'data/data';
import { ShowFormContext } from 'layouts/WebLayout';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCookie } from 'utils/cookies';

const Header = ({ styles, dataUser, login }) => {
  const [menuSetting, setMenuSetting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { setShowLogin, setShowSignUp } = useContext(ShowFormContext);
  const router = useRouter();
  const { asPath } = router;
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({
      type: 'auth/fetchLogout',
      payload: { id: dataUser?.id },
      callback: (response) => {
        if (response?.data?.success) {
          setCookie('username', '');
          setCookie('roleId', '');
          setCookie('isLogin', false);
          setCookie('id', '');
          window.location.reload(true);
        }
      },
    });
  };
  return (
    <div className={styles.header}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="navbar-brand">
            <div className={styles.left}>
              <div className={styles.logo}>
                <Image src="/static/images/logo.png" alt="logo" width={100} height={100} />
              </div>
              <h3 className={styles.text_logo}>BFP</h3>
            </div>
          </div>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowModal(!showModal)}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className={`${showModal ? 'show' : ''} collapse navbar-collapse justify-content-center`}
            id="#navbarNav"
          >
            <ul className={`${styles.list_menu} gap-md-3`}>
              {dataMenu?.map((menu) => (
                <li key={menu.id} className={`${styles.item_menu}`}>
                  <a
                    href={`/${menu?.urlSlug}`}
                    className={`${asPath === `/${menu?.urlSlug}` ? 'active' : ''}`}
                  >
                    {menu?.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            {login ? (
              <div className={styles.user_login}>
                <button type="button" onClick={() => setMenuSetting(!menuSetting)}>
                  {dataUser?.username || ''}
                  <FontAwesomeIcon icon={faChevronDown} />
                </button>
                <div className={`${styles.menu_setting} ${menuSetting ? 'show' : ''}`}>
                  <ul>
                    <li>
                      <a href="/">Thông tin tài khoản</a>
                    </li>
                    <li>
                      <a href="/">Cài đặt</a>
                    </li>
                    <li>
                      <a href="/">Lịch sử đặt sân</a>
                    </li>
                    <li>
                      <a href="/" onClick={handleLogout}>
                        Đăng xuất
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <>
                {/* <button
                  className=""
                  type="button"
                  onClick={() => setShowModal(!showModal)}
                >
                  <FontAwesomeIcon icon={faCircleUser} />
                </button> */}
                <div className={styles.right}>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowSignUp(true)}
                  >
                    Đăng kí
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setShowLogin(true)}
                  >
                    Đăng nhập
                  </button>
                </div>
              </>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
