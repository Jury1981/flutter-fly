# Contributing to Flutter Fly

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

-   Reporting a bug
-   Discussing the current state of the code
-   Submitting a fix
-   Proposing new features
-   Becoming a maintainer

## We Develop with Github

We use github to host code, to track issues and feature requests, as well as accept pull requests.

## We Use [Github Flow](https://guides.github.com/introduction/flow/index.html) with Some Changes, So All Code Changes Happen Through Pull Requests

Pull requests are the best way to propose changes to the codebase (we use [Github Flow](https://guides.github.com/introduction/flow/index.html)). We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`.
2. Write clear meaningful git commit messages (try use commintlint rules).
3. Always create PR to `main` branch.
4. Make sure your code lints.
5. Issue that pull request!

## Any contributions you make will be under the MIT Software License

In short, when you submit code changes, your submissions are understood to be under the same [MIT License](https://github.com/Jury1981/flutter-fly/blob/main/LICENSE) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report bugs using Github's [issues](https://github.com/Jury1981/flutter-fly/issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/Jury1981/flutter-fly/issues/new); it's that easy!

## License

By contributing, you agree that your contributions will be licensed under its [MIT License](https://github.com/Jury1981/flutter-fly/blob/main/LICENSE).

---

## 🚀 About Flutter Fly

**Flutter Fly** is the ultimate Flutter development companion for VSCode, transformed from the original "Wireless ADB" extension. It provides comprehensive Flutter development capabilities including:

- **Flutter Development Workflow** - Doctor, SDK management, package management
- **Building & Compiling** - APK, AAB, iOS, and Web builds
- **Running & Debugging** - Multiple run modes and device management
- **Wireless Connectivity** - WiFi debugging and device management
- **Code Quality** - Formatting, analysis, and cleanup tools

## 🎯 Development Focus

When contributing to Flutter Fly, please focus on:

1. **Flutter Development Experience** - Enhancing Flutter workflow
2. **User Experience** - Making commands intuitive and beautiful
3. **Performance** - Ensuring fast and responsive operation
4. **Cross-Platform Support** - Maintaining Windows, macOS, and Linux compatibility
5. **Device Management** - Improving wireless connectivity and device handling
6. **Error Handling** - Providing helpful error messages and recovery guidance
7. **ADB Integration** - Enhancing Android device management capabilities



## 📝 Commit Guidelines

We use conventional commits with emojis. Use the commitizen tool:

```bash
npm run cm
```

Or manually follow this format:
- ✨ `feat:` New features
- 🐛 `fix:` Bug fixes
- 📝 `docs:` Documentation updates
- 🧪 `test:` Test improvements
- 🔧 `chore:` Maintenance tasks
- ♻️ `refactor:` Code refactoring
- 🎨 `style:` Code style changes

## 🚀 Publishing

When ready to publish:

1. **Update version** in package.json
2. **Update CHANGELOG.md** with new features
3. **Run tests** to ensure everything works
4. **Package the extension:**
   ```bash
   npm run vscode:prepublish
   ```

## 🔧 Current Development Status (v1.1.2)

### **Recently Completed Updates**
- ✅ **Status Bar Integration** - Real-time device connection status in VS Code status bar with quick actions
- ✅ **ADB Auto-Detection** - Automatic ADB path detection across Windows, macOS, and Linux
- ✅ **Dynamic Project Detection** - Automatic Flutter project detection with file watcher
- ✅ **Dark Mode Support** - Complete dark theme with toggle buttons in both panels
- ✅ **Three-Column Layout** - Professional layout with Device | Commands | Quick Actions
- ✅ **Enhanced Responsive Design** - Automatic layout adaptation for all screen sizes
- ✅ **CSS Variables** - Flexible theming system for easy customization
- ✅ **Better Error Handling** - Improved guidance when ADB or devices not found
- ✅ **Persistent Preferences** - Dark mode setting saved in localStorage
- ✅ **Version Bump** - Updated to version 1.1.2 for marketplace release

## 🔧 Previous Development Status (v1.1.1)

### **Previously Completed Updates**
- ✅ **README Enhancement** - Complete documentation update with visual troubleshooting guide
- ✅ **Screenshot Integration** - All 12 device setup screenshots properly integrated with correct URLs
- ✅ **Setup Guide Demo** - Added comprehensive setup guide GIF to main demo section
- ✅ **Visual Layout Improvements** - Enhanced 3-column grid layout for better user experience
- ✅ **Resource Documentation** - Added important steps, panel interface, and feature showcase images
- ✅ **URL Standardization** - Fixed all image URLs to use consistent GitHub raw URL format
- ✅ **File Path Corrections** - Updated all screenshot references to match actual repository files
- ✅ **Documentation Consistency** - Ensured all files reflect latest troubleshooting features

## 🔧 Previous Development Status (v1.1.0)

### **Previously Completed Updates**
- ✅ **Device Setup Troubleshooting Guide** - Comprehensive visual guide for enabling wireless debugging
- ✅ **Automatic Error Detection** - Guide opens automatically when ADB connection fails
- ✅ **3-Column Grid Layout** - Organized step-by-step presentation for better user experience
- ✅ **Multiple Access Points** - Available via main panel, command palette, sidebar, and auto-trigger
- ✅ **Screenshot Integration** - All 11 setup screenshots properly integrated with responsive design
- ✅ **Command Registration** - New `flutterFly.showTroubleshootingGuide` command properly registered
- ✅ **Version Bump** - Updated to version 1.1.0 for marketplace release
- ✅ **Documentation Updates** - All files updated with new troubleshooting guide features

## 🔧 Previous Development Status (v1.0.8)

### **Recently Completed Updates**
- ✅ **Size Optimization** - Reduced package size by implementing bundle optimization
- ✅ **Performance Boost** - Improved loading times with compressed assets
- ✅ **Bundle Configuration** - Added webpack bundling for better performance
- ✅ **Asset Compression** - Implemented GIF and image compression
- ✅ **Package Structure** - Optimized file structure and dependencies
- ✅ **Version Bump** - Updated to version 1.0.8 with size improvements
- ✅ **Build Process** - Enhanced build pipeline for smaller output

## 🔧 Previous Development Status (v1.0.7)

### **Recently Completed Updates**
- ✅ **Enhanced UI/UX** - Completely redesigned panel interface and improved sidebar
- ✅ **Command Registration Fix** - Fixed command registration issues for packaged extensions
- ✅ **Packaging Issues Resolved** - Fixed extension packaging and activation problems
- ✅ **Better Error Handling** - Enhanced error handling and user feedback
- ✅ **Debug Logging** - Added comprehensive logging for better debugging
- ✅ **Version Bump** - Updated to version 1.0.7 for marketplace release
- ✅ **Documentation Updates** - All files updated to reflect new version and features

## 🔧 Current Development Status (v1.0.6)

### **Recently Completed Updates**
- ✅ **Enhanced UI/UX** - Completely redesigned panel interface and improved sidebar
- ✅ **Command Registration Fix** - Fixed command registration issues for packaged extensions
- ✅ **Packaging Issues Resolved** - Fixed extension packaging and activation problems
- ✅ **Better Error Handling** - Enhanced error handling and user feedback
- ✅ **Debug Logging** - Added comprehensive logging for better debugging
- ✅ **Version Bump** - Updated to version 1.0.6 for marketplace release
- ✅ **Documentation Updates** - All files updated to reflect new version and features

## 🔧 Previous Development Status (v1.0.5)

### **Previously Completed Updates**
- ✅ **Logo Update** - New modern logo design implemented
- ✅ **Version Bump** - Updated to version 1.0.5 for marketplace release
- ✅ **Documentation Updates** - All files updated to reflect new version
- ✅ **Asset Refresh** - Updated project media files and branding

## 🔧 Current Development Status (v1.0.4)

### **Recently Completed Updates**
- ✅ **Logo Update** - New modern logo design implemented
- ✅ **Version Bump** - Updated to version 1.0.4 for marketplace release
- ✅ **Documentation Updates** - All files updated to reflect new version
- ✅ **Asset Refresh** - Updated project media files and branding

### **Previously Fixed Issues (v1.0.3)**
- ✅ **Command Registration Conflicts** - Resolved duplicate command registration
- ✅ **Controller Initialization** - Fixed startup and activation issues
- ✅ **Demo Data Removal** - Eliminated fake devices, now shows real ADB devices
- ✅ **ADB Integration** - Complete ADB path detection and availability checking
- ✅ **UI Restoration** - Social links and developer branding restored
- ✅ **Error Handling** - Comprehensive error recovery and user guidance

### **Current Focus Areas**
- 🎯 **User Experience** - Enhanced panel interface and sidebar improvements
- 🎯 **Extension Stability** - Improved command registration and activation
- 🎯 **Error Handling** - Better error recovery and user guidance
- 🎯 **Documentation** - Keeping all guides up-to-date with new features
- 🎯 **Performance** - Optimizing extension performance and reliability

### **Known Working Features**
- 🚀 **Panel Interface** - Beautiful webview panel with Bootstrap 5
- 📱 **Device Connection** - Wireless Android device connection
- 🏗️ **Flutter Commands** - Doctor, packages, build tools
- 🔥 **Firebase Integration** - Debug mode toggling
- 🎨 **Social Integration** - GitHub, LinkedIn, Portfolio links
- 🎨 **New Logo** - Fresh, modern visual identity

### **Areas for Improvement**
- 🔍 **Device Discovery** - Network device scanning capabilities
- 📊 **Analytics** - Usage statistics and performance metrics
- 🧪 **Testing** - Comprehensive test coverage
- 📚 **Documentation** - User guides and tutorials

## 🆘 Getting Help

### **Before Contributing**
1. **Check existing issues** - Your bug might already be reported
2. **Read the documentation** - COMMAND_GUIDE.md and README.md
3. **Test the latest version** - Ensure you're working with current code

### **When Contributing**
1. **Follow the existing code style** - Maintain consistency
2. **Add tests** for new functionality
3. **Update documentation** for any changes
4. **Test thoroughly** before submitting

### **Need Help?**
- 📖 [Command Guide](COMMAND_GUIDE.md) - How to add/edit commands
- 🐛 [Report Issues](https://github.com/Jury1981/flutter-fly/issues)
- 💬 [Ask Questions](https://github.com/Jury1981/flutter-fly/discussions)

---

*Thank you for contributing to Flutter Fly! 🚀*

*Transformed from Wireless ADB to Flutter Fly by Jam Ali Hassan*

*Current version: 1.1.2 - Enhanced with StatusBar integration, ADB auto-detection, dynamic project detection, dark mode, and three-column layout!*
