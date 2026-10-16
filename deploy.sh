#!/usr/bin/env bash
set -e

echo "📦 Staging and pushing configuration update to GitHub..."
git add -A
git commit -m "fix: next.config.mjs build settings for vercel" || true
git push origin main || true

echo "⚡ Deploying to Vercel Production..."
vercel --prod --yes

echo "🎉 Deployment complete!"
