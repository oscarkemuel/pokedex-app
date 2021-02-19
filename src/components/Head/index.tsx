import React from 'react';
import { Head } from './styles';

import Logo from '../../assets/images/logo.png';

const Header: React.FC = () => (
  <Head>
    <img src={Logo} alt="pokemon" />
    <h1>Uma Pokedex completa criada em React JS</h1>
  </Head>
);

export default Header;
