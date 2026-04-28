# Implementation Plan: Interactive Spline Robot in Hero Section

## Overview
Replace the static cockpit visual in the hero section with an interactive 3D Spline robot that responds to cursor movement. This enhances user engagement and modernizes the hero visual from a workflow diagram to a living AI presence.

## Changes Summary

### 1. Dependencies
Install two new npm packages:
- `@splinetool/react-spline` - React wrapper for Spline scenes
- `@splinetool/runtime` - Spline runtime library

**Command:**
```bash
npm install @splinetool/react-spline @splinetool/runtime
```

### 2. New Components

#### A. `components/ui/splite.tsx`
- Lazy-loaded Spline scene wrapper component
- Implements Suspense with loading fallback
- Props: `scene` (URL string) and `className` (optional)
- Handles the actual 3D rendering

#### B. `components/ui/spotlight.tsx`
- Aceternity spotlight effect (SVG-based, static)
- Creates a glowing spotlight that animates behind the robot
- Props: `className`, `fill` (default: white)
- Positioned absolutely behind the Spline scene

### 3. Modified Files

#### A. `app/globals.css`
**Add to `@layer utilities` section:**
- `@keyframes animate-spotlight` - Smooth fade-in and scale animation for the spotlight SVG
- Animate opacity from 0 to 1 and scale from 0.5 to 1
- Duration: 3 seconds with infinite loop

#### B. `components/HeroSection.tsx`
**Remove:**
- `HeroCockpit` component (static message flow visual)
- `AssistantIcon` component

**Update:**
- Left column copy:
  - New headline: "Your AI front desk, live 24/7" (or similar, based on user preference)
  - Subheadline: Updated to emphasize always-on availability and instant responses
  - Keep CTA and trust note as-is
- Right column visual:
  - Replace `<HeroCockpit />` with `SplineScene` component
  - Wrap in `Card` component with dark background
  - Add `Spotlight` component behind the scene
  - Height: 500px (matches demo)
  - Apply responsive sizing for mobile

**New imports:**
- `SplineScene` from `@/components/ui/splite`
- `Spotlight` from `@/components/ui/spotlight`
- `Card` (already imported)

### 4. Styling Details

**Spotlight SVG:**
- Fill color: white (default, matches existing brand aesthetic)
- Background color: `bg-black/[0.96]` (matches hero background `#0A0A0A`)
- Border: Optional (recommend removing for seamless integration)

**Card Container:**
- Use existing `.glass-strong` utility for glassmorphism effect
- Dimensions: Full width, 500px height on desktop, responsive on mobile
- Rounded corners: `rounded-2xl` (consistent with existing design)

**Text Hierarchy:**
- Headline gradient: `from-foreground to-primary` (white to purple)
- Maintains current typography scale and spacing

### 5. Spline Scene
**Default URL:**
```
https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode
```
- Features: Interactive 3D robot that responds to mouse movement
- Can be replaced with custom scene if available

### 6. Implementation Order
1. Install npm dependencies
2. Create `components/ui/splite.tsx`
3. Create `components/ui/spotlight.tsx`
4. Add keyframe animation to `app/globals.css`
5. Update `components/HeroSection.tsx`
6. Build and test responsive behavior

## Files Affected
- `package.json` - Dependencies added
- `app/globals.css` - New keyframe animation
- `components/HeroSection.tsx` - Complete rewrite of visual section
- `components/ui/splite.tsx` - New file
- `components/ui/spotlight.tsx` - New file

## Testing Checklist
- [ ] Desktop: Robot renders at 500px height
- [ ] Tablet: Responsive layout adjustment
- [ ] Mobile: Stack layout with proper sizing
- [ ] Spotlight animation plays smoothly
- [ ] Mouse tracking works on the Spline scene
- [ ] No console errors or warnings
- [ ] Build completes without errors
- [ ] Performance: Page loads efficiently

## Backwards Compatibility
- No breaking changes to existing components
- All new components are self-contained
- Existing hero section functionality (CTA, trust note) preserved
- No changes to data models or API integration

## Notes
- Spline scenes require client-side rendering (marked with `'use client'`)
- Spotlight animation uses CSS keyframes for optimal performance
- Consider lazy loading for Spline to reduce initial bundle impact
- The interactive robot enhances visual engagement while maintaining conversion-focused CTA placement
