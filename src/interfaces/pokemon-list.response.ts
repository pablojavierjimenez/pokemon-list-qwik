// Generated by https://quicktype.io

export interface IPokemonListResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  BasicPokemonInfo[];
}

export interface BasicPokemonInfo {
    name: string;
    url:  string;
}
