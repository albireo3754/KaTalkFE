import React, { useRef } from 'react';
import { getTime } from '../../../utils';
import { TimeS } from './style';

export const Time = (): JSX.Element => {
  const ref = useRef(getTime());
  return <TimeS>{ref.current}</TimeS>;
};
