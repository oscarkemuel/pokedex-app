import styled from 'styled-components';

export const MainComponent = styled.main`
  padding: 10px 50px;
  flex-direction: column;
`;

export const Nav = styled.nav`
  width: 100%;
  flex-direction: column;
  .input {
    color: #000000;
    width: 100%;
    max-width: 440px;
    height: 40px;
    display: flex;
    padding: 10px 20px 10px 10px;
    background: #ffffff;
    input {
      color: #000000;
      width: 100%;
      height: 100%;
      font-size: 19px;
    }
    img {
      height: 16px;
    }
  }
  .filter {
    margin-top: 25px;
    flex-direction: column;
    width: 100%;
    h3 {
      img {
        height: 25px;
        margin: 0 10px;
      }
    }
    .types {
      flex-wrap: wrap;
      margin: 10px 0;
      border-top: #277ba1 solid 1px;
      border-bottom: #277ba1 solid 1px;
      width: 100%;
      padding: 15px 20px;
      @media (max-width: 399px) {
        padding: 15px 0;
      }
      button {
        border-radius: 50px;
        padding: 8px 15px;
        width: 110px;
        border: 2px solid transparent;
        margin: 10px;
        :hover {
          transition: all 200ms;
          cursor: pointer;
          border-color: #000000;
        }
        p {
          font-size: 18px;
          font-weight: bold;
        }
        @media (max-width: 399px) {
          width: 100%;
        }
      }
    }
  }
  @media (min-width: 399px) {
    .types {
      padding: 15px 0;
    }
    .filter .type button {
      width: 100%;
    }
  }
`;

export const Article = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  .pokemonCard {
    margin: 22px 25px;
    flex-direction: column;
    width: 215px;
    border-radius: 25px;
    padding: 0px 0px 20px 0px;
    img {
      height: 110px;
    }
    .pokemonName {
      font-size: 19px;
      text-align: center;
      font-weight: bold;
    }
    .status {
      flex-direction: column;
      p {
        margin-top: 3px;
        font-size: 11px;
      }
    }
  }
`;
