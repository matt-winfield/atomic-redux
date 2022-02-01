import { WritableAtomState } from "./atom-state";

export type AtomInitialiser<T> = {
    key: string;
    default: T;
}

export function atom<T>(initialiser: AtomInitialiser<T>): WritableAtomState<T> {
    return {
        key: initialiser.key,
        defaultOrGetter: initialiser.default,
        set: (value, args, updateReduxState) => {
            updateReduxState(value);
        }
    }
}
