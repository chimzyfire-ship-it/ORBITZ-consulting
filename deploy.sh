#!/usr/bin/env bash
set -e

echo "🚀 Initializing Git repository for ORBITZ Consulting Ltd..."
git init
git add -A
git commit -m "feat: complete ORBITZ Consulting Ltd platform with splash screen, interactive inquiry & multi-page architecture"

echo "📦 Creating GitHub repository and pushing main branch..."
gh repo create ORBITZ-consulting --public --source=. --remote=origin --push || git push -u origin main

echo "⚡ Deploying to Vercel Production..."
vercel --prod --yes

echo "✅ All done! ORBITZ Consulting Ltd is live."
