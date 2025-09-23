export interface Theme {
  id: string
  name: string
  description: string
  preview: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    card: string
    text: string
    muted: string
  }
  fonts: {
    heading: string
    body: string
  }
  layout: {
    spacing: string
    borderRadius: string
    cardStyle: string
  }
}

export const THEMES: Record<string, Theme> = {
  classic: {
    id: "classic",
    name: "Classic Black & White",
    description: "Sophisticated monochrome design with elegant typography",
    preview: "bg-gradient-to-br from-gray-900 to-black",
    colors: {
      primary: "text-black",
      secondary: "text-gray-800",
      accent: "text-gray-900",
      background: "bg-white",
      card: "bg-white",
      text: "text-black",
      muted: "text-gray-500",
    },
    fonts: {
      heading: "font-semibold tracking-tight",
      body: "font-normal",
    },
    layout: {
      spacing: "space-y-5",
      borderRadius: "rounded-sm",
      cardStyle: "shadow-sm border border-gray-100",
    },
  },
  default: {
    id: "default",
    name: "Professional",
    description: "Clean and professional design perfect for business profiles",
    preview: "bg-gradient-to-br from-blue-50 to-white",
    colors: {
      primary: "text-blue-600",
      secondary: "text-gray-600",
      accent: "text-purple-600",
      background: "bg-gray-50",
      card: "bg-white/80",
      text: "text-gray-900",
      muted: "text-gray-600",
    },
    fonts: {
      heading: "font-semibold",
      body: "font-normal",
    },
    layout: {
      spacing: "space-y-6",
      borderRadius: "rounded-lg",
      cardStyle: "shadow-sm border-0",
    },
  },
  dark: {
    id: "dark",
    name: "Dark Mode",
    description: "Sleek dark theme for a modern, sophisticated look",
    preview: "bg-gradient-to-br from-gray-900 to-gray-800",
    colors: {
      primary: "text-blue-400",
      secondary: "text-gray-300",
      accent: "text-purple-400",
      background: "bg-gray-900",
      card: "bg-gray-800/80",
      text: "text-gray-100",
      muted: "text-gray-400",
    },
    fonts: {
      heading: "font-semibold",
      body: "font-normal",
    },
    layout: {
      spacing: "space-y-6",
      borderRadius: "rounded-lg",
      cardStyle: "shadow-lg border border-gray-700",
    },
  },
  nature: {
    id: "nature",
    name: "Nature",
    description: "Earthy tones inspired by natural elements and landscapes",
    preview: "bg-gradient-to-br from-green-100 to-emerald-50",
    colors: {
      primary: "text-emerald-700",
      secondary: "text-emerald-600",
      accent: "text-amber-600",
      background: "bg-emerald-50",
      card: "bg-white/90",
      text: "text-emerald-950",
      muted: "text-emerald-700/70",
    },
    fonts: {
      heading: "font-medium",
      body: "font-normal",
    },
    layout: {
      spacing: "space-y-6",
      borderRadius: "rounded-lg",
      cardStyle: "shadow-sm border border-emerald-100",
    },
  },
  tech: {
    id: "tech",
    name: "Tech",
    description: "Modern tech-inspired theme with neon accents on dark background",
    preview: "bg-gradient-to-br from-slate-900 to-slate-800",
    colors: {
      primary: "text-cyan-400",
      secondary: "text-slate-300",
      accent: "text-fuchsia-400",
      background: "bg-slate-900",
      card: "bg-slate-800/90",
      text: "text-slate-100",
      muted: "text-slate-400",
    },
    fonts: {
      heading: "font-bold",
      body: "font-normal",
    },
    layout: {
      spacing: "space-y-6",
      borderRadius: "rounded-md",
      cardStyle: "shadow-lg border border-slate-700/50",
    },
  },
  sunset: {
    id: "sunset",
    name: "Sunset",
    description: "Warm gradient colors inspired by sunset skies",
    preview: "bg-gradient-to-br from-orange-100 via-amber-50 to-rose-100",
    colors: {
      primary: "text-rose-600",
      secondary: "text-amber-700",
      accent: "text-orange-500",
      background: "bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50",
      card: "bg-white/80",
      text: "text-gray-900",
      muted: "text-amber-800/70",
    },
    fonts: {
      heading: "font-medium",
      body: "font-normal",
    },
    layout: {
      spacing: "space-y-7",
      borderRadius: "rounded-xl",
      cardStyle: "shadow-md border-0",
    },
  },
  colorful: {
    id: "colorful",
    name: "Creative",
    description: "Vibrant and colorful design for creative professionals",
    preview: "bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100",
    colors: {
      primary: "text-pink-600",
      secondary: "text-purple-600",
      accent: "text-indigo-600",
      background: "bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50",
      card: "bg-white/90",
      text: "text-gray-900",
      muted: "text-gray-600",
    },
    fonts: {
      heading: "font-bold",
      body: "font-normal",
    },
    layout: {
      spacing: "space-y-8",
      borderRadius: "rounded-xl",
      cardStyle: "shadow-md border-0",
    },
  },
  minimal: {
    id: "minimal",
    name: "Minimal",
    description: "Clean and minimal design with lots of white space",
    preview: "bg-white",
    colors: {
      primary: "text-gray-900",
      secondary: "text-gray-700",
      accent: "text-gray-800",
      background: "bg-white",
      card: "bg-gray-50/50",
      text: "text-gray-900",
      muted: "text-gray-500",
    },
    fonts: {
      heading: "font-light",
      body: "font-light",
    },
    layout: {
      spacing: "space-y-12",
      borderRadius: "rounded-none",
      cardStyle: "shadow-none border border-gray-200",
    },
  },
  corporate: {
    id: "corporate",
    name: "Corporate",
    description: "Professional corporate design with navy and gold accents",
    preview: "bg-gradient-to-br from-slate-100 to-blue-50",
    colors: {
      primary: "text-slate-800",
      secondary: "text-slate-600",
      accent: "text-amber-600",
      background: "bg-slate-50",
      card: "bg-white/95",
      text: "text-slate-900",
      muted: "text-slate-600",
    },
    fonts: {
      heading: "font-semibold",
      body: "font-normal",
    },
    layout: {
      spacing: "space-y-6",
      borderRadius: "rounded-md",
      cardStyle: "shadow-sm border border-slate-200",
    },
  },
}

export function getTheme(themeId: string): Theme {
  return THEMES[themeId] || THEMES.default
}

export function getThemeClasses(theme: Theme) {
  return {
    background: theme.colors.background,
    card: `${theme.colors.card} ${theme.layout.cardStyle} ${theme.layout.borderRadius}`,
    heading: `${theme.colors.text} ${theme.fonts.heading}`,
    body: `${theme.colors.text} ${theme.fonts.body}`,
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    accent: theme.colors.accent,
    muted: theme.colors.muted,
    spacing: theme.layout.spacing,
  }
}
