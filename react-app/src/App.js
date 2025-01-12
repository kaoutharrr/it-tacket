import React from "react";

const App = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.brand}>TroubleFix</h1>
        <div style={styles.nav}>
          <a href="/signin" style={styles.navLink}>
            sign in
          </a>
          <a href="/signup" style={styles.navLink}>
            sign up
          </a>
        </div>
      </header>

      <main style={styles.main}>
        <div style={styles.heroSection}>
          <div style={styles.imagePlaceholder}>
            <img
              src="your-image-url-here"
              alt="Illustration"
              style={styles.image}
            />
          </div>
          <div style={styles.textSection}>
            <h2 style={styles.heading}>Simplify IT, One Ticket at a Time</h2>
            <p style={styles.description}>
              Easily track, manage, and resolve IT issues with our intuitive
              platform.
            </p>
            <ul style={styles.features}>
              <li>Efficient Ticket Management</li>
              <li>Real-Time Updates</li>
              <li>User-Friendly Interface</li>
              <li>Secure & Reliable</li>
            </ul>
          </div>
        </div>
      </main>

      <footer style={styles.footer}>
        <a href="/about" style={styles.footerLink}>
          About Us
        </a>
        <a href="/privacy" style={styles.footerLink}>
          Privacy Policy
        </a>
        <a href="/terms" style={styles.footerLink}>
          Terms of Service
        </a>
        <a href="/support" style={styles.footerLink}>
          Contact Support
        </a>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#000",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    borderBottom: "1px solid #333",
  },
  brand: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    gap: "15px",
  },
  navLink: {
    color: "#00FF00",
    textDecoration: "none",
    fontSize: "14px",
  },
  main: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  heroSection: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  imagePlaceholder: {
    flex: 1,
  },
  image: {
    maxWidth: "100%",
    borderRadius: "5px",
  },
  textSection: {
    flex: 2,
  },
  heading: {
    fontSize: "28px",
    color: "#00FF00",
  },
  description: {
    marginTop: "10px",
    fontSize: "16px",
    lineHeight: "1.5",
  },
  features: {
    marginTop: "15px",
    listStyleType: "disc",
    paddingLeft: "20px",
  },
  footer: {
    padding: "20px 20px",
    borderTop: "1px solid #333",
    display: "flex",
    justifyContent: "center",
    gap: "40px",
  },
  footerLink: {
    color: "#00FF00",
    textDecoration: "none",
    fontSize: "12px",
  },
};

export default App;
