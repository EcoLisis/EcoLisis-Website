# Contributing to EcoPolis Website

First off, thank you for considering contributing to EcoPolis! 🌱

Following these guidelines helps communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

## Code of Conduct

This project and everyone participating in it is governed by respect, inclusivity, and professionalism. By participating, you are expected to uphold this code.

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps to reproduce the problem**
* **Provide specific examples** - Include screenshots if relevant
* **Describe the behavior you observed** and what you expected
* **Include browser/OS information**

### 💡 Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

* **Use a clear and descriptive title**
* **Provide a detailed description** of the suggested enhancement
* **Explain why this enhancement would be useful**
* **List some examples** of how it would be used

### 🎨 Your First Code Contribution

Unsure where to begin? You can start by looking through `good-first-issue` and `help-wanted` issues.

### 📝 Pull Requests

1. **Fork the repository** and create your branch from `master`
2. **Make your changes** in your fork
3. **Test your changes** thoroughly
4. **Update documentation** if needed
5. **Follow the code style** of the project
6. **Write clear commit messages**
7. **Submit your pull request**

## Development Process

### Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/EcoLisis-Website.git
cd EcoLisis-Website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Making Changes

1. Create a branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit:
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

3. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Open a Pull Request

### Commit Message Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

* `feat:` - New feature
* `fix:` - Bug fix
* `docs:` - Documentation only changes
* `style:` - Formatting, missing semi-colons, etc
* `refactor:` - Code change that neither fixes a bug nor adds a feature
* `perf:` - Performance improvement
* `test:` - Adding tests
* `chore:` - Updating build tasks, package manager configs, etc

Examples:
```
feat: add dark mode toggle
fix: resolve navbar overlap issue on mobile
docs: update installation instructions
style: format code with prettier
refactor: simplify image loading logic
perf: optimize font loading
```

## Code Style Guidelines

### HTML
* Use semantic HTML5 elements
* Include ARIA labels for accessibility
* Use descriptive alt text for images
* Maintain proper heading hierarchy (h1 → h2 → h3)

### CSS
* Use meaningful class names
* Avoid !important unless absolutely necessary
* Group related properties together
* Add comments for complex styles
* Use CSS custom properties for repeated values

### JavaScript
* Use ES6+ features (const/let, arrow functions, etc.)
* Write JSDoc comments for functions
* Handle errors gracefully with try-catch
* Keep functions small and focused
* Use meaningful variable names

### Accessibility
* Ensure keyboard navigation works
* Maintain sufficient color contrast (WCAG 2.1 AA)
* Test with screen readers
* Include focus indicators
* Add skip links where appropriate

### Performance
* Optimize images before committing
* Lazy load images where appropriate
* Minimize dependencies
* Test on slower connections

## Testing

Before submitting a PR:

1. **Test locally**
   ```bash
   npm run dev
   ```

2. **Test production build**
   ```bash
   npm run build
   npm run preview
   ```

3. **Test on multiple browsers** (Chrome, Firefox, Safari, Edge)

4. **Test on mobile devices** or use browser dev tools

5. **Run accessibility checks** (Lighthouse, axe DevTools)

## Questions?

Feel free to contact us at akourtisdev@gmail.com or open an issue for discussion.

## Recognition

Contributors will be recognized in the project's README and release notes.

---

Thank you for contributing to a more sustainable future! 🌍💚
