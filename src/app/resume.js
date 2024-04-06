"use client";

import Image from "next/image";

export default function Resume() {
  return (
    <div
      id="resume"
      className="banner"
      style={{
        minHeight: "calc(100vh)",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        height: "100%",
        alignItems: "center",
        minHeight: "calc(100vh)",
        padding: 30,
      }}
    >
      <div
        className="top"
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <center>
          <img src="avatar.png" width="100%" style={{ maxWidth: 400 }}></img>
        </center>{" "}
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div style={{ maxWidth: 600 }}>
          <center>
            <h1 style={{ fontWeight: "bold", fontSize: 35 }}>My Resume</h1>
            <button
              onClick={() => (window.location.href = "resume.pdf")}
              style={{
                marginTop: 50,
                fontSize: 20,
                backgroundColor: "#5a2d24",
                color: "#c8ad90",
                padding: 10,
                paddingRight: 20,
                paddingLeft: 20,
                borderRadius: 20,
              }}
            >
              Download
            </button>
          </center>
        </div>
      </div>
      <div
        className="bottom"
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <center>
          <img src="avatar.png" width="100%" style={{ maxWidth: 400 }}></img>
        </center>{" "}
      </div>
    </div>
  );
}
