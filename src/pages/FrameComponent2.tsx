import React, {FunctionComponent, useCallback, useLayoutEffect, useRef} from "react";
import {Link, useNavigate} from "react-router-dom";
import styles from "./FrameComponent2.module.css";
import {useScroll} from "../hooks/useScroll";
import {Header} from "../components/header/header";
const FrameComponent2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onArrowLeftHighlighted1ImageClick = useCallback(() => {
    navigate("/frame-282");
  }, [navigate]);

  const onArrowLeftNormal1ImageClick = useCallback(() => {
    navigate("/frame-280");
  }, [navigate]);

    const ref = useRef<HTMLDivElement>(null)
    const scroll = useScroll(ref);
    useLayoutEffect(() => {
        if (ref.current)ref.current.scrollTop = scroll;
    }, []);

  return (
    <div className={styles.f32Parent}>
        <div ref={ref} className={styles.f32Child}>
      <img className={styles.background} alt="" src="/f-3-22@2x.png" />
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
            <img className={styles.frameChild} alt="" src="/rectangle-22@2x.png" />
            <div className={styles.preloader}>
      <img className={styles.ant} alt="" src="/2@2x.png" />
            </div>
      <div className={styles.div6}>Найан</div>
      <div className={styles.div7}>
          Эрудированный историк, обладатель древнейших артефактов, наследник королевского рода и один из самых долгоживущих эльфов. Имя ему — Найан ди Дернье. Лишь немногие в Сарнауте могут посоревноваться с его кладезем знаний. Он был свидетелем разрушительного Катаклизма, наблюдал за основанием целых государств и повстречал множество людей, сыгравших важную роль в истории Сарнаута. Но кто-то сыграл важную роль именно в его жизни, оставив глубокий отпечаток в душе.
      </div>
      <div className={styles.div8}>Художник: аNон</div>
      <img className={styles.divIcon1} alt="" src="/div@2x.png" />
      <div
        className={styles.arrowlefthighlighted1Icon}
        onClick={onArrowLeftHighlighted1ImageClick}
      />
      <div
        className={styles.arrowleftnormal1Icon}
        onClick={onArrowLeftNormal1ImageClick}
      />
      <div className={styles.div9}>
        <img className={styles.icons} alt="" src="/icons4.svg" />
        <div className={styles.div10}>
            <Link to="/frame-285">Назад к персонажам</Link>
        </div>
      </div>
            <Header showMenu={false}/>
        </div>
    </div>
  );
};

export default FrameComponent2;
