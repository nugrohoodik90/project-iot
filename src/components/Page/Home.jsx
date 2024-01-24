import React from 'react'


function Home() {
  return (
    <div className="container">
      <div className="justify-content-center">
      </div>
      <div id="carouselExampleCaptions" className="carousel slide my-3" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* <img src={carousel} className="d-block w-100" alt="carousel" /> */}
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            {/* <img src={carousel_2} className="d-block w-100" alt="carousel_1" /> */}
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </button>
      </div>
      <hr />
      <h5 className="font-weight-bold">Kategori Product</h5>
      <hr />
      <div className="my-2">
        <div className="row justify-content-center">
          <div className="d-flex justify-content-around flex-wrap m-1">
            <div className="card mx-auto" style={{ width: "10.5rem" }}>
              <img src="https://iili.io/hMTpjI.md.jpg" className="card-img-top " alt="" />
              <div className="card-body p-1">
                <p className="m-0 ">Hijab</p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-around flex-wrap m-1">
            <div className="card mx-auto" style={{ width: "10.5rem" }}>
              <img src="https://iili.io/hMTyQt.md.jpg" className="card-img-top " alt="" />
              <div className="card-body p-1">
                <p className="m-0 ">Aksesoris</p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-around flex-wrap m-1">
            <div className="card mx-auto" style={{ width: "10.5rem" }}>
              <img src="https://iili.io/hMuHCX.md.jpg" className="card-img-top " alt="" />
              <div className="card-body p-1">
                <p className="m-0 ">Atasan</p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-around flex-wrap m-1">
            <div className="card mx-auto" style={{ width: "10.5rem" }}>
              <img src="https://iili.io/hMu33G.md.jpg" className="card-img-top " alt="" />
              <div className="card-body p-1">
                <p className="m-0 ">Bawahan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      Pagination product
    </div>
  )
}

export default Home
