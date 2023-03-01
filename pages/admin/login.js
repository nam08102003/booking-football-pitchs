import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Layout } from 'antd';
import Head from 'next/head';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import styles from 'static/scss/pages/login.module.scss';
import { setCookie } from 'utils/cookies';

const Login = () => {
  const [messsageErrors, setMessageErrors] = useState({});
  const [disable, setDisable] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const handleLogin = (data) => {
    setDisable(true);
    dispatch({
      type: 'admin/adminLogin',
      payload: {
        data,
      },
      callback: (response) => {
        // console.log(response);
        setMessageErrors(response.data.messages);
        if (!response.data.success) {
          setDisable(false);
        } else {
          setCookie('adminLogin', response.data.success, 0.08);
          setCookie('adminUser', response.data.username, 0.08);
          setCookie('roleIdAdmin', response.data.roleId, 0.08);
          window.location.replace('dashboard');
        }
      },
    });
  };
  return (
    <React.Fragment>
      <Head>
        <title>Đăng nhập</title>
      </Head>
      <Layout>
        <div className={styles.body_page}>
          <div className={styles.form_login}>
            <h3>Đăng nhập</h3>
            <form action="" onSubmit={handleSubmit(handleLogin)}>
              <div className={styles.field}>
                <FontAwesomeIcon icon={faUser} />
                <input type="text" placeholder="Tên tài khoản" {...register('username')} />
                {errors.username && <p>{errors.username.message}</p>}
              </div>
              {messsageErrors?.messageUserField ? (
                <div className={styles.message_error}>
                  <p>{messsageErrors.messageUserField}</p>
                </div>
              ) : (
                ''
              )}

              <div className={styles.field}>
                <FontAwesomeIcon icon={faLock} />
                <input type="password" placeholder="Password" {...register('password')} />
                {errors.password && <p>{errors.password.message}</p>}
              </div>
              {messsageErrors?.messagePasswordField ? (
                <div className={styles.message_error}>
                  <p>{messsageErrors.messagePasswordField}</p>
                </div>
              ) : (
                ''
              )}

              <div className={styles.button_login}>
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Đăng nhập"
                  disabled={disable}
                />
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default Login;
