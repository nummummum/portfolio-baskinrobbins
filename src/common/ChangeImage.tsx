import { useRef } from 'react';
import store from '../redux/create';
import { ImageState } from '../types';
import './ChangeImage.scss';

interface ChangeProps {
  add: (reqData: number) => void;
}
export default function ChangeImage({ add }: ChangeProps) {
  return (
    <div className="footer">
      <ul>
        <li>
          <img
            className="image1"
            src="/images/shooting-star.png"
            onClick={e => {
              click(e.currentTarget.className);
            }}
            alt=""
          />
        </li>
        <li>
          <img
            className="image2"
            src="/images/mint-choco.png"
            onClick={e => {
              click(e.currentTarget.className);
            }}
            alt=""
          />
        </li>
        <li>
          <img
            className="image3"
            src="/images/mother-alien.png"
            onClick={e => {
              click(e.currentTarget.className);
            }}
            alt=""
          />
        </li>
        <li>
          <img
            className="image4"
            src="/images/rainbow-sherbet.png"
            onClick={e => {
              click(e.currentTarget.className);
            }}
            alt=""
          />
        </li>
        <li>
          <img
            className="image5"
            src="/images/cotten-candy.png"
            onClick={e => {
              click(e.currentTarget.className);
            }}
            alt=""
          />
        </li>
      </ul>
    </div>
  );

  function click(e: string) {
    if (e === 'image1') {
      add(1);
    } else if (e === 'image2') {
      add(2);
    } else if (e === 'image3') {
      add(3);
    } else if (e === 'image4') {
      add(4);
    } else if (e === 'image5') {
      add(5);
    }
  }
}
