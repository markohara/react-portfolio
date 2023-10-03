import logo from './logo.svg';
import './App.css';

import { HeaderInfo } from './Components/Header/HeaderInfo';
export const App = () => {
  const downloadCV = () => {
    const a = document.createElement('a');
    a.href = 'path_to_your_cv.pdf'; // Provide the exact path to the CV file
    a.download = 'MyCV.pdf'; // Name of the downloaded file
    a.click();
  };

  const hireMe = () => {
    alert('Hire me button clicked!');
  };

  return (
    <HeaderInfo
      title="Hello, I'm Mark"
      paragraph="Welcome to my personal website. Here, you can find all information about me."
      onHireMeClick={hireMe}
      onDownloadClick={downloadCV}
    />
  );
};