import { StateCreator } from 'zustand/vanilla';
import { GlobalUserConfig } from '@/types/settings/user';
import { State, initialState } from './initialState';
import { ConfigDispatch, configReducer } from './reducers/config';

/**
 * 设置操作
 */
export interface Action {
  dispatchConfig: (payload: ConfigDispatch) => void;
  setUserConfig: (config: Partial<GlobalUserConfig>) => void;

}

export type Store = Action & State;
export const store: StateCreator<Store, [['zustand/devtools', never]]> = (set, get) => ({
  ...initialState,
  dispatchConfig: (payload) => {
    const nextConfig = configReducer(get().config, payload);

    set({ config: nextConfig }, false, payload);

    get().onConfigChange?.(nextConfig);
  },
  setUserConfig: (config) => {
    get().dispatchConfig({ config, type: 'update' });
  },
});