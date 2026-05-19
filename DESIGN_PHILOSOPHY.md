# CRF Enterprise Design Philosophy

## Design Movement
**Dark Luxury Enterprise** — Palantir + Anduril + Stripe fusion. Premium, minimalist, motion-forward.

## Core Principles
1. **Trust through clarity** — Government buyers need instant confidence. No clutter.
2. **Motion as communication** — Animations reinforce professionalism, not distract.
3. **Hierarchy over decoration** — Typography and spacing do the work, not gradients.
4. **Accessibility first** — Government contractors must meet WCAG standards.

## Color Philosophy
- **Primary Dark**: `#0a0e27` (deep navy, authority, security)
- **Accent Blue**: `#00d9ff` (cyan, innovation, energy)
- **Accent Blue Alt**: `#0099ff` (trust, reliability)
- **White/Light**: `#f5f5f5` (clarity, readability)
- **Muted**: `#6b7280` (secondary text, restraint)

**Emotional Intent**: Cool, intelligent, secure. Blue = government/tech trust. Cyan = cutting-edge innovation.

## Layout Paradigm
- **Hero**: Full-screen, asymmetric. Image on right, content left. Parallax on scroll.
- **Services**: 2-column grid on desktop, 1-column mobile. Cards with hover lift.
- **About**: Split layout. Text left, visual right. Alternating on scroll.
- **Contact**: Minimal form, centered, glassmorphism container.

**Anti-pattern**: Avoid centered, symmetrical layouts. Use asymmetry for sophistication.

## Signature Elements
1. **Glassmorphism navbar** — Frosted glass effect, sticky, minimal.
2. **Cyan accent lines** — Underlines, borders, dividers. Consistent throughout.
3. **Motion cards** — Hover: lift + glow. Click: expand. Smooth easing.

## Interaction Philosophy
- **Hover states**: Scale 1.02, shadow increase, cyan glow.
- **Click feedback**: Scale 0.98, instant response.
- **Scroll triggers**: Fade-in, slide-up animations. Staggered for groups.
- **Form interactions**: Floating labels, focus glow, smooth transitions.

## Animation Guidelines
- **Entrance**: 300-400ms, ease-out. Stagger by 50-80ms for groups.
- **Hover**: 150-200ms, cubic-bezier(0.23, 1, 0.32, 1).
- **Modals/Forms**: 250-350ms, smooth ease-in-out.
- **Never animate**: Keyboard shortcuts, high-frequency interactions.

## Typography System
- **Display**: `Sora` or `Space Mono` (bold, 48-72px) — Headlines, hero.
- **Body**: `Inter` (regular, 14-16px) — Copy, descriptions.
- **Mono**: `JetBrains Mono` (code, metrics) — Technical, trustworthy.

**Hierarchy**:
- H1: 64px, bold, tracking -1px
- H2: 48px, semi-bold, tracking -0.5px
- H3: 32px, semi-bold
- Body: 16px, regular, line-height 1.6
- Small: 14px, regular, muted

## Visual Assets
- Generated hero images: Futuristic, dark, blue-cyan accents
- Services section: Abstract tech visualizations
- About section: Infrastructure, security, reliability themes
- No stock photos — all custom generated or minimal placeholders
