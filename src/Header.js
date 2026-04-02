import React from 'react'

export default function Header() {
  return (
    <>
      <style>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
        }

        .nav-link {
          margin: 0 1rem;
          text-decoration: none;
          color: black;
          font-weight: 600;
          letter-spacing: 1px;
          position: relative;
          transition: 0.3s;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0%;
          transition: 0.3s;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link:hover {
          opacity: 0.7;
        }

      `}</style>

      <header className="header">
        
        <a href="/" className="logo">
          <img src="/logo-cygne.png" alt="logo" style={{ height: '20px' }} />
        </a>

        <nav>
          <a href="#" className="nav-link">PRODUCTS</a>
          <a href="#" className="nav-link">OUR LAB</a>
          <a href="#" className="nav-link">CONTACT</a>
        </nav>

        <a href="/" className="cart">
          <img src="/shopping-bag.png" alt="cart" style={{ height: '25px' }} />
        </a>

      </header>
    </>
  )
}