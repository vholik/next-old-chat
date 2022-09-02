import styled from "styled-components";
import { useContext } from "react";
import { Context } from "../pages/_app";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import Router from "next/router";

const Header = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <HeaderStyle>
      <div className="container">
        <div className="header-inner">
          <div className="logo">Messenger</div>
          {user ? (
            <div className="links">
              <Link href={"/"}>
                <div className="header-inner__link">Messages</div>
              </Link>
              <div
                className="header-inner__link"
                onClick={() => auth.signOut()}
              >
                Log out
              </div>
            </div>
          ) : (
            <div className="links">
              <Link href={"/login"}>
                <div className="header-inner__link">Login</div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  padding: 35px 0;
  background-color: var(--black);
  color: var(--white);
  .header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      font-size: 28px;
      font-weight: 500;
    }
    .links {
      display: flex;
      align-items: center;
      gap: 35px;
      font-size: 16px;
    }
    &__link {
      cursor: pointer;
    }
    &__link:nth-child(2) {
      opacity: 0.6;
    }
  }
`;

export default Header;
