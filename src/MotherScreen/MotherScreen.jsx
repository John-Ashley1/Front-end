import Logo from "./logo.png";

export default function MotherScreen() {
  const titleStyle = {
    color: "#7B1113",
    fontSize: "32px",
    fontFamily: "'Iosevka Charon Mono', 'Roboto Mono', monospace",
    fontWeight: 700,
    letterSpacing: "3.2px",
    lineHeight: "1.1",
    whiteSpace: "nowrap",
  };

  return (
    <div className="inner-container" style={{ height: "100vh" }}>
      {/* ================= HEADER ================= */}
      <div
        className="global-header"
        style={{
          width: "100%",
          height: "120px",
          backgroundColor: "white",
          borderBottom: "1px solid #cfcfcf",
          display: "flex",
          alignItems: "center",
          paddingLeft: "18px",
        }}
      >
        <img
          src={Logo}
          alt="CIT-U Logo"
          style={{
            width: "95px",
            height: "95px",
            objectFit: "contain",
          }}
        />

        <div
          style={{
            marginLeft: "18px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={titleStyle}>
            CITU OJT INTERNSHIP
          </div>

          <div
            style={{
              ...titleStyle,
              marginTop: "6px",
            }}
          >
            MANAGEMENT SYSTEM
          </div>
        </div>
      </div>

      {/* ================= BODY ================= */}
      <div
        className="side-by-side"
        style={{
          display: "flex",
          height: "calc(100vh - 120px)",
        }}
      >
        <div
          className="side-bar"
          style={{
            width: "20%",
            backgroundColor: "#7B1113",
          }}
        >
<div
  className="profile-box"
  style={{
    width: "100%",
    height: "180px",
    padding: "24px 20px",
    borderBottom: "1px solid #9A1618",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
    boxSizing: "border-box",
  }}
>

  {/* PROFILE ICON */}
  <div
    style={{
      width: "72px",
      height: "72px",
      backgroundColor: "#9A1618",
      borderRadius: "50%",
      border: "2px solid rgba(255,255,255,0.30)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >

    {/* Simple User Icon */}
    <div
      style={{
        width: "38px",
        height: "38px",
        position: "relative",
      }}
    >

      {/* Head */}
      <div
        style={{
          width: "13px",
          height: "13px",
          borderRadius: "50%",
          border: "3px solid rgba(255,255,255,0.6)",
          position: "absolute",
          top: "5px",
          left: "13px",
          boxSizing: "border-box",
        }}
      />

      {/* Body */}
      <div
        style={{
          width: "24px",
          height: "11px",
          borderRadius: "15px 15px 0 0",
          border: "3px solid rgba(255,255,255,0.6)",
          borderBottom: "none",
          position: "absolute",
          bottom: "5px",
          left: "7px",
          boxSizing: "border-box",
        }}
      />

    </div>

  </div>


      {/* USER INFORMATION */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >

        <div
          style={{
            color: "white",
            fontSize: "16px",
            fontFamily: "Instrument Sans, sans-serif",
            fontWeight: "700",
            lineHeight: "20px",
          }}
        >
          Juan dela Cruz
        </div>


        <div
          style={{
            color: "rgba(255,255,255,0.60)",
            fontSize: "12px",
            fontFamily: "Inter, sans-serif",
            fontWeight: "400",
            textTransform: "uppercase",
            letterSpacing: "1.2px",
            lineHeight: "18px",
            marginTop: "2px",
          }}
        >
          Student
        </div>


      </div>

    </div>

        {/*
          <div className="side-bar-contents">
            {[
              "Profile",
              "Internship Opportunities",
              "My Applications",
              "Requirements",
              "Attendance",
              "Announcements",
              "Messages",
              "Notifications",
            ].map((item) => (
              <div
                key={item}
                style={{
                  margin: "8px",
                  color: "rgba(255,255,255,.9)",
                  fontSize: 14,
                  fontFamily: "Inter",
                }}
              >
                {item}
              </div>
            ))}
          </div>

        */}
        </div>

        <div
          className="main-content"
          style={{
            width: "80%",
            background:
              "linear-gradient(180deg,#B23F41 35%,#DB5558 54%,#F1B82D 87%,white 100%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="inner-content"
            style={{
              width: "95%",
              height: "95%",
              backgroundColor: "white",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}