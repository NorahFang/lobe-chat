import { produce } from 'immer';

import { GlobalUserConfig } from '@/types/settings/user';
import { merge } from '@/utils/merge';

export type ConfigDispatch =
  | { config: Partial<any>; type: 'update' }
export const configReducer = (state: GlobalUserConfig, payload: ConfigDispatch): GlobalUserConfig => {
  switch (payload.type) {
    case 'update': {
      return produce(state, (draftState) => {
        return merge(draftState, payload.config);
      });
    }
    default: {
      return state;
    }
  }
};
