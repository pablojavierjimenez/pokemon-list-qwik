import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { PokemonImg } from '~/components/pokemon-img/pokemon-img';

export default component$(() => {
  const loc = useLocation();


  return <div class="text-5xl flex items-center justify-center" >
       <PokemonImg id={ parseInt(loc.params.id)} size={250} />
    </div>
});