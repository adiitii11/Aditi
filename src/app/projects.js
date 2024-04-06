import Image from "next/image";

export default function Projects() {
  return (
    <div
      id="projects"
      className="banner"
      style={{
        minHeight: "calc(100vh)",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: 53,
        paddingBottom: 53,
      }}
    >
      <center
        style={{
          width: "100%",
          minHeight: "calc(100vh)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ fontWeight: "bold", fontSize: 35, marginBottom: 53 }}>
          Projects
        </h1>
        <div
          className="project-grid"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            className="project-card"
            style={{
              borderRadius: 20,
              border: "1px solid #5a2d24",
              padding: 20,
              maxWidth: 350,
              margin: 10,
            }}
          >
            <img src="logo.webp" style={{ height: 200 }}></img>
            <h1 style={{ fontWeight: "bold", marginBottom: 10, marginTop: 20 }}>
              Nalum
            </h1>
            <p>
              The official alumni portal of Netaji Subhash University of
              Technology.
            </p>
          </div>
          <div
            className="project-card"
            style={{
              borderRadius: 20,
              border: "1px solid #5a2d24",
              padding: 20,
              maxWidth: 350,
              margin: 10,
            }}
          >
            <img src="sniffdog.png" style={{ height: 200 }}></img>
            <h1 style={{ fontWeight: "bold", marginBottom: 10, marginTop: 20 }}>
              SniffDog
            </h1>
            <p>
              Prototype combines CrowdTangle, TweetDeck, Google Reverse Search,
              Deep Fake AI, and NLP for fake news detection.
            </p>
          </div>
        </div>
      </center>
    </div>
  );
}
