import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent2.module.css";
const FrameComponent2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onArrowLeftHighlighted1ImageClick = useCallback(() => {
    navigate("/frame-282");
  }, [navigate]);

  const onArrowLeftNormal1ImageClick = useCallback(() => {
    navigate("/frame-280");
  }, [navigate]);

  return (
    <div className={styles.f32Parent}>
      <img className={styles.f32Icon} alt="" src="/f-3-21@2x.png" />
      <img className={styles.bgIcon} alt="" src="/bg2@2x.jpg" />
      <img className={styles.divIcon} alt="" src="/div@2x.png" />
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
      <img className={styles.icon} alt="" src="/2@2x.png" />
      <div className={styles.div6}>Найан</div>
      <div className={styles.div7}>
          Эрудированный историк, обладатель древнейших артефактов, наследник королевского рода и один из самых долгоживущих эльфов. Имя ему — Найан ди Дернье. Лишь немногие в Сарнауте могут посоревноваться с его кладезем знаний. Он был свидетелем разрушительного Катаклизма, наблюдал за основанием целых государств и повстречал множество людей, сыгравших важную роль в истории Сарнаута. Но кто-то сыграл важную роль именно в его жизни, оставив глубокий отпечаток в душе.
      </div>
      <div className={styles.div8}>Художник: аNон</div>
      <img className={styles.divIcon1} alt="" src="/div@2x.png" />
      <img
        className={styles.arrowlefthighlighted1Icon}
        alt=""
        src="/arrowleftnormal-1@2x.png"
        onClick={onArrowLeftHighlighted1ImageClick}
      />
      <img
        className={styles.arrowleftnormal1Icon}
        alt=""
        src="/arrowleftnormal-1@2x.png"
        onClick={onArrowLeftNormal1ImageClick}
      />
      <div className={styles.div9}>
        <img className={styles.icons} alt="" src="/icons4.svg" />
        <div className={styles.div10}>
            <a href="http://localhost:3000/frame-285">Назад к персонажам</a>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div11}>
          <img className={styles.icons} alt="" src="/icons4.svg" />
          <div className={styles.div10}>
              <a href="https://alloder.ru">Назад на сайт</a>
          </div>
        </div>
      </div>
      <img className={styles.frameChild} alt="" src="/rectangle-22@2x.png" />
    </div>
  );
};

export default FrameComponent2;
