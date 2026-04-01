export default function HijabIllustration() {
  return (
    <svg
      viewBox="0 0 420 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-2xl"
      aria-label="Illustrated hijabi developer"
      role="img"
    >
      <defs>
        <radialGradient id="circleBg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
          <stop offset="55%" stopColor="#7c3aed" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#080615" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#6d28d9" />
        </linearGradient>
        <linearGradient id="hijabGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#4c1d95" />
        </linearGradient>
        <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e2d9f3" />
          <stop offset="100%" stopColor="#c4b5fd" />
        </linearGradient>
        <linearGradient id="lapGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.3" />
        </linearGradient>
        <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
        <filter id="glow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── Background rings ──────────────────── */}
      <circle cx="210" cy="270" r="195" fill="url(#circleBg)" />
      <circle cx="210" cy="270" r="170" fill="none" stroke="rgba(124,58,237,0.12)" strokeWidth="1" />
      <circle cx="210" cy="270" r="135" fill="none" stroke="rgba(14,165,233,0.1)" strokeWidth="1" />

      {/* Glow blob behind figure */}
      <ellipse cx="210" cy="330" rx="125" ry="95" fill="rgba(124,58,237,0.18)" filter="url(#softBlur)" />

      {/* ── Stars & sparkles ─────────────────── */}
      {/* 4-point star – upper left */}
      <path d="M72 118 L76 130 L88 134 L76 138 L72 150 L68 138 L56 134 L68 130Z" fill="#ec4899" opacity="0.85" />
      {/* 4-point star – upper right */}
      <path d="M342 88 L345 97 L354 100 L345 103 L342 112 L339 103 L330 100 L339 97Z" fill="#22d3ee" opacity="0.85" />
      {/* small star right mid */}
      <path d="M378 228 L380 234 L386 236 L380 238 L378 244 L376 238 L370 236 L376 234Z" fill="#ec4899" opacity="0.6" />
      {/* small star left mid */}
      <path d="M40 318 L42 324 L48 326 L42 328 L40 334 L38 328 L32 326 L38 324Z" fill="#a78bfa" opacity="0.6" />

      {/* Dots */}
      <circle cx="92" cy="200" r="4.5" fill="#ec4899" opacity="0.7" />
      <circle cx="354" cy="185" r="3.5" fill="#22d3ee" opacity="0.7" />
      <circle cx="55" cy="375" r="3" fill="#a78bfa" opacity="0.55" />
      <circle cx="372" cy="385" r="4" fill="#ec4899" opacity="0.55" />
      <circle cx="358" cy="310" r="2.5" fill="#22d3ee" opacity="0.6" />
      <circle cx="46" cy="252" r="2.5" fill="#22d3ee" opacity="0.4" />
      <circle cx="385" cy="155" r="2" fill="#a78bfa" opacity="0.5" />

      {/* ── Floating code badges ─────────────── */}
      {/* </> */}
      <g transform="translate(36,148) rotate(-12)">
        <rect width="60" height="30" rx="10" fill="rgba(34,211,238,0.15)" stroke="rgba(34,211,238,0.55)" strokeWidth="1.5" />
        <text x="10" y="21" fontFamily="monospace" fontSize="14" fontWeight="bold" fill="#22d3ee">&lt;/&gt;</text>
      </g>
      {/* { } */}
      <g transform="translate(340,176) rotate(10)">
        <rect width="48" height="30" rx="10" fill="rgba(236,72,153,0.15)" stroke="rgba(236,72,153,0.55)" strokeWidth="1.5" />
        <text x="10" y="21" fontFamily="monospace" fontSize="14" fontWeight="bold" fill="#ec4899">{"{ }"}</text>
      </g>
      {/* const */}
      <g transform="translate(30,392) rotate(-8)">
        <rect width="66" height="28" rx="9" fill="rgba(167,139,250,0.15)" stroke="rgba(167,139,250,0.55)" strokeWidth="1.5" />
        <text x="9" y="19" fontFamily="monospace" fontSize="11" fontWeight="bold" fill="#a78bfa">const</text>
      </g>
      {/* => */}
      <g transform="translate(340,362) rotate(6)">
        <rect width="50" height="28" rx="9" fill="rgba(34,211,238,0.12)" stroke="rgba(34,211,238,0.45)" strokeWidth="1.5" />
        <text x="9" y="19" fontFamily="monospace" fontSize="12" fontWeight="bold" fill="#22d3ee">=&gt;</text>
      </g>

      {/* ── Body / dress ─────────────────────── */}
      <path
        d="M152 308 C144 345 140 388 146 428 Q176 452 210 454 Q244 452 274 428 C280 388 276 345 268 308 Q248 292 210 290 Q172 292 152 308Z"
        fill="url(#bodyGrad)"
      />
      {/* Dress highlight sheen */}
      <path
        d="M166 312 Q195 303 224 312 Q215 295 210 292 Q195 296 166 312Z"
        fill="rgba(196,181,253,0.35)"
      />
      {/* Dress fold lines */}
      <path d="M176 318 Q210 310 244 318" stroke="rgba(196,181,253,0.3)" strokeWidth="1.5" fill="none" />
      <path d="M170 335 Q210 326 250 335" stroke="rgba(196,181,253,0.2)" strokeWidth="1" fill="none" />

      {/* ── Arms ─────────────────────────────── */}
      {/* Left arm – outer */}
      <path d="M155 318 Q126 356 112 400" stroke="#6d28d9" strokeWidth="28" strokeLinecap="round" fill="none" />
      {/* Left arm – inner */}
      <path d="M155 318 Q126 356 112 400" stroke="#7c3aed" strokeWidth="22" strokeLinecap="round" fill="none" />
      {/* Right arm – outer */}
      <path d="M265 318 Q294 356 308 400" stroke="#6d28d9" strokeWidth="28" strokeLinecap="round" fill="none" />
      {/* Right arm – inner */}
      <path d="M265 318 Q294 356 308 400" stroke="#7c3aed" strokeWidth="22" strokeLinecap="round" fill="none" />

      {/* Hands */}
      <circle cx="111" cy="402" r="17" fill="url(#skinGrad)" />
      <circle cx="309" cy="402" r="17" fill="url(#skinGrad)" />
      {/* Finger hints */}
      <circle cx="98" cy="395" r="8" fill="url(#skinGrad)" />
      <circle cx="101" cy="386" r="8" fill="url(#skinGrad)" />
      <circle cx="111" cy="384" r="8" fill="url(#skinGrad)" />
      <circle cx="322" cy="395" r="8" fill="url(#skinGrad)" />
      <circle cx="319" cy="386" r="8" fill="url(#skinGrad)" />
      <circle cx="309" cy="384" r="8" fill="url(#skinGrad)" />

      {/* ── Neck ─────────────────────────────── */}
      <rect x="197" y="273" width="26" height="32" rx="11" fill="url(#skinGrad)" />

      {/* ── Head (face area — no features) ───── */}
      <ellipse cx="210" cy="232" rx="48" ry="54" fill="url(#skinGrad)" />

      {/* ── Hijab ────────────────────────────── */}
      {/* Main head covering */}
      <path
        d="M162 218 Q167 158 210 150 Q253 158 258 218 Q268 256 258 286 Q238 314 210 318 Q182 314 162 286 Q152 256 162 218Z"
        fill="url(#hijabGrad)"
      />
      {/* Hijab highlight */}
      <path
        d="M170 218 Q174 168 210 160 Q237 168 248 200 Q241 182 224 176 Q210 172 196 176 Q180 182 170 218Z"
        fill="rgba(167,139,250,0.38)"
      />
      {/* Chin/jaw piece */}
      <path
        d="M165 262 Q188 278 210 280 Q232 278 255 262 Q250 284 240 296 Q226 310 210 312 Q194 310 180 296 Q170 284 165 262Z"
        fill="#4c1d95"
      />
      {/* Left drape over shoulder */}
      <path
        d="M162 218 Q144 244 138 276 Q132 308 134 338 Q140 362 152 374 Q160 344 160 314 Q160 282 163 260Z"
        fill="#5b21b6"
      />
      {/* Right drape over shoulder */}
      <path
        d="M258 218 Q276 244 282 276 Q288 308 286 338 Q280 362 268 374 Q260 344 260 314 Q260 282 257 260Z"
        fill="#5b21b6"
      />
      {/* Drape fold details */}
      <path d="M162 242 Q154 268 158 294" stroke="rgba(91,33,182,0.6)" strokeWidth="1.5" fill="none" />
      <path d="M258 242 Q266 268 262 294" stroke="rgba(91,33,182,0.6)" strokeWidth="1.5" fill="none" />

      {/* ── Laptop ───────────────────────────── */}
      {/* Screen lid */}
      <rect x="128" y="388" width="164" height="108" rx="9" fill="#1a0f3a" />
      <rect x="134" y="394" width="152" height="96" rx="6" fill="#0a0618" />
      {/* Screen glass */}
      <rect x="138" y="398" width="144" height="88" rx="4" fill="#0d0920" />

      {/* Screen glow effect */}
      <rect x="138" y="398" width="144" height="88" rx="4" fill="url(#lapGrad)" opacity="0.2" />

      {/* Code lines – cyan, violet, pink cycling */}
      <rect x="146" y="406" width="52" height="2.5" rx="1.25" fill="#22d3ee" />
      <rect x="146" y="413" width="76" height="2.5" rx="1.25" fill="#a78bfa" />
      <rect x="152" y="420" width="42" height="2.5" rx="1.25" fill="#ec4899" />
      <rect x="146" y="427" width="60" height="2.5" rx="1.25" fill="#22d3ee" opacity="0.8" />
      <rect x="152" y="434" width="34" height="2.5" rx="1.25" fill="#a78bfa" opacity="0.8" />
      <rect x="146" y="441" width="68" height="2.5" rx="1.25" fill="#ec4899" opacity="0.65" />
      <rect x="146" y="448" width="46" height="2.5" rx="1.25" fill="#22d3ee" opacity="0.55" />
      <rect x="146" y="455" width="38" height="2.5" rx="1.25" fill="#a78bfa" opacity="0.45" />
      {/* Blinking cursor */}
      <rect x="146" y="462" width="8" height="2.5" rx="1.25" fill="#f0e8ff" opacity="0.9" />

      {/* Screen glow on hands/lap */}
      <ellipse cx="210" cy="392" rx="55" ry="12" fill="rgba(14,165,233,0.1)" filter="url(#softBlur)" />

      {/* Laptop base/hinge */}
      <path d="M105 496 L315 496 L332 510 L88 510Z" fill="#1a0f3a" />
      <rect x="178" y="496" width="64" height="5" rx="2.5" fill="#2d1b69" />
    </svg>
  )
}
