import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <header>
      <h2>
        <span>{"< "}</span>
        TYPED
        <span>{" >"}</span>
      </h2>
      <style jsx>{`
        header {
          background: #000;
          color: #fff;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        span {
          color: #f17;
          font-size: 30px;
        }
      `}</style>
    </header>
  );
};

export default Header;
