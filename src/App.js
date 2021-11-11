import PropTypes from "prop-types";
import './App.css';
var React = require('react');
var QRCode = require('qrcode.react');

function App({ value, renderAs, size, bgColor, fgColor, level, includeMargin, logo, rounded }) {
  return (
 
      <div className={` App   ${rounded ? "rounded" : ""}  `} >
        



  <QRCode 
    value={value}
    renderAs={renderAs}
    size={size}
    level={level}
    bgColor={bgColor}
    fgColor={fgColor}
    includeMargin={includeMargin} 
    imageSettings={{
      src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-10 -10 212 166'%3E%3Cpath d='M127.5 83.5C140 83.5 158 80.9 158 66a14 14 0 0 0-.3-3.4l-7.5-32.4c-1.7-7-3.2-10.3-15.7-16.6-9.7-5-30.8-13.1-37-13.1C91.5.5 90 8 83 8c-6.7 0-11.7-5.6-18-5.6-6 0-9.8 4-12.9 12.5 0 0-8.4 23.7-9.5 27.2a6.4 6.4 0 0 0-.2 1.9c0 9.2 36.3 39.5 85 39.5M160 72c1.7 8.2 1.7 9 1.7 10.1 0 14-15.7 21.8-36.4 21.8-46.8 0-87.7-27.4-87.7-45.5a18.4 18.4 0 0 1 1.5-7.3C22.3 52 .5 55 .5 74.2c0 31.5 74.6 70.3 133.7 70.3 45.2 0 56.7-20.5 56.7-36.6 0-12.8-11-27.2-30.9-35.8' fill='%23e00'/%3E%3C/svg%3E",
      x: null,
      y: null,
      height: 189,
      width: 250,
      excavate: true,
    }}
    />


<div className={` Logo   ${logo ? "logo" : ""}  `} >

 </div>
    </div>
  );
}

App.propTypes = {
  value: PropTypes.string,
  renderAs: PropTypes.string,
  size: PropTypes.string,
  bgColor: PropTypes.string,
  fgColor: PropTypes.string,
  level: PropTypes.string,
  includeMargin: PropTypes.string,
  logo: PropTypes.string,
  rounded: PropTypes.string,
 
  
}

App.defaultProps = {
  value: 'http://redhat.com',
  renderAs: 'svg',
  size: '1024',
  bgColor: 'transparent',
  logo: true,
  fgColor: '#e00',
  level: 'M',
  includeMargin: false,
  rounded: true,
 
}

export default App;
