import PropTypes from "prop-types";
import './App.css';
var React = require('react');
var QRCode = require('qrcode.react');

function App({ value, renderAs, size, bgColor, fgColor, level, includeMargin, customLogo, rounded }) {
  return (



      <div className={` App   ${rounded ? "rounded" : ""}  `} >
        



  <QRCode 
    value={value}
    renderAs={renderAs}
    size={size}
    renderAs={renderAs}
    level={level}
    bgColor={bgColor}
    fgColor={fgColor}
    includeMargin={includeMargin} />


<div className="logo" style={{ backgroundImage: `url('${customLogo}')` , backgroundColor: `${bgColor}` }}>  </div>
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
  customLogo: PropTypes.string,
  rounded: PropTypes.string,
  
}

App.defaultProps = {
  value: 'https://make.cm',
  renderAs: 'svg',
  size: '1024',
  bgColor: 'transparent',
  customLogo: '',
  fgColor: '#000',
  level: 'L',
  includeMargin: false,
  rounded: false,
}

export default App;
