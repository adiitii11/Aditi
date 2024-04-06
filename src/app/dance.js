import Image from "next/image";

export default function Dance() {
  return (
    <div
      id="dance"
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
      <center>
        <h1 style={{ fontWeight: "bold", fontSize: 35, marginBottom: 53 }}>
          Dance
        </h1>
      </center>
      <div
        className="gallary"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div
          style={{
            flex: 1,
            margin: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <video
            controls
            className="art-img"
            style={{
              borderRadius: 20,
              backgroundColor: "#5a2d24",
              objectFit: "fill",
              maxWidth: 350,
              width: "100%",
              border: "3.5px solid #5a2d24",
            }}
            poster="/thumbnails/1.png"
          >
            <source src="/video/1.mp4"></source>
          </video>
          <div style={{ height: 10 }}></div>
          <video
            controls
            className="art-img"
            style={{
              borderRadius: 20,
              backgroundColor: "#5a2d24",
              objectFit: "fill",
              maxWidth: 350,
              width: "100%",
              border: "3.5px solid #5a2d24",
            }}
            poster="/thumbnails/4.png"
          >
            <source src="/video/2.mp4"></source>
          </video>
          <div style={{ height: 10 }}></div>
          <video
            controls
            className="art-img"
            style={{
              borderRadius: 20,
              backgroundColor: "#5a2d24",
              objectFit: "fill",
              maxWidth: 350,
              width: "100%",
              border: "3.5px solid #5a2d24",
            }}
            poster="/thumbnails/7.png"
          >
            <source src="/video/3.mp4"></source>
          </video>
        </div>
        <div
          style={{
            flex: 1,
            margin: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <video
            controls
            className="art-img"
            style={{
              borderRadius: 20,
              backgroundColor: "#5a2d24",
              objectFit: "fill",
              maxWidth: 350,
              width: "100%",
              border: "3.5px solid #5a2d24",
            }}
            poster="/thumbnails/2.png"
          >
            <source src="/video/4.mp4"></source>
          </video>
          <div style={{ height: 10 }}></div>
          <video
            controls
            className="art-img"
            style={{
              borderRadius: 20,
              backgroundColor: "#5a2d24",
              objectFit: "fill",
              maxWidth: 350,
              width: "100%",
              border: "3.5px solid #5a2d24",
            }}
            poster="/thumbnails/5.png"
          >
            <source src="/video/5.mp4"></source>
          </video>
          <div style={{ height: 10 }}></div>
          <video
            controls
            className="art-img"
            style={{
              borderRadius: 20,
              backgroundColor: "#5a2d24",
              objectFit: "fill",
              maxWidth: 350,
              width: "100%",
              border: "3.5px solid #5a2d24",
            }}
            poster="/thumbnails/8.png"
          >
            <source src="/video/6.mp4"></source>
          </video>
        </div>
        <div
          style={{
            flex: 1,
            margin: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <video
            controls
            className="art-img"
            style={{
              borderRadius: 20,
              backgroundColor: "#5a2d24",
              objectFit: "fill",
              maxWidth: 350,
              width: "100%",
              border: "3.5px solid #5a2d24",
            }}
            poster="/thumbnails/3.png"
          >
            <source src="/video/7.mp4"></source>
          </video>
          <div style={{ height: 10 }}></div>
          <video
            controls
            className="art-img"
            style={{
              borderRadius: 20,
              backgroundColor: "#5a2d24",
              objectFit: "fill",
              maxWidth: 350,
              width: "100%",
              border: "3.5px solid #5a2d24",
            }}
            poster="/thumbnails/6.png"
          >
            <source src="/video/8.mp4"></source>
          </video>
          <div style={{ height: 10 }}></div>
          <video
            controls
            className="art-img"
            style={{
              borderRadius: 20,
              backgroundColor: "#5a2d24",
              objectFit: "fill",
              maxWidth: 350,
              width: "100%",
              border: "3.5px solid #5a2d24",
            }}
            poster="/thumbnails/9.png"
          >
            <source src="/video/9.mp4"></source>
          </video>
        </div>
      </div>
    </div>
  );
}
