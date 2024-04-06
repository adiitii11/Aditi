import Image from "next/image";

export default function Art() {
  return (
    <div
      id="art"
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
          Art
        </h1>
        <div
          className="gallary"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div style={{ flex: 1, margin: 5 }}>
            <Image
              width={350}
              height={350}
              className="art-img"
              style={{
                borderRadius: 20,
                maxWidth: 350,
                width: "100%",
                border: "3.5px solid #5a2d24",
              }}
              src="/post/1.jpg"
            ></Image>
            <div style={{ height: 10 }}></div>
            <Image
              width={350}
              height={350}
              className="art-img"
              style={{
                borderRadius: 20,
                maxWidth: 350,
                width: "100%",
                border: "3.5px solid #5a2d24",
              }}
              src="/post/2.webp"
            ></Image>
            <div style={{ height: 10 }}></div>
            <Image
              width={350}
              height={350}
              className="art-img"
              style={{
                borderRadius: 20,
                maxWidth: 350,
                width: "100%",
                border: "3.5px solid #5a2d24",
              }}
              src="/post/3.webp"
            ></Image>
          </div>
          <div style={{ flex: 1, margin: 5 }}>
            <Image
              width={350}
              height={350}
              className="art-img"
              style={{
                borderRadius: 20,
                maxWidth: 350,
                width: "100%",
                border: "3.5px solid #5a2d24",
              }}
              src="/post/4.webp"
            ></Image>
            <div style={{ height: 10 }}></div>
            <Image
              width={350}
              height={350}
              className="art-img"
              style={{
                borderRadius: 20,
                maxWidth: 350,
                width: "100%",
                border: "3.5px solid #5a2d24",
              }}
              src="/post/5.webp"
            ></Image>
            <div style={{ height: 10 }}></div>
            <Image
              width={350}
              height={350}
              className="art-img"
              style={{
                borderRadius: 20,
                maxWidth: 350,
                width: "100%",
                border: "3.5px solid #5a2d24",
              }}
              src="/post/6.jpg"
            ></Image>
          </div>
          <div style={{ flex: 1, margin: 5 }}>
            <Image
              width={350}
              height={350}
              className="art-img"
              style={{
                borderRadius: 20,
                maxWidth: 350,
                width: "100%",
                border: "3.5px solid #5a2d24",
              }}
              src="/post/7.jpg"
            ></Image>
            <div style={{ height: 10 }}></div>
            <Image
              width={350}
              height={350}
              className="art-img"
              style={{
                borderRadius: 20,
                maxWidth: 350,
                width: "100%",
                border: "3.5px solid #5a2d24",
              }}
              src="/post/8.jpg"
            ></Image>
            <div style={{ height: 10 }}></div>
            <Image
              width={350}
              height={350}
              className="art-img"
              style={{
                borderRadius: 20,
                maxWidth: 350,
                width: "100%",
                border: "3.5px solid #5a2d24",
              }}
              src="/post/9.jpg"
            ></Image>
          </div>
        </div>
      </center>
    </div>
  );
}
