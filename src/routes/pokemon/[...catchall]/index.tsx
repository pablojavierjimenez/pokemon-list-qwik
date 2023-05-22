import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
    const loc = useLocation()

    const [id,name]= loc.params.catchall.split('/');

console.log(id,name);


  return <div class="text-5xl flex items-center justify-center" >
    <img class="bg-slate-300 max-w-xl" 
    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
    <div>Nombre: {name}</div>
    </div>
});