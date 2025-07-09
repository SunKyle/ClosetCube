# Project Name

This is a WeChat Mini Program project, including basic pages and component structure, suitable for rapid development and deployment of WeChat Mini Program applications.

## Project Introduction

This project provides a basic framework, including a launch page, home page, navigation bar component, and project configuration files, making it convenient for developers to build upon. The overall structure is clear and suitable for use as an enterprise-level mini program or learning template.

## Directory Structure

```
├── components
│   └── navigation-bar         # Custom navigation bar component
├── pages
│   ├── home                    # Home module
│   ├── index                   # Main page module
│   ├── launch                  # Launch page module
│   └── main                    # Main framework module
├── .eslintrc.js                # ESLint configuration file
├── .vscode/settings.json       # VSCode editor settings
├── app.js                      # Mini program entry logic
├── app.json                    # Mini program global configuration
├── app.wxss                    # Global style file
├── project.config.json         # Project configuration file
├── project.private.config.json # Private configuration file (used when not committed)
└── sitemap.json                # Mini program page path list configuration
```

## Installation Guide

1. Install the [WeChat Developer Tools](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
2. Open the project and import the root directory of this repository
3. Set up the project's basic information according to the configuration in `project.config.json`
4. Use the developer tools to compile and preview the project

## Usage Instructions

- **Page Navigation**: A unified navigation bar style is implemented through `components/navigation-bar`.
- **Style Management**: `app.wxss` provides global style definitions, while individual pages can use `page.wxss` for local styles.
- **Page Structure**: Each page contains four files: `.js`, `.json`, `.wxml`, and `.wxss`, which handle logic, configuration, structure, and styling respectively.

## Contribution Guide

Code contributions are welcome. Please follow these steps:
1. Fork this repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push the branch (`git push origin feature/your-feature`)
5. Create a Pull Request

## License

This project uses the MIT License. For details, please refer to the LICENSE file in the repository.