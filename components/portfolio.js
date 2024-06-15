export default function PortfolioBanner() {
  return (
    <div
      id="resume"
      className="banner"
      style={{
        backgroundColor: "#ff91a4",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 200px)",
        display: "flex",
        alignItems: "center",
        paddingBottom: 80,
        justifyContent: "center",
        paddingTop: 60,
        paddingBottom: 20,
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
          marginBottom: 80,
        }}
      >
        <h1
          style={{
            fontSize: 50,
            margin: 0,
            lineHeight: 1,
            fontWeight: 700,
            marginTop: 100,
          }}
        >
          Work Experience
        </h1>

        <a
          href="docs/resume.pdf"
          className="resume-button"
          style={{
            marginTop: 20,
            textAlign: "left",
            textDecoration: "none",
            color: "black",
            borderRadius: 20,
            border: "solid black",
            padding: 10,
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 50,
            marginBottom: 50,
          }}
        >
          View Resume
        </a>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              flex: 1,
              textAlign: "right",
              marginLeft: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                marginTop: 0,
              }}
            >
              <div style={{ height: 50 }}></div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div>
                  <p style={{ fontWeight: "bold", marginBottom: 10 }}>
                    Americana Foods
                  </p>
                  <p style={{ marginTop: 5, marginBottom: 5, fontWeight: 500 }}>
                    Technical Intern
                  </p>
                  <p style={{ marginTop: 5, marginBottom: 5 }}>
                    Creating an API for reducing thefts in the Americana chain
                    restaurants via analysis of POS machines and Cameras.
                  </p>
                </div>
                <div
                  style={{
                    width: 40,
                    height: 0,
                    border: "1px solid black",
                  }}
                ></div>
              </div>
              <div style={{ height: 200 }}></div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div>
                  <p style={{ fontWeight: "bold", marginBottom: 10 }}>
                    Gaming Research Paper
                  </p>
                  <p style={{ marginTop: 5, marginBottom: 5, fontWeight: 500 }}>
                    Researcher
                  </p>
                  <p style={{ marginTop: 5, marginBottom: 5 }}>
                    Conducted paid research for Think Change Forum on Fair Play
                    in Online Real Money Games in India.
                  </p>
                </div>
                <div
                  style={{
                    width: 40,
                    height: 0,
                    border: "1px solid black",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              textAlign: "left",
              display: "flex",
              borderLeft: "solid 2px",
              marginRight: 10,
              marginTop: 30,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div style={{ height: 175 }}></div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 0,
                    border: "1px solid black",
                    marginRight: 10,
                  }}
                ></div>
                <div>
                  <p style={{ fontWeight: "bold", marginBottom: 10 }}>Nalum</p>
                  <p style={{ marginTop: 5, marginBottom: 5, fontWeight: 500 }}>
                    Marketing Head
                  </p>
                  <p style={{ marginTop: 5, marginBottom: 5 }}>
                    Creating an API for reducing thefts in the Americana chain
                    restaurants via analysis of POS machines and Cameras.
                  </p>
                </div>
              </div>
              <div style={{ height: 200 }}></div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 0,
                    border: "1px solid black",
                    marginRight: 10,
                  }}
                ></div>
                <div>
                  <p style={{ fontWeight: "bold", marginBottom: 10 }}>
                    Sniffdog
                  </p>
                  <p style={{ marginTop: 5, marginBottom: 5, fontWeight: 500 }}>
                    Project Lead
                  </p>
                  <p style={{ marginTop: 5, marginBottom: 5 }}>
                    Led "Sniffdog" with Crowd Tangle, Tweet Deck, AI against
                    misinformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
