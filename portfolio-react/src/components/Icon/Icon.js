import React from 'react';
import { ICONS } from '../../constants';

const Icon = props => (
  <svg width="22px" height="22px" viewBox="0 0 1024 1024">
    <path fill={props.fill} d={ICONS[props.icon]}></path>
  </svg>
);

export default Icon;