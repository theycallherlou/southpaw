import { useMsal } from '@azure/msal-react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { loginRequest } from '../auth';

type TLoginType = 'popup' | 'redirect';

export default function SignInButton() {
  const { instance } = useMsal();

  const handleLogin = async (loginType: TLoginType) => {
    try {
      if (loginType === 'popup') {
        await instance.loginPopup(loginRequest);
      } else if (loginType === 'redirect') {
        await instance.loginRedirect(loginRequest);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleLoginClick = (loginType: TLoginType) => {
    handleLogin(loginType).catch(error => console.error(error));
  };

  return (
    <DropdownButton
      variant='secondary'
      className='ml-auto'
      drop='start'
      title='Sign In'
    >
      <Dropdown.Item as='button' onClick={() => handleLoginClick('popup')}>
        Sign in using Popup
      </Dropdown.Item>
      <Dropdown.Item as='button' onClick={() => handleLoginClick('redirect')}>
        Sign in using Redirect
      </Dropdown.Item>
    </DropdownButton>
  );
}
