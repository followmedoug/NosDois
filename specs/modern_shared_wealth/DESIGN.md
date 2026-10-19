---
name: Modern Shared Wealth
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#404942'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#707971'
  outline-variant: '#c0c9c0'
  surface-tint: '#2d6a48'
  primary: '#003820'
  on-primary: '#ffffff'
  primary-container: '#0f5132'
  on-primary-container: '#84c39b'
  inverse-primary: '#95d4ac'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#1000a8'
  on-tertiary: '#ffffff'
  tertiary-container: '#2e2dbe'
  on-tertiary-container: '#abadff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b0f1c7'
  primary-fixed-dim: '#95d4ac'
  on-primary-fixed: '#002111'
  on-primary-fixed-variant: '#0f5132'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.03em
  currency-display:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an empathetic, secure, and serene atmosphere tailored for modern couples navigating their combined financial lives. Traditional personal finance interfaces often skew stressful, clinical, or overly institutional. In contrast, this aesthetic blends contemporary editorial warmth with fintech precision.

The visual direction centers on **Tactile Modernism & Warm Minimalism**:
- **Clarity over Clutter:** Clear hierarchy, ample negative space, and unambiguous division between individual and shared assets reduce friction and financial anxiety.
- **Trust & Equilibrium:** Deep emeralds anchor the sense of security and long-term prosperity, balanced against refined midnight slate surfaces.
- **Differentiated Ownership:** Soft chromatic tags (subtle mint, dusty rose/lavender, and muted indigo) humanize transaction attribution without visual noise.

## Colors

The palette balances authority and collaborative harmony across key operational roles:

- **Primary (`#0F5132` / Emerald Deep):** Represents growth, wealth accumulation, and primary actions. Accent state uses vibrant emerald (`#059669`) for positive cash flow and milestones.
- **Secondary (`#0F172A` / Midnight Slate):** Anchor tone for primary typography, structural headers, high-emphasis icons, and deep contrast framing.
- **Attribution Tiers (Ownership Tagging):**
  - *Shared / Do Casal:* Mint Foam surface (`#D1FAE5`) paired with Deep Emerald (`#0F5132`) text.
  - *Partner A / Dele:* Soft Indigo surface (`#EEF2FF`) with Rich Indigo (`#4338CA`) text.
  - *Partner B / Dela:* Delicate Lavender Rose surface (`#FDF2F8`) with Berry Mauve (`#9D174D`) text.
- **Background & Canvas:**
  - Base canvas: Pure Bone (`#F8FAFC`).
  - Elevated surfaces: Crisp White (`#FFFFFF`).
  - Subtle borders: Soft Slate (`#E2E8F0`).

## Typography

Typography prioritizes tabular clarity and modern warmth:

- **Headlines (Plus Jakarta Sans):** Geometric yet friendly, lending an accessible, modern, and optimistic quality to milestones, monthly totals, and account names.
- **Body & Data Tables (Inter):** Highly legible, neutral, and consistent at small sizes, with tabular figures (`tnum`) enabled for currency tracking, transaction dates, and split percentages.
- **Hierarchy Scale:** Large metric values use `currency-display` with negative letter tracking to reinforce compact solidity without overflowing dashboard cards.

## Layout & Spacing

The layout follows an adaptive 12-column grid on desktop/tablet and a single-column flex structure on mobile:

- **Desktop (1024px+):** Max-width container of `1280px` centered with `2rem` outer margins and `1.5rem` gutters. Splits dashboard views into a primary dual-overview stream (8 columns) and shared goals/budget rail (4 columns).
- **Tablet (768px - 1023px):** 8 columns with `1.5rem` outer margins. Rails shift into stacked modular segments.
- **Mobile (320px - 767px):** 4 columns or dynamic flex flow with `1rem` outer margins and `1rem` gutters. Quick-action balance switchers stick to bottom navigation zones.
- **Rhythm:** Internal card spacing strictly adheres to `space-md` (`16px`) for standard items and `space-lg` (`24px`) for high-level account overviews.

## Elevation & Depth

Visual hierarchy uses **Soft Ambient Depth** to avoid heavy shadows that create visual clutter in data-dense layouts:

- **Level 0 (Flat Canvas):** `#F8FAFC`, providing a warm slate-tinted ground.
- **Level 1 (Default Cards & Modules):** Pure white surface (`#FFFFFF`) with a delicate border (`1px solid #F1F5F9`) and ultra-diffused shadow: `0 1px 3px rgba(15, 23, 42, 0.04), 0 6px 16px rgba(15, 23, 42, 0.02)`.
- **Level 2 (Active/Hover Cards & Split Modals):** `0 10px 24px -4px rgba(15, 23, 42, 0.06), 0 2px 6px rgba(15, 23, 42, 0.03)`, slightly lifted to indicate interactivity or drag-and-split assignments.
- **Level 3 (Floating Drawers & Modals):** `0 20px 32px -8px rgba(15, 23, 42, 0.12)`, supported by a `backdrop-filter: blur(8px)` with an emerald-slate dark overlay at `30%` opacity.

## Shapes

The design uses balanced, modern curvature that feels approachable without compromising structural stability:

- **Cards & Dashboard Containers:** Rounded with `1rem` (`16px`) to `1.5rem` (`24px`), providing a comfortable, modern framing.
- **Buttons & Form Fields:** Standardized at `0.75rem` (`12px`) for a tactile, friendly shape.
- **Interactive Badges & Attribution Tags:** Fully pill-shaped (`9999px`) to immediately signal category metadata and partner attribution at a glance.

## Components

### Buttons
- **Primary:** Background `#0F5132`, foreground `#FFFFFF`, border-radius `0.75rem`. Hover state shifts to `#059669` with a subtle elevation boost.
- **Secondary / Ghost:** Outlined with `1px solid #CBD5E1`, text `#0F172A`, hover background `#F1F5F9`.
- **Split Action Trigger:** Dual-segmented pill button allowing instant toggling between "50/50", "Proporcional", or "Personalizado".

### Cards
- Constructed on clean `#FFFFFF` with `1px solid #E2E8F0` and Level 1 elevation.
- Internal headers include clear attribution icons in the top-right corner indicating wallet ownership (Shared, Dele, Dela).

### Chips & Attribution Badges
- Pill-shaped (`rounded-full`), `space-xs` vertical padding, `space-sm` horizontal padding.
- Pre-configured color pairings:
  - **Do Casal:** `#D1FAE5` background with `#0F5132` text, accompanied by an overlapping dual-avatar icon.
  - **Dele:** `#EEF2FF` background with `#4338CA` text.
  - **Dela:** `#FDF2F8` background with `#9D174D` text.

### Form Inputs & Selectors
- Background `#FFFFFF` with `1px solid #CBD5E1`, `0.75rem` radius, typography `body-md`. Focus state shows an emerald ring (`2px solid #059669` with `0 0 0 3px rgba(5, 150, 105, 0.15)`).
- Input prefixes for currency (`R$`) rendered in muted slate (`#64748B`) using `label-md`.

### Split Transaction Slider
- Custom multi-thumb slider showing contribution balance between partners. The active track features a gentle gradient between the individual partner accent colors with a centered indicator mark at 50%.

### Progress & Goal Trackers
- Background track `#E2E8F0`, height `8px` or `12px` with `rounded-full`.
- Segmented fill: Filled dual-color bars representing respective contributions from each partner towards a combined objective (e.g., reserve fund or travel goal).