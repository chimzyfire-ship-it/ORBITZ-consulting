#!/usr/bin/env bash
set -e

echo "📦 Staging and pushing mobile optimization and vector arrow fixes to GitHub..."
git add -A
git commit -m "fix(mobile): resolve horizontal overflow and right skew on mobile screens, eliminate iOS emoji arrow rendering with crisp vector ArrowIcon, preserve desktop view 100%" || true
git push origin main || true

echo "⚡ Force deploying to Vercel Production..."
vercel --prod --yes --force

echo "🎉 Deployment complete!"
