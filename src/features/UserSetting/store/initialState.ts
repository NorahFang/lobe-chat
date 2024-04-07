
import { USER_CONFIG } from '@/const/settings';
import { GlobalUserConfig } from '@/types/settings/user';
export interface State {
  config: GlobalUserConfig;

  onConfigChange?: (config: GlobalUserConfig) => void;
}
export const initialState: State = {
  config: USER_CONFIG,
};




// import { USER_CONFIG } from '@/const/settings';
// import { UserMetaData} from '@/types/meta';
// import { GlobalUserConfig } from '@/types/settings/user';

// export interface State {
//   meta: UserMetaData;
//   config: GlobalUserConfig;

//   onConfigChange?: () => void;
// }
// export type SessionUserState = Record<Partial, boolean>;

// export const State = {
//   config: USER_CONFIG
// };
