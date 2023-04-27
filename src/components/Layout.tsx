import { ReactElement } from "react";
import Navbar from "./Navbar";

const Layout = (children: ReactElement) => {
  return (
    <>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </>
  );
};

export default Layout;
