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

1. **Start the dev server** (`npm run dev`) in the background
2. **Open a browser** and navigate to the relevant section
3. **Set the appropriate viewport** for the issue (430px mobile, 768px tablet, 1440px desktop)
4. **Take a "before" screenshot** to document the issue
5. **Make the code changes**
6. **Refresh and verify** the fix in the browser
7. **Take an "after" screenshot** to confirm the fix
8. **Test other viewports** to ensure no regressions
9. **Kill the dev server** and commit the changes

This ensures all changes are visually verified before committing.
