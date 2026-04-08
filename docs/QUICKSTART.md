# Quickstart

Get the curriculum site running on your machine in **under five minutes**.

## 1. Prerequisites

- [Node.js](https://nodejs.org/) **20** or newer (LTS recommended)
- Git (to clone the repo)

## 2. Install and run

```bash
cd seattle-cursor-vibe-week
npm install
npm run dev
```

Open **http://localhost:3000** in your browser.

## 3. What to click first

1. **Home** — Scroll the overview or use the **Sections** menu (mobile) / left sidebar (desktop).
2. **Day 1** — Use the header links **D1** … **D7** or go to `/day/1`.
3. **Playbook** — `/playbook` for copy-paste prompts (browser tool, subagents, PR hygiene).

## 4. Optional: point GitHub links to your fork

```bash
echo 'NEXT_PUBLIC_GITHUB_REPO_URL=https://github.com/YOU/seattle-cursor-vibe-week' > .env.local
```

Restart `npm run dev`.

## 5. Production check (optional)

```bash
npm run build
npm run start
```

Visit http://localhost:3000 again and spot-check `/day/3`, `/playbook`, `/logistics`.

## Troubleshooting

| Issue | Try |
|--------|-----|
| Port 3000 in use | `npx next dev -p 3001` |
| `npm install` fails | Delete `node_modules` and `package-lock.json`, run `npm install` again |
| Stale build | `rm -rf .next` then `npm run build` |

For deeper setup and deployment, see [TUTORIAL.md](TUTORIAL.md).
