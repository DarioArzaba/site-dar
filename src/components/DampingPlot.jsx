import { useState } from "react";

export default function DampingPlot() {
  const [zeta, setZeta] = useState(0.2);
  const W = 600, H = 260, pad = 24;
  const omega = 6;
  const omega_d = omega * Math.sqrt(Math.max(0, 1 - zeta * zeta));
  const tMax = 4;
  const pts = [];
  for (let i = 0; i <= 240; i++) {
    const t = (i / 240) * tMax;
    const x = Math.exp(-zeta * omega * t) * Math.cos(omega_d * t);
    const px = pad + (t / tMax) * (W - 2 * pad);
    const py = H / 2 - x * (H / 2 - pad);
    pts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
  }
  return (
    <div style={{ width: "100%" }}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto" }}>
        <line x1={pad} y1={H / 2} x2={W - pad} y2={H / 2} stroke="var(--gray-4)" strokeWidth="1" />
        <polyline points={pts.join(" ")} fill="none" stroke="var(--accent)" strokeWidth="2.5" />
      </svg>
      <label style={{ display: "block", marginTop: "0.75rem", fontSize: "0.9rem" }}>
        Damping ratio ζ = {zeta.toFixed(2)}
        <input type="range" min="0" max="1" step="0.01" value={zeta}
          onChange={(e) => setZeta(parseFloat(e.target.value))}
          style={{ width: "100%" }} />
      </label>
    </div>
  );
}
