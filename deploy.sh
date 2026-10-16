#!/usr/bin/env bash
set -e

echo "📦 Staging and pushing full redesign to GitHub..."
git add -A
git commit -m "fix: resolve JSX style property syntax in Footer and deploy editorial redesign" || true
git push origin main || true

echo "⚡ Deploying to Vercel Production..."
vercel --prod --yes

echo "🎉 Deployment complete!"
