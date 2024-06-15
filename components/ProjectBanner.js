export default function ProjectBanner() {
  return (
    <div
      id="projects"
      className="banner"
      style={{
        backgroundColor: "white",
        paddingTop: 100,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 200px)",
        display: "flex",
        alignItems: "center",
        paddingBottom: 80,
        justifyContent: "center",
      }}
    >
      <div
        style={{
          flex: 1,
          height: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontSize: 50,
            margin: 0,
            lineHeight: 1,
            fontWeight: 700,
            marginBottom: 60,
          }}
        >
          My Wonderful Projects
        </h1>

        <div
          className="cp-550"
          style={{
            marginTodiv: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="project-card" style={{ backgroundColor: "#E2FFD6" }}>
            <img src="/static/nalum.svg"></img>
            <p className="title">Nalum</p>
            <p className="body">The official Alumni Portal of NSUT.</p>
          </div>
          <div className="project-card" style={{ backgroundColor: "#F4AEBF" }}>
            <img src="/static/ludo.svg"></img>
            <p className="title">Online Gaming Research</p>
            <p className="body">
              A research paper on bots in online monetary gaming.
            </p>
          </div>
          <div
            className="project-card common-1"
            style={{ backgroundColor: "#C3E7FF" }}
          >
            <img src="/static/pos.svg"></img>
            <p className="title">Restuarant Theft Detection</p>
            <p className="body">
              Built this system for Americana POS machines.
            </p>
          </div>
        </div>
        <div
          className="cp-550"
          style={{
            marginTodiv: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            className="project-card common-2"
            style={{ backgroundColor: "#C3E7FF" }}
          >
            <img src="/static/pos.svg"></img>
            <p className="title">Restuarant Theft Detection</p>
            <p className="body">
              Built this system for Americana POS machines.
            </p>
          </div>
          <div className="project-card" style={{ backgroundColor: "#FFE3CF" }}>
            <img src="/static/sniff.svg"></img>
            <p className="title">Sniff Dog</p>
            <p className="body">A smart system to detect fake news.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
