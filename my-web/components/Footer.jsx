const Footer = () => {
  return (
    <footer
      className="text-white pt-5 pb-4"
      style={{ backgroundColor: "#093E62", width: "100%" }}
    >
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-light">
              SMA BINA BANGSA
            </h5>
            <p>
              Menjadi yang terdepan dalam Pendidikan dengan menerapkan kurikulum
              Internasional
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-light">
              MENU
            </h5>
            <p>
              <a
                href="index.html"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                {" "}
                Beranda
              </a>
            </p>
            <p>
              <a
                href="profil-pimpinan.html"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                {" "}
                Profil
              </a>
            </p>
            <p>
              <a
                href="galeri.html"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                {" "}
                Galeri
              </a>
            </p>
            <p>
              <a
                href="kontak.html"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                {" "}
                Kontak
              </a>
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-light">
              links
            </h5>
            <p>
              <a
                href="https://www.instagram.com/fikiandriyan_13/"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                fikiandriyanreal@gmail.com
              </a>
            </p>
            <p>
              <a
                href="kurikulum.html"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Kurikulum
              </a>
            </p>
            <p>
              <a
                href="pilihan-jurusan.html"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Pilihan Jurusan
              </a>
            </p>
            <p>
              <a
                href="visi-misi.html"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Visi Misi
              </a>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-light">
              Kontak Kami
            </h5>
            <p>
              <i className="fas fa-home mr-3" />
              Jawa Timur,Indonesia
            </p>
            <p>
              <i className="fas fa-envelope mr-3" />
              smabinabangsa@gmail.com
            </p>
            <p>
              <i className="fas fa-phone mr-3" />
              +00 05676 6699
            </p>
            <p>
              <i className="fas fa-print mr-3" />
              +01 335 633 77
            </p>
          </div>
        </div>
        <hr className="mb-4" />
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>
              Copyright ©2020 All rights reserved by:
              <a
                href="https://www.instagram.com/fikiandriyan_13/"
                style={{ textDecoration: "none" }}
              >
                <strong className="text-light">SMA BINA BANGSA</strong>
              </a>
            </p>
          </div>
          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a
                    href="https://fikiandriyan13.blogspot.com/"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: 23 }}
                  >
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://fikiandriyan13.blogspot.com/"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: 23 }}
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://fikiandriyan13.blogspot.com/"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: 23 }}
                  >
                    <i className="fab fa-google-plus" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://fikiandriyan13.blogspot.com/"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: 23 }}
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://fikiandriyan13.blogspot.com/"
                    className="btn-floating btn-sm text-white"
                    style={{ fontSize: 23 }}
                  >
                    <i className="fab fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
