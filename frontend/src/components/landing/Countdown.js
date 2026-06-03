import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

function getTargetDate() {
  const stored = localStorage.getItem("offer_target");
  if (stored) {
    const d = new Date(stored);
    if (d > new Date()) return d;
  }
  const target = new Date();
  target.setHours(target.getHours() + 24);
  localStorage.setItem("offer_target", target.toISOString());
  return target;
}

export default function Countdown() {
  const [target] = useState(getTargetDate);
  const [remaining, setRemaining] = useState({});

  useEffect(() => {
    function calc() {
      const diff = Math.max(0, target - Date.now());
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setRemaining({ h, m, s });
    }
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [target]);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div data-testid="countdown-timer" className="flex items-center justify-center gap-3 mb-6">
      <Clock className="w-4 h-4 text-gold/70" />
      <span className="uppercase tracking-[0.2em] text-xs text-gold/70 font-sans">
        Oferta expira em
      </span>
      <div className="flex items-center gap-1.5 font-heading text-lg text-white tracking-wider">
        <span data-testid="countdown-hours" className="bg-surface-elevated px-2 py-1 border border-gold/20 min-w-[2.2rem] text-center">
          {pad(remaining.h ?? 0)}
        </span>
        <span className="text-gold/40">:</span>
        <span data-testid="countdown-minutes" className="bg-surface-elevated px-2 py-1 border border-gold/20 min-w-[2.2rem] text-center">
          {pad(remaining.m ?? 0)}
        </span>
        <span className="text-gold/40">:</span>
        <span data-testid="countdown-seconds" className="bg-surface-elevated px-2 py-1 border border-gold/20 min-w-[2.2rem] text-center">
          {pad(remaining.s ?? 0)}
        </span>
      </div>
    </div>
  );
}
