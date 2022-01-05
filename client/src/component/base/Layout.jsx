import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  background: #fff;
  height: 100vh;
`;

export default function Layout() {
  return (
    <LayoutContainer>
      {/* <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/nothing-here'>Nothing Here</Link>
          </li>
        </ul>
      </nav> */}

      {/* <hr /> */}

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </LayoutContainer>
  );
}
