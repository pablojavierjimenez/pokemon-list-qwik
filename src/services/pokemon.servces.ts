import { IPokemonListResponse, SmallPokemon } from "~/interfaces";

/**
 *
 */
export const getPokemonList = async (offset: number = 0, limit: number = 10) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const data = (await res.json()) as IPokemonListResponse;

  return _createResponse(data.results);
};



function _createResponse(dataList: any[]): SmallPokemon[] {
    let acumulator: SmallPokemon[] = [];
    dataList.map( item => {
        acumulator.push({
            id: Number(item.url.split('/')[6]),
            name: item.name,
            imageUrl: item.url
        })
    })
    console.log(acumulator);
    return acumulator;
} 