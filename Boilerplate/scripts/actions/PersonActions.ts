import { Person } from '../models/Person';

export function getPersons(persons: any) {
    return {
        type: "GET_PERSONS",
        persons
    };
}