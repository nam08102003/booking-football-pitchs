import { faUser, faLock, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ShowFormContext } from 'layouts/WebLayout';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import styles from 'static/scss/formLogin.module.scss';
import { setCookie } from 'utils/cookies';

export default function FormLogin() {
  const { showLogin, setShowLogin, setShowSignUp, setShowForgetPass } = useContext(ShowFormContext);
  const [disable, setDisable] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [messsageErrors, setMessageErrors] = useState([]);

  const dispatch = useDispatch();

  const handleLogin = (data) => {
    setDisable(true);
    dispatch({
      type: 'auth/fetchLogin',
      payload: {
        data,
      },
      callback: (response) => {
        setMessageErrors(response.data.messages);
        if (!response.data.success) {
          setDisable(false);
        } else {
          setCookie('isLogin', response.data.success, 0.08);
          setCookie('username', response.data.username, 0.08);
          setCookie('roleId', response.data.roleId, 0.08);
          setCookie('id', response.data.id, 0.08);
          window.location.reload(true);
        }
      },
    });
  };
  return (
    <div className={`${styles.form_login} ${showLogin ? 'show' : ''}`}>
      <h3>Đăng nhập</h3>
      <form action="" onSubmit={handleSubmit(handleLogin)}>
        <div className={styles.field}>
          <FontAwesomeIcon icon={faUser} />
          <input
            type="text"
            autoComplete="on"
            placeholder="Tên tài khoản"
            {...register('username')}
          />
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
          <input
            type="password"
            autoComplete="current-password"
            placeholder="Password"
            {...register('password')}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        {messsageErrors?.messagePasswordField ? (
          <div className={styles.message_error}>
            <p>{messsageErrors.messagePasswordField}</p>
          </div>
        ) : (
          ''
        )}
        <div>
          <button
            type="button"
            className={styles.link}
            onClick={() => {
              setShowLogin(false);
              setShowForgetPass(true);
            }}
          >
            Quên mật khẩu?
          </button>
        </div>
        <div className={styles.button_login}>
          <input type="submit" className="btn btn-primary" value="Đăng nhập" disabled={disable} />
        </div>
        <div>
          <p>
            Chưa có tài khoản?{' '}
            <button
              type="button"
              className={styles.link}
              onClick={() => {
                setShowLogin(false);
                setShowSignUp(true);
              }}
            >
              Đăng ký
            </button>
          </p>
        </div>
      </form>
      <div className={styles.button_close}>
        <FontAwesomeIcon icon={faClose} onClick={() => setShowLogin(false)} />
      </div>
    </div>
  );
}
