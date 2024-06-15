export default function Navigation() {
  return (
    <nav
      style={{
        position: "fixed",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: 10,
        }}
      >
        <a href="/">
          <img
            src="/static/logo.svg"
            height={30}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
              cursor: "pointer",
            }}
          ></img>
        </a>
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
            paddingRight: 10,
          }}
        >
          <a className="nav-link" href="/#home">
            Home
          </a>
          <a className="nav-link" href="/#about">
            About
          </a>
          <a className="nav-link" href="/#projects">
            Projects
          </a>
          <a className="nav-link" href="/#resume">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
