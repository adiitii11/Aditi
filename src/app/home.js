import Image from "next/image";

export default function Home() {
  return (
    <div
      id="home"
      className="banner"
      style={{
        minHeight: "calc(100vh)",
        width: "100%",
        display: "flex",
        paddingTop: 80,
        paddingBottom: 80,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="top"
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/home-page.jpg"
          height={400}
          width={400}
          style={{ borderRadius: 50, border: "10px solid #5a2d24" }}
        />
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: 600 }}>
          <h1 style={{ fontWeight: "bold", fontSize: 35 }}>
            Welcome to Aditi&apos;s World of Passion and Engineering Excellence!
          </h1>
          <br></br>
          <p style={{ fontSize: 18 }}>
            Hello there! I&apos;m Aditi, a sophomore pursuing Mechanical
            Engineering at NSUT, where I dive into the fascinating world of
            gears, circuits, and creativity. Beyond the realm of engineering,
            I&apos;m deeply passionate about dancing and painting, forms of art
            that ignite my soul and bring my imagination to life.
          </p>
        </div>
      </div>
      <div
        className="bottom"
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/home-page.jpg"
          height={400}
          width={400}
          style={{ borderRadius: 50, border: "10px solid #5a2d24" }}
        />
      </div>
    </div>
  );
}
