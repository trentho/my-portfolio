import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        nav {
          width: 100%;
          background-color: #333;
          padding: 1rem;
        }

        ul {
          display: flex;
          list-style: none;
          justify-content: space-around;
        }

        a {
          color: #fff;
          text-decoration: none;
        }

        a:hover {
          color: #ccc;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
