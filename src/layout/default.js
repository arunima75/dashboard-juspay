import Navigation from '../components/Navigation/Navigation';

function Layout({ children }) {
  return (
    <Navigation>
      {children}
    </Navigation>
  );
}

export default Layout;
