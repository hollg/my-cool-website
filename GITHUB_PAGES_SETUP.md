# GitHub Pages Configuration

This document explains how to configure and deploy this website to GitHub Pages.

## Overview

This repository uses GitHub Actions to automatically deploy the website to GitHub Pages whenever changes are pushed to the `main` branch.

## Configuration Steps

### 1. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/hejfelix/my-cool-website`
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

### 2. Workflow Details

The deployment workflow is defined in `.github/workflows/deploy-pages.yml` and includes:

- **Trigger**: Automatically runs on push to the `main` branch
- **Manual trigger**: Can also be triggered manually via the Actions tab
- **Permissions**: Configured to write to GitHub Pages and handle id-tokens
- **Concurrency**: Only one deployment runs at a time

### 3. Deployment Process

The workflow performs the following steps:
1. Checks out the repository code
2. Configures GitHub Pages settings
3. Uploads all files in the repository as an artifact
4. Deploys the artifact to GitHub Pages

### 4. Accessing Your Site

Once deployed, your site will be available at:
```
https://hejfelix.github.io/my-cool-website/
```

### 5. Manual Deployment

To manually trigger a deployment:
1. Go to the **Actions** tab in your repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow"
4. Select the branch and click "Run workflow"

## Workflow File

The workflow file is located at `.github/workflows/deploy-pages.yml`

## Troubleshooting

### Deployment fails
- Check that GitHub Pages is enabled in repository settings
- Verify that the workflow has the correct permissions
- Review the Actions logs for specific error messages

### Site not updating
- Ensure changes are pushed to the `main` branch
- Check the Actions tab to see if the workflow ran successfully
- GitHub Pages may take a few minutes to update after deployment

## Requirements

- Repository must be public (or you must have GitHub Pro/Team/Enterprise for private repos)
- GitHub Pages must be enabled in repository settings
- Workflow must have appropriate permissions to deploy

## Support

For issues with GitHub Pages, refer to the [GitHub Pages documentation](https://docs.github.com/en/pages).
