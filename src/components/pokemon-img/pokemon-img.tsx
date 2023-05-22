import { component$, useSignal, useTask$ } from '@builder.io/qwik';


interface PokeImage {
    id: number;
    size?: number;
    bright?: boolean;
    backImage?: boolean;
}

export const PokemonImg = component$((props: PokeImage) => {

    const { id, size = 30, bright=false, backImage=false } = props;

    const imageLoaded = useSignal(false);

    useTask$( ({track}) => {
        track( () => id);
        imageLoaded.value = false;
    })
    

    return (
        <div class="flex items-center justify-center" style={`width: 225px; height: 216px;`}>
            { !imageLoaded.value && (<span>Cargando...</span>)}

            <img
                class={{ 
                    'hidden': !imageLoaded.value,
                    'brightness-0': bright,
                    'transition duration-700 ease-in': !bright,
                    'transition duration-700 ease-out': bright
                }}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${(backImage) ? 'back/' : ''}${id}.png`}
                alt="pokemon spryte"
                height={size}
                width={size}
                onLoad$={() => {
                    setTimeout( () => imageLoaded.value = true, 300)
                 }}
            />
        </div>
    )
});