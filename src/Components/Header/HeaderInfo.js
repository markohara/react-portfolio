import React from 'react';
import { SolidButton } from '../Buttons/SolidButton';
import { OutlinedButton } from '../Buttons/OutlinedButton';

export const HeaderInfo = ({ onHireMeClick, onDownloadClick, title, paragraph }) => (
  <header style={{ textAlign: 'center', padding: '20px' }}>
    <h1>{title}</h1>
    <p>{paragraph}</p>
    <SolidButton onClick={onHireMeClick}>Hire Me</SolidButton>
    <OutlinedButton onClick={onDownloadClick}>Download CV</OutlinedButton>
  </header>
);