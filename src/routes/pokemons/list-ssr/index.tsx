import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return <div>Pokemons! - SSR</div>
});

export const head: DocumentHead = {
  title: 'SSR - list',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description'
    },
  ],
};