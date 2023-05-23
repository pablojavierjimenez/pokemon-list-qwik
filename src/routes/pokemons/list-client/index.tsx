import { component$, useStyles$, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  return <div>
    Pokemons! - List Client <span>esto si se deja ver</span>
  </div>
});

export const head: DocumentHead = {
  title: 'Client List',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};