import Navbar from 'react-bootstrap/Navbar';
import { useIsAuthenticated } from '@azure/msal-react';
import LogInButton from './LogInButton';
import LogOutButton from './LogOutButton';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const authenticated = useIsAuthenticated();

  return (
    <header className="container-md">
      <Navbar bg="primary" className="navbarStyle">
        <a className="navbar-brand" href="/">
          Microsoft Identity Platform
        </a>
        <nav className="navbar-collapse collapse justify-content-end">
          {authenticated ? <LogOutButton /> : <LogInButton />}
        </nav>
      </Navbar>
      <div className="text-center my-4">
        <h3>
          Welcome to the Microsoft Authentication Library For JavaScript - React SPA Tutorial
        </h3>
      </div>
      {children}
    </header>
  );
};
