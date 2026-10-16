#!/usr/bin/env bash
set -e

echo "📦 Staging and pushing full redesign to GitHub..."
git add -A
git commit -m "feat: complete redesign matching reference site with borderless assets, splash screen, and luxury editorial style" || true
git push origin main || true

echo "⚡ Deploying to Vercel Production..."
vercel --prod --yes

echo "🎉 Deployment complete!"
