import Image from "next/image";
const Jumbotron = () => {
  return (
    <div className="mt-5 mb-5">
      <div className=" text-center fw-bold fs-1">
        TEMPAT PENGEMBANGAN KARIER <br />
        TERBAIK UNTUKMU
      </div>
      <br />
      <p className="text-center fs-5">
        SMA Bina Bangsa merupakan SMA unggulan di Kota Banyuwangi, Jawa Timur
        yang menghasilkan sumber daya manusia yang berkualitas, berintegritas
        dan berdaya saing tinggi
      </p>
      <div className="container-xl py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-3 " style={{ backgroundColor: "#DFF6FF" }}>
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i
                    className="bi bi-mortarboard-fill"
                    style={{ fontSize: "5rem" }}
                  />
                  <div className="mask flex-center rgba-red-strong"></div>

                  <h5 className="mb-3">Skilled Instructors</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3 " style={{ backgroundColor: "#DFF6FF" }}>
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="bi bi-globe" style={{ fontSize: "5rem" }} />

                  <h5 className="mb-3">Online Classes</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3 " style={{ backgroundColor: "#DFF6FF" }}>
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i
                    className="bi bi-house-door-fill"
                    style={{ fontSize: "5rem" }}
                  />

                  <h5 className="mb-3">Home Projects</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3 " style={{ backgroundColor: "#DFF6FF" }}>
              <div className="service-item text-center pt-3">
                <div className="p-4">
                  <i className="bi bi-book-fill" style={{ fontSize: "5rem" }} />

                  <h5 className="mb-3">Book Library</h5>
                  <p>
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <Image src="/kategori-1.jpg" width={500} height={300} />

                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <Image src="/kategori-2.jpg" width={500} height={300} />
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <Image src="/kategori-3.jpg" width={500} height={300} />
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
