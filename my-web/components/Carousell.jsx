const Carousell = () => {
  return (
    // Hero Section
    <div
      className="container-xxl "
      style={{ backgroundColor: "#38E54D", height: "200px" }}
    >
      <h2 className="text-center p-5 pb-3 fs-4 ">
        Jelajahi 5000+ pekerjaan baru setiap bulan!
      </h2>
      <div>
        <form className="d-flex mx-auto w-75  " role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-primary" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Carousell;
