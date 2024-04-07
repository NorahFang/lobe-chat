import { produce } from 'immer';

import { USER_META } from '@/const/meta';
import { UserMetaData } from '@/types/meta';
import { merge } from '@/utils/merge';

export type MetaDataDispatch = { type: 'update'; value: Partial<UserMetaData> } | { type: 'reset' };

export const metaDataReducer = (state: UserMetaData, payload: MetaDataDispatch): UserMetaData => {
  switch (payload.type) {
    case 'update': {
      return produce(state, (draftState) => {
        return merge(draftState, payload.value);
      });
    }

    case 'reset': {
      return USER_META;
    }
  }
};
