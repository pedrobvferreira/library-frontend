import { RentalsDTO } from './rentals.dto';

export interface UsersDTO {
    id: number;
    name: string;
    email: string;
    profile: string;
    active: boolean;
    createdDate: string;
    rentals: RentalsDTO[];
}