import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import Footer from '~/components/shared/footer/footer';
import Navbar from '~/components/shared/navbar/navbar';

import styles from './styles.css?inline';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <Navbar />
      <main  class="flex flex-col items-center justify-center">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
