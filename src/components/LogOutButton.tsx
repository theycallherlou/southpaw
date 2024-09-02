import { useMsal } from '@azure/msal-react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

type TLogoutType = 'popup' | 'redirect';

export default function LogOutButton() {
  const { instance } = useMsal();

  const handleLogout = async (logoutType: TLogoutType) => {
    try {
      if (logoutType === 'popup') {
        await instance.logoutPopup({
          postLogoutRedirectUri: '/',
          mainWindowRedirectUri: '/',
        });
      } else if (logoutType === 'redirect') {
        await instance.logoutRedirect({
          postLogoutRedirectUri: '/',
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogoutClick = (logoutType: 'popup' | 'redirect') => {
    handleLogout(logoutType).catch(error => console.error(error));
  };

  return (
    <DropdownButton
      variant='secondary'
      className='ml-auto'
      drop='start'
      title='Sign Out'
    >
      <Dropdown.Item as='button' onClick={() => handleLogoutClick('popup')}>
        Sign out using Popup
      </Dropdown.Item>
      <Dropdown.Item as='button' onClick={() => handleLogoutClick('redirect')}>
        Sign out using Redirect
      </Dropdown.Item>
    </DropdownButton>
  );
}
