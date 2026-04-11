"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h2>A critical error occurred!</h2>
          <button onClick={() => reset()}>Refresh App</button>
        </div>
      </body>
    </html>
  );
}
