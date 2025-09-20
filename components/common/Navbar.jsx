/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import { useEffect } from 'react';

function Navbar({ data }) {
  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if (bodyScroll > 300) navbar.classList.add('nav-scroll');
    else navbar.classList.remove('nav-scroll');
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget
      .querySelector('.dropdown-menu')
      .classList.remove('show');
  }
  function handleToggleNav() {
    if (
      document
        .querySelector('.navbar .navbar-collapse')
        .classList.contains('show')
    ) {
      document
        .querySelector('.navbar .navbar-collapse')
        .classList.remove('show');
    } else if (
      !document
        .querySelector('.navbar .navbar-collapse')
        .classList.contains('show')
    ) {
      document.querySelector('.navbar .navbar-collapse').classList.add('show');
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bord blur">
      <div className="container o-hidden">
        <Link className="logo icon-img-100" href="/">
          <img src={data?.logo?.url} alt="logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggleNav}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">

            {data.navItems?.map((item) => (
              <li className="nav-item" key={item.id}>
                <Link className="nav-link" href={item.url}>
                  <span className="rolling-text">{item.title}</span>
                </Link>
              </li>
            ))}

          </ul>
        </div>

        <div className="contact-button">
          <Link
            target="_blank"
            href={data?.button?.url}
            className="butn butn-sm butn-bg main-colorbg radius-5"
          >
            <span className="text">{data?.button?.title}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
