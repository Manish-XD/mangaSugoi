import Head from "next/head";
import styles from "../styles/Home.module.css";
import Script from "next/script";

export default function Home() {
  return (
    <div id="home" className={styles.container}>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></Script>
      <Head>
        <title>Manga Sugoi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        />
      </Head>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" style={{height: "50vh"}}>
            <img
              src="https://images6.alphacoders.com/451/451608.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item active" style={{height: "50vh"}}>
            <img
              src="https://images6.alphacoders.com/606/606263.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" style={{height: "50vh"}}>
            <img
              src="https://images.alphacoders.com/104/104911.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" style={{height: "50vh"}}>
            <img
              src="https://images7.alphacoders.com/105/1054068.png" style={{height: "50vh", objectFit: "cover"}}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className={styles.latest}>
        <h1>Latest Collections</h1>
        <hr/>

      </div>
    </div>
  );
}
