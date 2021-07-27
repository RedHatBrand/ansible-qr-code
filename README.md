# Make QR Code Generator (React)

A Make API template for https://github.com/zpao/qrcode.react

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

 
## Development server

 `yarn install`

 `yarn start`  >  `http://localhost:3000/` 

## Building for Make

Run `yarn build` to build the project with correct resource pathing for the sake of deploying to make.

The build artifacts will be stored in the `/build` directory.

## Importing into Make

When importing into Make be sure to import from the `/build` folder.

The following `data` inputs are set default to:

  value: 'http://make.cm',
  renderAs: 'svg',
  size: '1024',
  bgColor: 'transparent',
  fgColor: '#000',
  Level: 'M',
  includeMargin: false, 
  
## Support

Here are some helpful links to get you started
- [Docs](https://docs.make.cm): First point of call
- [Twitter](https://twitter.com/home): Drop us a message on twitter if you find a bug or have any feedback
- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
