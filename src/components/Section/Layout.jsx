import { Suspense } from 'react';
import UserMenu from 'components/UserMenu/UserMenu';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <UserMenu />
      <Suspense fallback={null}>
        <div className={css.layoutContainer}>
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};

export default Layout;
