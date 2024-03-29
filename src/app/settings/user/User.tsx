import isEqual from 'fast-deep-equal';
import { memo } from 'react';

import { INBOX_SESSION_ID } from '@/const/session';
import UserSetting from '@/features/UserSetting';
import { useGlobalStore } from '@/store/global';
import { settingsSelectors } from '@/store/global/selectors';

const User = memo(() => {
  const config = useGlobalStore(settingsSelectors.defaultAgentConfig, isEqual);
  const meta = useGlobalStore(settingsSelectors.defaultAgentMeta, isEqual);
  const [updateAgent] = useGlobalStore((s) => [s.updateDefaultAgent]);

  return (
    <UserSetting
      config={config}
      id={INBOX_SESSION_ID}
      meta={meta}
      onConfigChange={(config) => {
        updateAgent({ config });
      }}
      onMetaChange={(meta) => {
        updateAgent({ meta });
      }}
    />
  );
});

export default User;
