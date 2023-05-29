import { component$ } from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
import { isStringObject } from "util/types";
import { PokemonImg } from "~/components/pokemon-img/pokemon-img";

/**
 * lo que va en el siguiente codigo se ve en este video
 * https://www.youtube.com/watch?v=K3UeOkNP8Js&list=PLCKuOXG0bPi1dREwTThC02BTeOnnQ6Hib&index=27&pp=iAQB
 * @documentation https://qwik.builder.io/docs/route-loader/#routeloader
 */
const usePokemonId = routeLoader$<number>(({ params, redirect }) => {
  const id = Number(params.id);

  if(isNaN(id)) redirect(301, '/')
  if(id >= 800) redirect(301, '/')
  if(id <= 0) redirect(301, '/')
  
  //// esta fue mi version de validacion
  // if (typeof id !== "string" && id <= 800 && id > 1) {
  //   return id;
  // } else {
  //   return 0;
  // }
  
  return id;


});

export default component$(() => {
  // const location = useLocation();

  const pokemonId = usePokemonId(); // esto como retorna una signal tambien hay que usarlo con el .value

  console.log("PK: ", pokemonId.value);

  return (
    <>
      <div class="text-5xl flex items-center justify-center">
        {/* <PokemonImg id={ parseInt(location.params.id)} size={250} /> */}
        {pokemonId.value === 0 ? (
          <div>
            <img src="https://i.imgflip.com/7mq6u7.jpg" width={300} />
          </div>
        ) : (
          <PokemonImg id={pokemonId.value} size={250} />
        )}
      </div>
    </>
  );
});
