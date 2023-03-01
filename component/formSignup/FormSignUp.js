import { faUser, faLock, faClose, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ShowFormContext } from 'layouts/WebLayout';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import styles from 'static/scss/formLogin.module.scss';

export default function FormSignUp() {
  const { showSignUp, setShowSignUp, setShowLogin } = useContext(ShowFormContext);
  const [messsageErrors, setMessageErrors] = useState([]);
  const [disable, setDisable] = useState(false);
  const { register, handleSubmit, setValue } = useForm();

  const dispatch = useDispatch();

  const handleRegister = (data) => {
    setDisable(true);
    dispatch({
      type: 'auth/fetchRegister',
      payload: { data },
      callback: (response) => {
        setMessageErrors(response.data.messages);
        if (response.data.success) {
          setValue('username', '');
          setValue('email', '');
          setValue('password', '');
        }
        setDisable(false);
      },
    });
  };
  return (
    <div className={`${styles.form_login} ${showSignUp ? 'show' : ''}`}>
      <h3>Đăng ký</h3>
      <form onSubmit={handleSubmit(handleRegister)}>
        <div className={styles.field}>
          <FontAwesomeIcon icon={faUser} />
          <input
            type="text"
            autoComplete="on"
            placeholder="Tên tài khoản"
            {...register('username')}
          />
        </div>
        {messsageErrors?.messageUserField ? (
          <div className={styles.message_error}>
            <p>{messsageErrors.messageUserField}</p>
          </div>
        ) : (
          ''
        )}
        <div className={styles.field}>
          <FontAwesomeIcon icon={faEnvelope} />
          <input type="email" autoComplete="on" placeholder="Email" {...register('email')} />
        </div>

        {messsageErrors?.messageEmailField ? (
          <div className={styles.message_error}>
            <p>{messsageErrors.messageEmailField}</p>
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
        </div>
        {messsageErrors?.messageMain ? (
          <div className={styles.message_success}>
            <p>{messsageErrors.messageMain}</p>
          </div>
        ) : (
          ''
        )}
        <div className={styles.button_login}>
          <input type="submit" className="btn btn-primary" disabled={disable} value="Đăng ký" />
        </div>
        <div>
          <p>
            Đã có tài khoản?{' '}
            <button
              type="button"
              className={styles.link}
              onClick={() => {
                setShowSignUp(false);
                setShowLogin(true);
              }}
            >
              Đăng nhập
            </button>
          </p>
        </div>
      </form>
      <div className={styles.button_close}>
        <FontAwesomeIcon icon={faClose} onClick={() => setShowSignUp(false)} />
      </div>
    </div>
  );
}
