const Nav = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-md py-md-3 bg-light shadow-sm ">
      <div className="container ">
        <a className="navbar-brand" href="index.html">
          E-Magang
        </a>

        <div className="collapse navbar-collapse " id="navbarNavDropdown">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="index.html"
              >
                Beranda
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="galeri.html">
                Galeri
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="kontak.html">
                Kontak
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
