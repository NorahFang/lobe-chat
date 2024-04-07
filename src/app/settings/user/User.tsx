import { memo } from 'react';

import UserSetting from '@/features/UserSetting';
import { useGlobalStore } from '@/store/global';
import { settingsSelectors } from '@/store/global/selectors';

const User = memo(() => {
 // const config = useGlobalStore(settingsSelectors.UserConfig);
 // const [updateUser] = useGlobalStore((s) => [s.updateUser]);

  return (
    <UserSetting
      //config={config}
      //onConfigChange={(config) => {
      //  updateUser({ config });
      //}}
    />
  );
});

export default User;
