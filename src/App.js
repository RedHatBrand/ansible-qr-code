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
      src: "data:image/svg+xml,%3Csvg viewBox='0 0 216.6 216.6' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='108.3' cy='108.3' r='108.3' fill='%235bbec0' /%3E%3Cpath d='M 160,151.30001 116.8,47.600006 c -1,-2.8 -3.7,-4.6 -6.7,-4.5 -3,-0.1 -5.7,1.7 -6.9,4.5 L 56,161.40001 h 16.2 l 18.7,-46.9 55.9,45.1 c 2.3,1.8 3.9,2.6 6,2.6 4.3,0.1 7.8,-3.3 7.9,-7.5 0,-0.1 0,-0.1 0,-0.2 -0.1,-1.1 -0.3,-2.1 -0.7,-3.2 z m -49.8,-85.100004 28,69.200004 -42.3,-33.4 z' fill='%23fff' /%3E%3C/svg%3E%0A",
      x: null,
      y: null,
      height: 200,
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
  fgColor: '#000',
  level: 'M',
  includeMargin: false,
  rounded: true,
 
}

export default App;
