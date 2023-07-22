import {FunctionComponent, useCallback, useLayoutEffect, useRef} from "react";
import {Link, useNavigate} from "react-router-dom";
import styles from "./FrameComponent3.module.css";
import {useScroll} from "../hooks/useScroll";
const FrameComponent3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onArrowLeftHighlighted1ImageClick = useCallback(() => {
    navigate("/frame-281");
  }, [navigate]);

  const onArrowLeftNormal1ImageClick = useCallback(() => {
    navigate("/frame-283");
  }, [navigate]);

    const ref = useRef<HTMLDivElement>(null)
    const scroll = useScroll(ref);
    useLayoutEffect(() => {
        if (ref.current)ref.current.scrollTop = scroll;
    }, []);

  return (
    <div className={styles.f32Parent}>
        <div ref={ref} className={styles.f32Child}>
      <img className={styles.f32Icon} alt="" src="/f-3-22@2x.png" />
      <img className={styles.bgIcon} alt="" src="/bg3@2x.jpg" />
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
      <img className={styles.icon} alt="" src="/3@2x.png" />
            </div>
      <div className={styles.div6}>Смеяна</div>
      <div className={styles.div7}>
          Великая Волшебница Смеяна по праву считается одним из флагманов техномагического развития Сарнаута. Изобретения из её мастерских пользуются популярностью во всём мире. Даже лапотники из дальних канийских деревень слышали об этой женщине властных нравов. По слухам, Владычица имеет свои академии, где вход открыт лишь для канийских девиц. И она хотела бы распространять образование и дальше — чтобы искоренить невежество среди простого люда.
      </div>
                <div className={styles.div10}>Художник: Sandra Verenim</div>
      <div className={styles.div8}>
        <img className={styles.icons} alt="" src="/icons4.svg" />
        <div className={styles.div9}>
            <Link to="/frame-285">Назад к персонажам</Link>
        </div>
      </div>
      <img className={styles.divIcon1} alt="" src="/div@2x.png" />
      <div
        className={styles.arrowlefthighlighted1Icon}
        onClick={onArrowLeftHighlighted1ImageClick}
      />
      <div
        className={styles.arrowleftnormal1Icon}
        onClick={onArrowLeftNormal1ImageClick}
      />
      <div className={styles.wrapper}>
        <div className={styles.div11}>
          <img className={styles.icons} alt="" src="/icons4.svg" />
          <div className={styles.div9}>
              <a href="https://alloder.ru">Назад на сайт</a>
             </div>
        </div>
      </div>
        </div>
    </div>
  );
};

export default FrameComponent3;
