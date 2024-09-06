'use client'

import {create} from 'zustand';

interface GlobalState {
    count: number;

    setCount: (value: number) => void;
}

const useStore = create<GlobalState>((set)=> ({
    count: 0,

    setCount: (value: number) => set((state)=> ({count: value})),
}))

export default useStore;