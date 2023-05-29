import { component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { SmallPokemon } from "~/interfaces";
import styles from "./styles.css?inline";


interface PokemonPageState {
  currentPage: number;
  pokemons: SmallPokemon[];
}




export default component$(() => {
  useStylesScoped$(styles);

  /**
   * Use Store tambien funciona como un tipo de señal, pero la diferencia radica 
   * en que useSignal se debe utilizar en caso de primitivos,
   * @example let isHumane = useSigna(true);
   * y useStore se deberia utilizar para arreglos y tipos personalizados
   * @example let humanList = useStore<humanType[]>(humansData)
   */
  const pokemonState = useStore<PokemonPageState>({
    currentPage: 0,
    pokemons: []
  })






  return (
    <>
      <div class="p-5 min-w-full">
        <div class="my-5 text-5xl">Status</div>
        <div>Pagina actual: {pokemonState.currentPage} </div>

        <div class="m-10">
          <button onClick$={ () => pokemonState.currentPage--} class="btn btn-primary mr-2">Anterior</button>
          <button onClick$={ () => pokemonState.currentPage++} class="btn btn-primary mr-2">Siguiente</button>
        </div>

        {/* {location.isNavigating && (
          <div class="mt-5 text-lg">Cargando Lista....</div>
        )} */}

        {/* {!location.isNavigating && (
          <div class="mt-5 grid grid-cols-5">
            {pokemons.value.map(({ id, name, imageUrl }: SmallPokemon) => (
              <div
                key={name}
                class="m-5 flex flex-col justify-center items-center bg-blue-900 border-2 border-cyan-300 rounded-lg"
              >
                <PokemonImg id={id} size={200} bright={false} />
                <span class="capitalize p-5">{name}</span>
              </div>
            ))}
          </div>
        )} */}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Client List",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
