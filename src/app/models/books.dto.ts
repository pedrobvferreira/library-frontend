import { RentalsDTO } from './rentals.dto';

export interface BooksDTO {
    id: number;
    title: string;
    category: string;
    quantity: number;
    available: boolean;
    rentals: RentalsDTO[];
}
  