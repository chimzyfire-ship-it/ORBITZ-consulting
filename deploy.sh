#!/usr/bin/env bash
set -e

echo "📦 Staging and pushing logo & splash screen enhancements to GitHub..."
git add -A
git commit -m "feat: enhance logo sizing, royal blue and gold accents, and center logo animation in splash screen" || true
git push origin main || true

echo "⚡ Force deploying to Vercel Production..."
vercel --prod --yes --force

echo "🎉 Deployment complete!"
