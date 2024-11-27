export interface Game {
    id?: number,
    url: string,
    name: string,
    price: string,
    discount: string,
    featured: boolean
    embed: string;
    publisher: string;
    developer: string;
    release_date: string;
    categories: string[];
    game_mode: string[]
    rating: string;
    description: string;
}