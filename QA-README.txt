KIRAN SHARMA PORTFOLIO — REPAIR PASS (2026-10-16)

Changes in this pass:
- Rebuilt malformed skill-chip markup into 14 balanced, non-interactive skill labels.
- Removed unverified skill claims from the skills list (candidate shortlisting, employee query support, hiring-manager coordination, confidential HR documentation, and similar claims not confirmed in the supplied history).
- Retained only supported skills: candidate sourcing, resume screening, campus recruitment support, student coordination, interview scheduling, hiring follow-ups, recruitment coordination, onboarding support, HR documentation, payroll support, Excel-based HR reporting, stakeholder communication, workflow coordination, and intermediate Excel (formulas, lookups, PivotTables, charts).
- Changed the LinkedIn display to a real external anchor with target=_blank and rel=noopener noreferrer.
- Updated page title, meta description and footer for Talent Acquisition, HR Operations, HR Generalist and HR Analytics.
- Renamed the project filter label from “Learning” to “HR Analytics”.
- Removed the unsupported “CURRENT” badge from the MBA entry and neutralised the hero copy pending confirmation of MBA status.
- Updated the static build for GitHub Pages base path /Kiran/.

Static QA:
- Build succeeded with NEXT_PUBLIC_BASE_PATH=Kiran.
- JavaScript syntax check passed.
- 18 static QA checks passed: HTML parsing, unique IDs, internal anchors, chip markup/categories, LinkedIn anchor attributes, metadata, MBA status label, project modal data, project filter categories, lifecycle tab structure and ARIA references, modal dialog semantics, responsive breakpoints, keyboard event handling and visible focus styles.

Not verified / manual confirmation still required:
- User-confirmed LinkedIn URL: https://www.linkedin.com/in/sharmaakiran. The portfolio uses this URL as a real external anchor with target=_blank and rel=noopener noreferrer. Link syntax/destination string is confirmed by the user; independent page ownership and successful live navigation have not been verified in this environment.
- User-confirmed education details (2026-10-16): MBA status is STILL PURSUING; official title supplied as “MBA (HR & Finance)”; master’s title supplied as “M.Sc. Applied Microbiology & Biotechnology”; bachelor’s title supplied as “B.Sc. Biotechnology”. Portfolio now displays the MBA as “Pursuing” rather than completed/current. Institution and date ranges remain as previously listed and should still be checked against official documents if exact credential verification is required.
- A full interactive browser pass (opening each modal, operating each filter/tab with real input, and visual inspection at desktop/mobile sizes) could not be run because Chromium navigation is blocked by the execution environment. The source handlers and static structure were checked, but this is not a substitute for live browser testing.
- The resume PDF in public/assets remains the previously supplied version; it has not been regenerated or synchronised with the confirmed MBA status/titles and LinkedIn details. Update the resume before publishing if it should match the portfolio.
- Not deployed. The archive contains source and generated static output; publish only after the remaining confirmations and live browser QA.


FOLLOW-UP UPDATE (2026-10-16)
- Applied user-confirmed MBA status: still pursuing.
- Applied user-supplied degree labels: MBA (HR & Finance), M.Sc. Applied Microbiology & Biotechnology, B.Sc. Biotechnology.
- Confirmed LinkedIn URL string with user: https://www.linkedin.com/in/sharmaakiran; ownership and live reachability remain unverified.
- Remaining release blockers: synchronize embedded resume, run full interactive browser QA for modals/filters/lifecycle tabs, inspect responsive layout and keyboard accessibility in a real browser, and deploy only after QA passes.


CONTENT COPY UPDATE (2026-10-16)
- Rewrote the hero summary to be concise while covering recruitment coordination, onboarding, payroll support, Excel reporting and transferable editorial strengths.
- Rewrote the About section in third-person/neutral wording; its sentences do not begin with “My”, “Me”, or “I”.
- Preserved factual scope: sourcing, resume screening, student/campus coordination, interview scheduling, hiring follow-ups, onboarding support, payroll support and Excel reporting; added no unconfirmed metrics or outcomes.

HR CASE STUDIES CONTENT + DESIGN UPDATE (2026-10-16)
- Reframed the section introduction around four self-initiated case studies and explicitly stated that they remain in development.
- Expanded and clarified the planned brief for all four projects: workforce dashboard, recruitment funnel analysis, onboarding experience and candidate experience journey.
- Each modal now has a sharper problem question, a transparent method, planned deliverables, tool guidance and a build plan that includes validation and limitations.
- Replaced “PLACEHOLDER DELIVERABLES” with “PLANNED DELIVERABLES” and “BUILD CHECKLIST” with “BUILD PLAN”.
- Added a restrained “IN DEVELOPMENT” label to each card, preserving the portfolio's muted editorial palette and existing visual motifs.
- Kept all claims prospective: no completed outputs, company data, measured outcomes or business impact are claimed. Synthetic data is explicitly labelled for the analytics projects.
- Static build and JavaScript syntax checks passed. Static checks confirmed four project cards, populated modal data fields, four development labels and unique HTML IDs.
- Real-browser modal/filter interaction, responsive visual inspection and keyboard testing remain outstanding; this update does not imply those manual checks were completed.


HR CASE STUDY UPDATE — 2026-10-16
---------------------------------
Completed downloadable work samples were added for:
- Recruitment Funnel Analysis (synthetic data; workbook + dashboard)
- Employee Onboarding Experience (reusable workbook template)
- Candidate Experience Journey (Word/PDF report and communication templates)

The Workforce Intelligence Dashboard remains in development.
The three completed project cards now expose their work sample links in the
project detail modal. This portfolio update does not claim real employer results.
Static build, JavaScript syntax, and HTML structure checks must be run before
release. Browser-level visual and interaction testing remains a separate step.


Three-project release: see PROJECT-QA-REPORT.txt for static build checks, scope, and browser testing limitations.
