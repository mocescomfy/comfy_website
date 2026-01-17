# CLAUDE.md - Project Guidelines for Claude Code

## Project Overview

MOCES landing page for the "Zona De(s)conforto" mental health initiative. Built with Astro + TypeScript.

## Figma Design Reference

Main file: https://www.figma.com/design/odanCgLViklOxyQEGP7t5t/Moces_Landing-Page_PA--Copy-?node-id=1-40

## GitHub Issue Template

When creating issues for this project, always use this template:

```markdown
## Description
Clear description of the visual/functional discrepancy

## Expected (from Figma)
What the design should look like

## Actual
What is currently implemented

## Steps to Reproduce
1. Open site at [viewport width]
2. Navigate to [section]
3. Observe [issue]

## Screenshot
[Attach screenshot if applicable]

## Figma Reference
Node ID: [node-id]
Link: [full figma URL with node-id]
```

When creating issues:
- Always look up the corresponding Figma node for the affected section
- Include the Figma node ID and direct link
- Attach screenshots when reporting visual issues
- Specify the viewport width for responsive issues (430px for mobile, 744px for tablet, 1440px for desktop)

## Development Workflow

When picking up a task that involves code changes:

1. **Make the code changes**
2. **Spawn a testing subagent** to verify the changes (saves context)
3. **Review the subagent's report** (pass/fail + summary)
4. **Commit** once verified

### Testing Subagent Instructions

When verifying changes, spawn a `general-purpose` subagent with this prompt:

```
Verify the fix for [issue description]:

1. Start dev server: `npm run dev` (background)
2. Open browser and navigate to [section/URL]
3. Test these viewports:
   - Mobile: 430px width
   - Tablet: 768px width (if relevant)
   - Desktop: 1440px width (if relevant)
4. Take screenshots at each viewport
5. Kill the dev server

Report back:
- PASS/FAIL for each viewport
- Screenshot summary (what you observed)
- Any regressions or issues found
```

This keeps browser interactions and screenshots out of the main context.
