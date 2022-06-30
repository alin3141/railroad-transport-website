import React, { FC } from "react";

export interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
}

const Layout: FC<LayoutProps> = (props) => {
  return (
    <>
      <>layout</>
      {props.children}
    </>
  );
};

export default Layout;
