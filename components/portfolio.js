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
                    Zopper
                  </p>
                  <p style={{ marginTop: 5, marginBottom: 5, fontWeight: 500 }}>
                    Data Analyst Intern
                  </p>
                  <p style={{ marginTop: 5, marginBottom: 5 }}>
Built a forecasting model predicting 14,821 warranty claims (vs 15,000 actual) using PyTorch and Tableau, reducing claim TAT by 71% and enabling data-driven decisions that improved customer satisfaction.
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
                    Americana Foods
                  </p>
                  <p style={{ marginTop: 5, marginBottom: 5, fontWeight: 500 }}>
                    Product Analyst Intern
                  </p>
                  <p style={{ marginTop: 5, marginBottom: 5 }}>
                   Uncovered a promo-code-based internal theft pattern across 150+ outlets by analyzing 75K+ sales rows and automating CCTV-log fraud detection — reducing manual review time by 80%
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
                  <p style={{ fontWeight: "bold", marginBottom: 10 }}>Enactus</p>
                  <p style={{ marginTop: 5, marginBottom: 5, fontWeight: 500 }}>
                    Vice President
                  </p>
                  <p style={{ marginTop: 5, marginBottom: 5 }}>
                    Co-founded a ₹4,000 homegrown air purifier with 3-layer filtration (HEPA, carbon, UV), pitched at Enactus Nationals IIT Delhi, and secured ₹2L+ in grants as National Champions.
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
                    Nalum
                  </p>
                  <p style={{ marginTop: 5, marginBottom: 5, fontWeight: 500 }}>
                    Director
                  </p>
                  <p style={{ marginTop: 5, marginBottom: 5 }}>
                    Analyzed 10K+ user journeys to improve alumni-student matchmaking on Nalum, digitized legacy records using AI, and scaled platform engagement through tailored outreach and feedback loops.
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
