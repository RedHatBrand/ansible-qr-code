import PropTypes from "prop-types";
import './App.css';
var React = require('react');
var QRCode = require('qrcode.react');

function App({ value, renderAs, size, bgColor, fgColor, level, includeMargin }) {
  return (
    <div className="App" >
      

  <QRCode 
    value={value}
    renderAs={renderAs}
    size={size}
    renderAs={renderAs}
    level={level}
    bgColor={bgColor}
    fgColor={fgColor}
    includeMargin={includeMargin} />
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
  
}

App.defaultProps = {
  value: 'http://make.cm',
  renderAs: 'svg',
  size: '1024',
  bgColor: 'transparent',
  fgColor: '#000',
  level: 'M',
  includeMargin: false,
}

export default App;
