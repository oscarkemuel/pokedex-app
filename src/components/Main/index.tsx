import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { MainComponent, Nav, Article } from './styles';

import Search from '../../assets/images/search.png';
import Pokebola from '../../assets/images/pokeball.png';

import JSONTYPES from '../../data/types.json';

interface PokemonObject {
  id: number;
  name: string;
  img: string;
  type: Array<string>;
  height: string;
  weight: string;
}

interface PokemonReponse {
  pokemon: Array<PokemonObject>;
}

const Main: React.FC = () => {
  const [listPokemon, setListPokemon] = useState<PokemonReponse>();
  const [toggleFilter, setToogleFilter] = useState(false)
  const [pokemonFilter, setPokemonFilter] = useState('')
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    async function callApi(): Promise<void> {
      const response = await api.get<PokemonReponse>('pokedex.json');
      const pokemons = response.data;

      setListPokemon(pokemons);
    }

    callApi();
  }, []);

  function toggleFilterFunction(tipo: string): void{
    setToogleFilter(!toggleFilter);
    setPokemonFilter(tipo);
  }

  let allFiltred: PokemonObject[] = [];
  if (toggleFilter) {
    let pokemonFilterName: string;
    if (pokemonFilter) {
      pokemonFilterName = pokemonFilter[0].toUpperCase() + pokemonFilter.substr(1);
    }

    if(listPokemon !== undefined){
      allFiltred = listPokemon?.pokemon.filter((pokemon) => pokemon.type.includes(pokemonFilterName));
    }
  } else if(listPokemon !== undefined){
      allFiltred = listPokemon?.pokemon
    }

  const searchFilter: PokemonObject[] = allFiltred.filter((pokemon) => pokemon.name.toLowerCase().indexOf(
    searchValue.toLowerCase(),
  ) !== -1);

  return (
    <MainComponent className="containerCenter">
      <Nav className="containerCenter">
        <div className="input">
          <input
            type="text"
            placeholder="Search a Pokemon"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <img src={Search} alt="pesquisar" />
        </div>

        <div className="filter containerCenter">
          <h3 className="containerCenter">
            <img src={Pokebola} alt="pokeball" />
            Filter by type
          </h3>

          <div className="types containerCenter">
            {JSONTYPES.types.map((types: string, id: number) => (
              <button
                key={id.toString()}
                className={`typeBox containerCenter ${types.toLowerCase()}`}
                type="button"
                onClick={() => toggleFilterFunction(types)}
              >
                <p key={id.toString()} className={`${types.toLowerCase()}`}>
                  {types.toLocaleUpperCase()}
                </p>
              </button>
            ))}
          </div>
        </div>
      </Nav>

      <Article>
        {searchFilter.map((pokemon) => (
          <div className={`pokemonCard containerCenter ${pokemon.type[0].toLowerCase()}`} key={pokemon.id}>
            <img src={pokemon.img} alt={pokemon.name} />
            <p className="pokemonName">{pokemon.name}</p>
            <div className="status containerCenter">
              {
                pokemon.type.length < 2 ? (
                  <p>
                    Type:
                    {' '}
                    {pokemon.type[0]}
                  </p>
                  )
                  : (
                    <p>
                      Type:
                      {' '}
                      {pokemon.type[0]}
                      ,
                      {' '}
                      {pokemon.type[1]}
                    </p>
                  )
                }
              <p>
                Height:
                {' '}
                {pokemon.height}
              </p>
              <p>
                Weight:
                {' '}
                {pokemon.weight}
              </p>
            </div>
          </div>
          ))}
      </Article>
    </MainComponent>
  );
};

export default Main;
