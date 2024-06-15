import AboutBanner from "../../components/AboutBanner";
import MainBanner from "../../components/MainBanner";
import ProjectBanner from "../../components/ProjectBanner";
import PortfolioBanner from "../../components/portfolio";

export default function Home() {
  return (
    <main>
      <center>
        <div style={{ position: "relative" }}>
          <section>
            <MainBanner />
          </section>
          <div
            className="custom-shape-divider-top-1716851501"
            style={{ margin: 0 }}
          >
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#ff91a4",
            position: "relative",
            margin: 0,
          }}
        >
          <section>
            <AboutBanner></AboutBanner>
          </section>
          <div
            className="custom-shape-divider-top-1716851501"
            style={{ margin: 0 }}
          >
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="shape-fill"
                style={{ fill: "white" }}
              ></path>
            </svg>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "white",
            position: "relative",
            margin: 0,
          }}
        >
          <section>
            <ProjectBanner></ProjectBanner>
          </section>
        </div>
        <div
          style={{
            backgroundColor: "#ff91a4",
            position: "relative",
            margin: 0,
          }}
        >
          <section>
            <PortfolioBanner></PortfolioBanner>
          </section>
        </div>
      </center>
    </main>
  );
}
