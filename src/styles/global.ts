import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    border: 0;
    color: white;
    font-family: segoeui;
  }
  body{
    background: #293744;
    -webkit-font-smoothing: antialiased !important;
  }
  @font-face {
    font-family: 'segoeui';
    src: local('segoeui'), url(../assets/fonts/segoeui.ttf) format('ttf');
  }
  @font-face {
    font-family: 'segoeuib';
    src: local('segoeuib'), url(../assets/fonts/segoeuib.ttf) format('ttf');
  }
  @font-face {
    font-family: 'seguisb';
    src: local('seguisb'), url(../assets/fonts/seguisb.ttf) format('ttf');
  }
  .containerCenter{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .normal{background: #FFFFFF; p{color: #000000;}}
  .fighting{background: #B64D19}
  .flying{background: #277BA1}
  .poison{background: #823EC3}
  .ground{background: #8A8331}
  .rock{background: #715C3D}
  .bug{background: #2F9651}
  .ghost{background: #83417A}
  .steel{background: #6C6C6C}
  .fire{background: #A8282B}
  .water{background: #145EAB}
  .grass{background: #7D8545}
  .electric{background: #BA9A22}
  .psychic{background: #452A8D}
  .ice{background: #659DBA}
  .dragon{background: #D57931}
  .dark{background: #232424}
  .fairy{background: #BA65A0}
  .shadow{background: #414141}
  .unknown{background: #9A9A9A}
`;
