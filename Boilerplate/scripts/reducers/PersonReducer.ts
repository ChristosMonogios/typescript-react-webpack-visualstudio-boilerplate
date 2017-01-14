import { Person } from '../models/Person';

export default function personReducer(state: Person = {}, action: any) {
    switch (action.type) { // Do not forget to check the type property of the action object
        case "GET_PERSONS":
            return Object.assign({}, state, { persons: action.persons });
    }

    return state;
}