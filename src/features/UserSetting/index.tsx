
import { memo } from 'react';
import UserInfo from './UserInfo';
import UserMember from './UserMember';
import { Provider, createStore } from './store';

const UserSetting = memo(() => {
  return (
    <Provider createStore={createStore}>
    <UserInfo />
    <UserMember />
  </Provider>
  );
});

export default UserSetting;

