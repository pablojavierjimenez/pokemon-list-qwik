import { $, component$, useSignal } from '@builder.io/qwik';
import { DocumentHead, Link, useNavigate } from '@builder.io/qwik-city';
import { PokemonImg } from '~/components/pokemon-img/pokemon-img';

export default component$(() => {

  const pokemonId = useSignal(1);
  const brighnessAmount = useSignal(true);
  const flipPokemon = useSignal(false);
  const nav = useNavigate();

  /**
   * aqui esto: $(....) envolviendo la funcio
   * se hace para poder serializar la funcion 
   * y asi poder operar con las señales
   * (investigar luego sobre QRL y el lexical scope)
   */
  const changePockemonId = $((value: number) => {
    if ((pokemonId.value + value) <= 0) return;
    pokemonId.value += value;
  })
 
  const revelePokemon = $(() => {
    brighnessAmount.value = !brighnessAmount.value;
  })
  const turnArround = $(() => {
    flipPokemon.value = !flipPokemon.value;
  })

  const goToPokemonInfo = $(() => {
    nav(`/pokemon/${pokemonId.value}`)
  } )

  return (
    <>
      <Link class="hover:bg-slate-500 transition-all ease-linear duration-100s rounded-full" href={`/pokemon/${pokemonId.value}/`}>
        <PokemonImg id={pokemonId.value} size={250} bright={brighnessAmount.value} backImage={flipPokemon.value}/> 
      </Link>
      <span class="hover:bg-slate-100 hover:text-black text-4xl" onClick$={ () => goToPokemonInfo()}>
        Adivina el Pokemon
      </span>
      <div>
        <button class="btn btn-primary"
          onClick$={() => changePockemonId(-1)}>Anterior</button>
        <button class="btn btn-primary"
          onClick$={() => changePockemonId(+1)}>Siguiente</button>
      </div>
      <div>
        <button class="btn btn-primary" onClick$={() => revelePokemon()}>
          {(brighnessAmount.value) ?  'Revelar' : 'Ocultar'}
        </button>
        <button class="btn btn-primary" onClick$={() => turnArround()}>Voltear</button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
