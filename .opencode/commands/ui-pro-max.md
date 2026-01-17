---
description: Iterative UI/UX proposals (5-6 options) using ui-ux-pro-max; implement only after user confirms
---

# UI Pro Max: Design Options → Confirm → Implement

Use `ui-ux-pro-max` as the source of truth for design rules, tokens, and recommendations.

**Input:**
<ui_request>$ARGUMENTS</ui_request>

## Goal

- Ask the user targeted questions (use the Question tool) to understand the UI scope and constraints.
- Produce **5-6 best-fit UI directions** (Option A–F), each with a coherent mini design system.
- Iterate based on user feedback (tight loop).
- **Do not implement** until the user explicitly confirms the final direction.

## Step 0: Ask targeted questions (mandatory)

Use the **Question tool** (multiple-choice where possible). Keep it short; **2 rounds max**.

### Round 1 (required)

Ask these in a single Question tool call:
- **UI scope**: Page / Component / Flow
- **UI surface**: Marketing / App (authenticated) / Admin
- **Stack**: `html-tailwind` / `react` / `nextjs` / `vue` / `svelte` / `shadcn`
- **Brand constraints**:
  - Brand colors: Yes / No
  - Dark mode: Required / Optional / No
  - Accessibility target: WCAG AA (default) / WCAG AAA / Not sure
- **References available**: Yes / No

If user selects "Yes" for references or brand colors: ask them to paste links/colors in plain text.

### Round 2 (optional, only if style unclear)

Ask these in a second Question tool call:
- **Vibe**: Minimal / Professional / Playful / Luxury / Brutalist / Glass / Other
- **Density**: Compact / Balanced / Spacious
- **Corners**: Sharp / Slightly rounded / Rounded
- **Motion**: None / Subtle / Lively

Rule: if the user gives strong brand constraints, prefer fewer questions and move to options.

## Step 1: Load UI/UX knowledge (mandatory)

Read: `.opencode/skills/ui-ux-pro-max/SKILL.md`

Rules:
- Always start with `--design-system` to get a full design system recommendation.
- Default accessibility target: WCAG 2.1 AA.
- Keep options realistic and implementable in the chosen stack.

## Step 2: Generate design-system baseline (mandatory)

Run the skill search (Windows-friendly order: `py` → `python` → `python3`):

```bash
py .opencode/skills/ui-ux-pro-max/scripts/search.py "<product_type> <industry> <keywords>" --design-system -p "<project name>"
# or
python .opencode/skills/ui-ux-pro-max/scripts/search.py "<product_type> <industry> <keywords>" --design-system -p "<project name>"
# or
python3 .opencode/skills/ui-ux-pro-max/scripts/search.py "<product_type> <industry> <keywords>" --design-system -p "<project name>"
```

Optionally, fetch extra details when needed:

```bash
py .opencode/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain style
py .opencode/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain typography
py .opencode/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain color
py .opencode/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain ux
py .opencode/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --stack <stack>

# If `py` is unavailable, use `python` or `python3`.
```

## Step 3: Propose 5–6 UI directions (A–F)

Produce **Option A–F**. Each option must be clearly distinct (style and/or palette and/or typography) but still appropriate for the project.

Each option must include:
- **Style name** + 1–2 sentence rationale
- **Color tokens**: background/surface/text/primary/secondary/success/warning/error
- **Typography**: heading + body (and sizes for H1/H2/body)
- **Spacing/radius/shadow**: base spacing scale + radius + elevation rules
- **Component tokens**:
  - Button (primary/secondary/ghost)
  - Input (default/focus/error)
  - Card
  - Modal
  - Navbar/Sidebar (if relevant)
- **UX notes**: loading/empty states, form errors, touch targets, focus ring
- **Implementation notes** for chosen stack (e.g., Tailwind tokens or component library mapping)

Return a compact comparison table first:

```markdown
## UI Directions (pick 1–2 to refine)

| Option | Style | Palette | Typography | Best For | Risk |
|-------:|------|---------|------------|----------|------|
| A | ... | ... | ... | ... | ... |
| B | ... | ... | ... | ... | ... |
| C | ... | ... | ... | ... | ... |
| D | ... | ... | ... | ... | ... |
| E | ... | ... | ... | ... | ... |
| F | ... | ... | ... | ... | ... |
```

Then detail each option with tokens.

## Step 4: Feedback loop (mandatory)

Use the Question tool for a tight iteration loop:

### Round 1: Pick candidates

Ask:
- Pick **Top 1** option (A–F)
- Optionally pick **Top 2** (for hybrid)

### Round 2: Apply adjustments

Ask (multi-select allowed):
- Density: more compact / more spacious
- Contrast: higher / lower
- Corners: sharper / rounder
- Motion: none / subtle / more lively
- Hybrid: swap palette / swap typography / swap layout structure

Then produce an updated recommendation:
- Either finalize one option, or propose a clear hybrid (e.g., "A style + C palette + B typography").

Repeat until user says: **"final"**.

## Step 5: Implementation gate (blocking)

When the user confirms a final direction:
1. Restate the final design system in 5–8 bullets.
2. Ask explicitly: **"Implement now? (Yes/No)"**

If **No**: stop.

If **Yes**:
- Implement with minimum viable change, following existing project patterns.
- No new dependencies unless user approves.
- Prefer updating existing components/tokens.

(Recommended) Trigger implementation via `.opencode/commands/code.md` with a short implementation brief containing:
- Selected option summary
- Files to change (to be discovered)
- Verification checklist (responsive + a11y + visual)

## Output format

- `✓ Questions captured: <summary>`
- `✓ UI directions proposed: A–F`
- `✓ User selection: <A|B|C|D|E|F|Hybrid>`
- `✓ Implement now: yes|no`
