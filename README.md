# Abhay Villa

Next.js homepage for Abhay Villa — modular and tiny homes. One route, scroll-driven hero, and the rest of the landing page.

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
npm start
```

Needs Node 20 or newer. No environment variables.

## GitHub

From the project folder:

```bash
git init -b main
git add .
git commit -m "Initial commit"
```

Create an empty GitHub repo named `abhay-villa`, then:

```bash
git remote add origin git@github.com:<your-user>/abhay-villa.git
git push -u origin main
```

The 18MB hero video in `public/experience-v3.mp4` is under GitHub’s file limit.

## Vercel

1. Import the GitHub repo at [vercel.com/new](https://vercel.com/new).
2. Framework Preset: **Next.js**. Leave the root directory as `.`.
3. Do not add environment variables.
4. Deploy.

Vercel will run `npm run build` on every push to `main`. Preview deploys run on other branches.

## Stack

- Next.js 16 App Router
- React 19
- Tailwind CSS 4
- Lenis (desktop smooth scroll)
