import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent4.module.css";
const FrameComponent4: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/frame-282");
  }, [navigate]);

  const onImage1Click = useCallback(() => {
    navigate("/frame-283");
  }, [navigate]);

  const onImage2Click = useCallback(() => {
    navigate("/frame-281");
  }, [navigate]);

  const onImage3Click = useCallback(() => {
    navigate("/frame-280");
  }, [navigate]);

  return (
    <div className={styles.f32Parent}>
      <img className={styles.f32Icon} alt="" src="/f-3-2@2x.png" />
      <img className={styles.bgIcon} alt="" src="/bg4@2x.png" />
      <div className={styles.header}>
        <div className={styles.logoParent}>
          <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
          <div className={styles.menu}>
            <div className={styles.div}>Главная</div>
            <div className={styles.div}>Новости</div>
            <div className={styles.parentMenuItem}>
              <div className={styles.div}>Контент</div>
              <img className={styles.icons} alt="" src="/icons.svg" />
            </div>
            <div className={styles.login}>
              <div className={styles.div}>Полезное</div>
              <img className={styles.icons} alt="" src="/icons1.svg" />
            </div>
            <div className={styles.login}>
              <div className={styles.div}>Интересное</div>
              <img className={styles.icons} alt="" src="/icons1.svg" />
            </div>
            <div className={styles.login}>
              <div className={styles.div}>allodswiki.ru</div>
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
            <div className={styles.div5}>Войти</div>
          </div>
        </div>
      </div>
      <img
        className={styles.icon}
        alt=""
        src="/4@2x.png"
        onClick={onImageClick}
      />
      <img
        className={styles.icon1}
        alt=""
        src="/5@2x.png"
        onClick={onImage1Click}
      />
      <img
        className={styles.icon2}
        alt=""
        src="/6@2x.png"
        onClick={onImage2Click}
      />
      <img
        className={styles.icon3}
        alt=""
        src="/7@2x.png"
        onClick={onImage3Click}
      />
      <img className={styles.divIcon} alt="" src="/div@2x.png" />
      <img className={styles.divIcon1} alt="" src="/div@2x.png" />
      <img className={styles.frameChild} alt="" src="/rectangle-22@2x.png" />
      <div className={styles.buttonbuylevelnormal2Parent}>
        <img
          className={styles.buttonbuylevelnormal2Icon}
          alt=""
          src="/buttonbuylevelnormal-2@2x.png"
        />
        <div className={styles.div6}>Играть</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div7}>
          <img className={styles.icons} alt="" src="/icons4.svg" />
          <div className={styles.div8}>
              <a href="https://alloder.ru">Назад на сайт</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
