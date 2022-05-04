import './Home.scss';
import Header from '../common/Header';
import Footer from '../common/ChangeImage';
import ChangeImageContainer from '../containers/ChangeImageContainer';
import store from '../redux/create';
import { useEffect, useRef, useState } from 'react';
export default function Home() {
  interface colorPalette {
    color1: string;
    color2: string;
    color3: string;
    color4: string;
    color5: string;
    colorurl: string;
  }
  const initialcolor: colorPalette = {
    color1: '#214172',
    color2: '#84bdd1',
    color3: '#9e3a33',
    color4: '#dc4d30',
    color5: '#f0ebda',
    colorurl: '/images/shooting-star.png',
  };

  const [isToggle, setToggle] = useState(false);
  const [backColor, setBackgroundColor] = useState<colorPalette>(initialcolor);

  let result: number | null = 0;
  const prefix = '/images/';
  let palatteArray = {
    colorurl: '/images/shooting-star.png',
  };

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      result = store.getState().imageNumber.number;
      switch (result) {
        case 1: {
          palatteArray.colorurl = prefix + 'shooting-star.png';
          setPalatte(
            '#214172',
            '#84bdd1',
            '#9e3a33',
            '#dc4d30',
            '#f0ebda',
            palatteArray.colorurl
          );
          break;
        }
        case 2: {
          palatteArray.colorurl = prefix + 'mint-choco.png';
          setPalatte(
            '#8BC5C0',
            '#56393C',
            '#8BC5C0',
            '#56393C',
            '#8BC5C0',
            palatteArray.colorurl
          );
          break;
        }
        case 3: {
          palatteArray.colorurl = prefix + 'mother-alien.png';
          setPalatte(
            '#885541',
            '#C99D7F',
            '#3B0500',
            '#E7DDC2',
            '#F3EFE8',
            palatteArray.colorurl
          );
          break;
        }
        case 4: {
          palatteArray.colorurl = prefix + 'rainbow-sherbet.png';
          setPalatte(
            '#E78EAE',
            '#EFA950',
            '#F3F3F5',
            '#EFA950',
            '#E78EAE',
            palatteArray.colorurl
          );
          break;
        }
        case 5: {
          palatteArray.colorurl = prefix + 'cotten-candy.png';
          setPalatte(
            '#FFE9ED',
            '#B8C6C9',
            '#F6EBC6',
            '#D983A2',
            '#FFE9ED',
            palatteArray.colorurl
          );
          break;
        }

        default: {
          palatteArray.colorurl = prefix + 'shooting-star.png';
          setPalatte(
            '#214172',
            '#84bdd1',
            '#9e3a33',
            '#dc4d30',
            '#f0ebda',
            palatteArray.colorurl
          );
          break;
        }
      }
    });
    return () => {
      setToggle(false);
      unsubscribe();
    };
  }, [isToggle]);

  return (
    <>
      <Header />
      <section>
        <div className="home">
          <div className="palatte">
            <ul>
              <li
                className="color"
                style={{ backgroundColor: backColor?.color1 }}
              >
                1
              </li>
              <li
                className="color"
                style={{ backgroundColor: backColor?.color2 }}
              >
                2
              </li>
              <li
                className="color"
                style={{ backgroundColor: backColor?.color3 }}
              >
                3
              </li>
              <li
                className="color"
                style={{ backgroundColor: backColor?.color4 }}
              >
                4
              </li>
              <li
                className="color"
                style={{ backgroundColor: backColor?.color5 }}
              >
                5
              </li>
            </ul>
          </div>
          <div
            className="right-radius"
            style={{ backgroundColor: backColor?.color1 }}
          ></div>
        </div>
        <div
          className="right-img"
          style={{
            backgroundImage: `url(${backColor?.colorurl})`,
          }}
        ></div>
      </section>
      <ChangeImageContainer />
    </>
  );
  function click() {
    setToggle(true);
  }
  function setPalatte(
    col1: string,
    col2: string,
    col3: string,
    col4: string,
    col5: string,
    url: string
  ) {
    setBackgroundColor(prevState => ({
      ...prevState,
      color1: col1,
      color2: col2,
      color3: col3,
      color4: col4,
      color5: col5,
      colorurl: url,
    }));
  }
}
