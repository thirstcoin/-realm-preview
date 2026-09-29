/* ============================================================
   DAZILLA / TOEZLANDIA — SHARED LIVE CONFIG
   This is the single source of truth used by the website + game.
   ============================================================ */

window.DAZILLA_CONFIG = Object.freeze({
    // Game backend.
  // Leave blank until DAZILLA score/XP/leaderboard routes are live.
  API_BASE: "",
OFFICIAL_API_BASE: "https://toezlandia-ecosystem-api.onrender.com",
  
  // Guardian Registry backend.
  REGISTRY_API_BASE: "https://toezlandia-ecosystem-api.onrender.com/api/dazilla",

  // Solana token mint addresses.
  // TOEZ can be filled as soon as we confirm the real mint.
  // DAZILLA stays blank until the launch mint exists.
  TOEZ_MINT: "3DRCui7ZbEykhrUHMbyXSvn5731fbKchFTFvs1Wjpump",
  DAZILLA_MINT: "",

  // Holder standings.
  MIN_TOEZ: 1,
  MIN_DAZILLA: 1,

  // Royal Guard threshold.
  ROYAL_GUARD_TOEZ: 1000000,

  // Game / leaderboard season.
  SEASON: 1,

  // Community defense goal.
  GLOBAL_GOAL: 1000000
});