// colors.ts

type ColorFormat = {
  rgb: string;
  hex: string;
};

type ColorShades = {
  [key: string]: ColorFormat;
};

type Colors = {
  Generic: {
    White: ColorFormat;
    Black: ColorFormat;
  };
  Neutral: ColorShades;
  Primary: ColorShades;
  Success: ColorShades;
  Warning: ColorShades;
  Destructive: ColorShades;
};

const colors: Colors = {
  Generic: {
    White: { rgb: 'rgb(255,255,255)', hex: '#ffffff' },
    Black: { rgb: 'rgb(0,0,0)', hex: '#000000' },
  },
  Neutral: {
    25: { rgb: 'rgb(250,250,250)', hex: '#fafafa' },
    50: { rgb: 'rgb(242,242,242)', hex: '#f2f2f2' },
    100: { rgb: 'rgb(224,224,224)', hex: '#e0e0e0' },
    200: { rgb: 'rgb(207,207,207)', hex: '#cfcfcf' },
    300: { rgb: 'rgb(189,189,189)', hex: '#bdbdbd' },
    400: { rgb: 'rgb(158,158,158)', hex: '#9e9e9e' },
    500: { rgb: 'rgb(126,126,126)', hex: '#7e7e7e' },
    600: { rgb: 'rgb(97,97,97)', hex: '#616161' },
    700: { rgb: 'rgb(66,66,66)', hex: '#424242' },
    800: { rgb: 'rgb(48,48,48)', hex: '#303030' },
    900: { rgb: 'rgb(31,31,31)', hex: '#1f1f1f' },
  },
  Primary: {
    25: { rgb: 'rgb(195,195,255)', hex: '#c3c3ff' },
    50: { rgb: 'rgb(179,179,255)', hex: '#b3b3ff' },
    100: { rgb: 'rgb(163,163,255)', hex: '#a3a3ff' },
    200: { rgb: 'rgb(147,147,255)', hex: '#9393ff' },
    300: { rgb: 'rgb(131,131,255)', hex: '#8383ff' },
    400: { rgb: 'rgb(115,115,255)', hex: '#7373ff' },
    500: { rgb: 'rgb(71,71,255)', hex: '#4747ff' }, // Main
    600: { rgb: 'rgb(55,55,229)', hex: '#3737e5' },
    700: { rgb: 'rgb(47,47,205)', hex: '#2f2fcd' },
    800: { rgb: 'rgb(42,42,181)', hex: '#2a2ab5' },
    900: { rgb: 'rgb(36,36,201)', hex: '#2424c9' },
  },
  Success: {
    50: { rgb: 'rgb(240,253,244)', hex: '#f0fdf4' },
    100: { rgb: 'rgb(220,252,231)', hex: '#dcfce7' },
    200: { rgb: 'rgb(187,247,208)', hex: '#bbf7d0' },
    300: { rgb: 'rgb(134,239,172)', hex: '#86efac' },
    400: { rgb: 'rgb(74,222,128)', hex: '#4ade80' },
    500: { rgb: 'rgb(34,197,94)', hex: '#22c55e' }, // Main
    600: { rgb: 'rgb(22,163,74)', hex: '#16a34a' },
    700: { rgb: 'rgb(21,128,61)', hex: '#15803d' },
    800: { rgb: 'rgb(22,101,52)', hex: '#166534' },
    900: { rgb: 'rgb(20,83,45)', hex: '#14532d' },
  },
  Warning: {
    50: { rgb: 'rgb(255,251,235)', hex: '#fffbeb' },
    100: { rgb: 'rgb(254,243,199)', hex: '#fef3c7' },
    200: { rgb: 'rgb(253,230,138)', hex: '#fde68a' },
    300: { rgb: 'rgb(252,211,77)', hex: '#fcd34d' },
    400: { rgb: 'rgb(251,191,36)', hex: '#fbbf24' },
    500: { rgb: 'rgb(245,158,11)', hex: '#f59e0b' }, // Main
    600: { rgb: 'rgb(217,119,6)', hex: '#d97706' },
    700: { rgb: 'rgb(180,83,9)', hex: '#b45309' },
    800: { rgb: 'rgb(146,64,14)', hex: '#92400e' },
    900: { rgb: 'rgb(120,53,15)', hex: '#78350f' },
  },
  Destructive: {
    50: { rgb: 'rgb(254,242,242)', hex: '#fef2f2' },
    100: { rgb: 'rgb(254,226,226)', hex: '#fee2e2' },
    200: { rgb: 'rgb(254,202,202)', hex: '#fecaca' },
    300: { rgb: 'rgb(252,165,165)', hex: '#fca5a5' },
    400: { rgb: 'rgb(248,113,113)', hex: '#f87171' },
    500: { rgb: 'rgb(239,68,68)', hex: '#ef4444' }, // Main
    600: { rgb: 'rgb(220,38,38)', hex: '#dc2626' },
    700: { rgb: 'rgb(185,28,28)', hex: '#b91c1c' },
    800: { rgb: 'rgb(153,27,27)', hex: '#991b1b' },
    900: { rgb: 'rgb(127,29,29)', hex: '#7f1d1d' },
  },
};

export default colors;
