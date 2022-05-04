import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import ChangeImage from '../common/ChangeImage';
import { change } from '../redux/module/imageNumber';

export default function ChangeImageContainer() {
  const dispatch = useDispatch();

  const add = useCallback(
    number => {
      dispatch(change(number));
    },
    [dispatch]
  );
  return <ChangeImage add={add} />;
}
