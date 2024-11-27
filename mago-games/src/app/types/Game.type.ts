export interface Game {
    id: number,
    url: string,
    name: string,
    price: number,
    discount: number,
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