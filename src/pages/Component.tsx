import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component.module.css";
const Component: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/frame-285");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <img className={styles.f32Icon} alt="" src="/f-3-22@2x.png" />
      <div className={styles.header}>
        <div className={styles.logoParent}>
          <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
          <div className={styles.menu}>
            <div className={styles.allodswikiru}>Главная</div>
            <div className={styles.allodswikiru}>Новости</div>
            <div className={styles.parentMenuItem}>
              <div className={styles.allodswikiru}>Контент</div>
              <img className={styles.icons} alt="" src="/icons.svg" />
            </div>
            <div className={styles.login}>
              <div className={styles.allodswikiru}>Полезное</div>
              <img className={styles.icons} alt="" src="/icons1.svg" />
            </div>
            <div className={styles.login}>
              <div className={styles.allodswikiru}>Интересное</div>
              <img className={styles.icons} alt="" src="/icons1.svg" />
            </div>
            <div className={styles.login}>
              <div className={styles.allodswikiru}>allodswiki.ru</div>
              <img className={styles.icons} alt="" src="/icons2.svg" />
            </div>
          </div>
        </div>
        <img className={styles.hoverIcon} alt="" src="/hover.svg" />
        <div className={styles.buttonParent}>
          <div className={styles.button}>
            <div className={styles.normal}>Помочь проекту</div>
          </div>
          <div className={styles.login}>
            <img className={styles.icons} alt="" src="/icons3.svg" />
            <div className={styles.div6}>Войти</div>
          </div>
        </div>
      </div>
      <img className={styles.child} alt="" src="/rectangle-221@2x.png" />
      <div className={styles.buttonbuylevelnormal2Parent}>
        <img
          className={styles.buttonbuylevelnormal2Icon}
          alt=""
          src="/buttonbuylevelnormal-2@2x.png"
        />
        <div className={styles.div7}>Играть</div>
      </div>
      <img className={styles.item} alt="" src="/vector-1.svg" />
      <img className={styles.inner} alt="" src="/vector-2.svg" />
      <img
        className={styles.icon}
        alt=""
        src="/--1@2x.png"
        onClick={onImageClick}
      />
    </div>
  );
};

export default Component;
