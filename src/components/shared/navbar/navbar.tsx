import { component$ } from '@builder.io/qwik';
import { QwikLogo } from '../../icons/qwik';

/**
 * para poder importar estilos 
 * siempre hay que agregarle el .module a los archivos .css
 * sino no los comprenden porque es una sintaxis especial
*/
import styles from './navbar.module.css';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={['container', styles.wrapper]}>
        <div class={styles.logo}>
          <Link prefetch={true} href="/" title="qwik">
            <QwikLogo height={50} width={143} />
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/pokemons/list-client/">Client - List</Link>
          </li>
          <li>
            <Link href="/pokemons/list-ssr/">SSR - List</Link>
          </li>
        </ul>
      </div>
    </header>
  );
});
