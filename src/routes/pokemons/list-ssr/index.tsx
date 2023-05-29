import { component$, useComputed$ } from "@builder.io/qwik";
import {
  DocumentHead,
  Link,
  routeLoader$,
  useLocation,
} from "@builder.io/qwik-city";
import { PokemonImg } from "~/components/pokemon-img/pokemon-img";
import { SmallPokemon } from "~/interfaces";
import { getPokemonList } from "~/services/pokemon.servces";

/**
 * UsePokemonList
 */
const usePokemonList = routeLoader$(async ({ query, redirect, pathname }) => {
  const offset = Number(query.get("offset") || 0);
  if (offset < 0) redirect(302, `${pathname}?offset=10`);
  return getPokemonList(offset, 20);
});


export default component$(() => {
  const pokemons = usePokemonList();
  const location = useLocation();

  const currentOffset = useComputed$(() => {
    const offsetString = new URLSearchParams(location.url.search);
    return Number(offsetString.get("offset") || 0);
  });

  console.log(location.url.searchParams.get("offset"));


  return (
    <>
      <div class="p-5 min-w-full">
        <div class="my-5 text-5xl">Status</div>
        <div>Current Offset: {currentOffset}</div>

        <div class="m-10">
          <Link
            href={`/pokemons/list-ssr/?offset=${currentOffset.value - 24}`}
            class="btn btn-primary mr-2"
          >
            Anterior
          </Link>
          <Link
            href={`/pokemons/list-ssr/?offset=${currentOffset.value + 24}`}
            class="btn btn-primary mr-2"
          >
            Siguiente
          </Link>
        </div>

        {location.isNavigating && (
          <div class="mt-5 text-lg">Cargando Lista....</div>
        )}

        {!location.isNavigating && (
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
        )}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "SSR - list",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
