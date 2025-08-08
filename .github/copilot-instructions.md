# GitHub Copilot Instructions for VitePress Documentation Site

## Repository Overview

This is a VitePress-based documentation site using Vue 3 with the following technology stack:
- **VitePress**: Static site generator for documentation
- **Vue 3**: JavaScript framework for interactive components
- **Yarn**: Package manager (v1.22.19)
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Algolia**: Search integration

## Critical Commands & Timeouts

### NEVER CANCEL THESE COMMANDS
Always use adequate timeouts and NEVER cancel the following operations:

#### Package Management
```bash
yarn install
```
- **Timeout**: 180 seconds minimum
- **Expected time**: 30-60 seconds
- **NEVER CANCEL**: Dependencies installation is critical

#### Build Process
```bash
yarn run build
```
- **Timeout**: 180 seconds minimum
- **Expected time**: 7-10 seconds
- **Output**: Creates optimized production build in `/dist`
- **NEVER CANCEL**: Build process generates critical assets

#### Development Server
```bash
yarn run dev
```
- **Timeout**: Use async=true with 30+ second delays
- **Expected behavior**: Starts server at http://localhost:5173/
- **Status**: Ready when "Local: http://localhost:5173/" appears
- **NEVER CANCEL**: Dev server needs time to initialize

#### Preview Server
```bash
yarn run preview
```
- **Timeout**: Use async=true with 30+ second delays
- **Purpose**: Preview production build locally
- **NEVER CANCEL**: Preview server startup takes time

## Code Quality Commands

### Linting
```bash
yarn run eslint
```
- **Timeout**: 120 seconds
- **Expected behavior**: Will show linting errors (known issues exist)
- **Note**: ESLint currently reports errors in source files and dist folder
- **Action**: Focus only on fixing new errors you introduce

### Code Formatting
```bash
yarn run prettier-check
```
- **Timeout**: 120 seconds
- **Purpose**: Check code formatting consistency
- **Note**: Repository has existing formatting issues (143 files)

```bash
yarn run prettier-write
```
- **Timeout**: 120 seconds
- **Purpose**: Auto-fix formatting issues
- **Use**: Only when specifically requested or for new files

## Directory Structure

### Source Files
- `/src/`: Main documentation content (Markdown files)
- `/.vitepress/`: VitePress configuration and theme
- `/.vitepress/config.js`: Main configuration file
- `/.vitepress/nav.json`: Navigation structure
- `/.vitepress/sidebar.js`: Sidebar configuration
- `/.vitepress/theme/`: Custom theme components

### Build Output
- `/dist/`: Generated build files (DO NOT EDIT MANUALLY)
- Contains optimized assets and generated pages

### Configuration Files
- `package.json`: Dependencies and scripts
- `yarn.lock`: Locked dependency versions
- `eslint.config.js`: ESLint configuration
- `.prettierrc.json`: Prettier configuration

## Development Guidelines

### Working with Documentation
1. **Content location**: All documentation files are in `/src/`
2. **Markdown format**: Use standard markdown with VitePress extensions
3. **Navigation**: Update `/.vitepress/nav.json` for new sections
4. **Sidebar**: Modify `/.vitepress/sidebar.js` for page organization

### Build Process Validation
1. Always run `yarn run build` after content changes
2. Verify build completes successfully (6-10 seconds expected)
3. Check for any build errors or warnings
4. Test with `yarn run preview` if needed

### Development Server Testing
1. Start with `yarn run dev` (use async=true)
2. Wait for "Local: http://localhost:5173/" message
3. Allow 30+ seconds for initial startup
4. Verify site loads correctly
5. Test navigation and search functionality

### Code Quality Checks
1. Run `yarn run eslint` before committing
2. Focus only on NEW errors in files you modified
3. Ignore existing errors in dist folder and other files
4. Run `yarn run prettier-check` for formatting validation

## File Modification Guidelines

### Documentation Files
- **Location**: `/src/` directory and subdirectories
- **Format**: Markdown (.md) with VitePress frontmatter
- **Images**: Store in appropriate subdirectories
- **Links**: Use relative paths for internal links

### Configuration Changes
- **Navigation**: Edit `/.vitepress/nav.json`
- **Sidebar**: Edit `/.vitepress/sidebar.js`
- **Site config**: Edit `/.vitepress/config.js`
- **Theme**: Modify files in `/.vitepress/theme/`

### DO NOT MODIFY
- `/dist/` directory (build output)
- `yarn.lock` (unless updating dependencies)
- `.git/` directory

## Testing & Validation Scenarios

### Content Changes
1. Edit markdown file in `/src/`
2. Run `yarn run build` (180s timeout)
3. Verify build success
4. Test with `yarn run dev` (async=true)
5. Validate content renders correctly

### Navigation Updates
1. Modify `/.vitepress/nav.json` or `sidebar.js`
2. Run `yarn run build` (180s timeout)
3. Test navigation in dev server
4. Verify all links work correctly

### Theme Customizations
1. Edit files in `/.vitepress/theme/`
2. Run `yarn run build` (180s timeout)
3. Test with `yarn run dev` (async=true)
4. Verify visual changes are correct

## Common Issues & Solutions

### Build Failures
- Check for markdown syntax errors
- Verify all links are valid
- Ensure images exist at specified paths
- Check frontmatter YAML syntax

### ESLint Errors
- Focus on errors in files you're modifying
- Ignore dist folder errors (they're generated)
- Fix undefined variables and unused imports
- Follow Vue 3 and VitePress conventions

### Development Server Issues
- Allow adequate startup time (30+ seconds)
- Check for port conflicts (5173)
- Restart server if hot reload stops working
- Use `yarn run preview` for production testing

## Command Execution Rules

### Always Use Timeouts
- **Short commands**: 120 seconds minimum
- **Build/Install**: 180 seconds minimum
- **Dev server**: Use async=true with delays

### Never Cancel
- Package installation (`yarn install`)
- Build process (`yarn run build`)
- Server startup (dev/preview)
- Large file operations

### Error Handling
- Read error messages completely
- Focus on actionable errors only
- Ignore pre-existing issues unless specifically requested
- Test changes incrementally

## Algolia Search Integration

The site includes Algolia search functionality:
- Configuration in `/.vitepress/config.js`
- Search index is managed externally
- Test search functionality after content changes
- Verify search results are relevant and up-to-date

Remember: This is a documentation site where content quality and user experience are paramount. Always validate changes thoroughly and maintain the existing site structure unless specifically requested to modify it.