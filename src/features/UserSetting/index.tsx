import { memo } from 'react';

import AgentMeta from './AgentMeta';
import StoreUpdater, { StoreUpdaterProps } from './StoreUpdater';
import { Provider, createStore } from './store';

type USerSettingsProps = StoreUpdaterProps;

const UserSetting = memo<USerSettingsProps>((props) => {
  return (
    <Provider createStore={createStore}>
      <StoreUpdater {...props} />
      <AgentMeta />
    </Provider>
  );
});

export default UserSetting;
