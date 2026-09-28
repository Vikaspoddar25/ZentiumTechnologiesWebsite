---
name: zentium-git-release
description: 'Git/GitHub release practices for the Zentium Technologies website repository (Vikaspoddar25/ZentiumTechnologiesWebsite). Use before any commit or push — verifies remote, branch, diff, validation, and secrets; enforces no force-push, no secret commits, no pushing to other repositories.'
---

# Zentium Git & Release

## Repository

- **Only** `Vikaspoddar25/ZentiumTechnologiesWebsite`. Never push to, or create content
  for, any other repository.
- Note: as of the last verification, this working copy had no `.git` directory
  initialized locally. Confirm the actual git state (`git status`, `git remote -v`)
  before assuming a remote/history exists — do not assume prior instructions apply
  blindly.

## Before pushing

1. **Verify remote** — `git remote -v` must show
   `Vikaspoddar25/ZentiumTechnologiesWebsite` (or no remote yet, if not initialized).
2. **Verify branch** — confirm the current branch is the intended one; never push
   directly to a protected/release branch without explicit instruction.
3. **Review `git status`** — confirm only intended files are staged/changed.
4. **Review the diff** (`git diff` / `git diff --staged`) — confirm no unintended
   changes to unrelated files.
5. **Run validation** — `npm run lint`, `npm run typecheck`, and `npm run build` should
   pass before pushing.
6. **Check for secrets** — no `.env` values, API keys (Resend, Calendly, etc.), or
   tokens in the diff. `.env.example` should only ever contain variable names, not
   values.
7. **Confirm only intended files are changed** — no accidental inclusion of
   `node_modules/`, `.next/`, or local config.

## Never

- Force push (`git push --force` / `--force-with-lease` without explicit user
  confirmation).
- Commit secrets.
- Push to any repository other than `Vikaspoddar25/ZentiumTechnologiesWebsite`.
- Rewrite history (`git rebase` on shared branches, `git commit --amend` on pushed
  commits) without explicit instruction.
- Delete branches automatically.

## Commit messages

- Use meaningful, descriptive commit messages (what changed and why), consistent with
  conventional, readable git history — not generic messages like "update" or "fix".

## Procedure

1. Run `git status` and `git remote -v` first to establish actual repository state.
2. Run lint/typecheck/build.
3. Review the diff for unintended changes and secrets.
4. Stage only the intended files.
5. Commit with a clear message.
6. Push only to the verified remote/branch, never force.
