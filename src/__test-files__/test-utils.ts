import { combineReducers, configureStore, Store } from '@reduxjs/toolkit';
import { getAtomMiddleware } from '../atomic-redux-state/atom-middleware';
import atomsReducer, { AtomicStoreState } from '../atomic-redux-state/atom-slice';

type MockState = {
    key: string,
    value: any,
    loading?: boolean
}

export function createTestStore(): Store<AtomicStoreState> {
    return configureStore({
        reducer: combineReducers({
            atoms: atomsReducer
        }),
        middleware: [getAtomMiddleware()]
    });
}

export function createMockState(...atomStates: MockState[]): AtomicStoreState {
    const state: AtomicStoreState = {
        atoms: {
            states: {}
        }
    };

    for (const atomState of atomStates) {
        state.atoms.states[atomState.key] = {
            value: atomState.value,
            loading: atomState.loading ?? false
        };
    }

    return state;
}
