# Rayzen - URL Bookmark Manager

> Organize your URLs in folders - inspired by the lack of this feature in Zen Browser

<img width="701" height="403" alt="image" src="https://github.com/user-attachments/assets/b56fc07a-6cbc-475d-8248-821a36c206fb" />
This is light theme version (WIP)

## 📦 Installation

Currently, we don't have a working installer (.msi). Please follow the **Build from Source** instructions below.

## 🛠 Build from Source

### Prerequisites

Make sure you have all the required tools installed:

#### 1. **Node.js** (v18 or higher)
```bash
# Download from: https://nodejs.org/
# Or using winget (Windows):
winget install OpenJS.NodeJS

# Verify installation:
node --version
npm --version
```

#### 2. **Rust** (v1.70 or higher)
```bash
# Install Rust:
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs/ | sh

# On Windows, download from: https://rustup.rs/
# Or using winget:
winget install Rustlang.Rustup

# Restart terminal and verify:
rustc --version
cargo --version
```

#### 3. **Bun** (JavaScript runtime)
```bash
# Install Bun:
curl -fsSL https://bun.sh/install | bash

# On Windows:
powershell -c "irm bun.sh/install.ps1 | iex"

# Or using npm:
npm install -g bun

# Verify installation:
bun --version
```

#### 4. **Git**
```bash
# Download from: https://git-scm.com/
# Or using winget (Windows):
winget install Git.Git

# Verify installation:
git --version
```

#### 5. **Additional Windows Requirements**
```bash
# Visual Studio Build Tools (for Rust compilation):
winget install Microsoft.VisualStudio.2022.BuildTools

# Or download from: https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022
```

### Installation Steps

#### 1. **Clone the Repository**
```bash
git clone https://github.com/yourusername/rayzen.git
cd rayzen
```

#### 2. **Install Dependencies**
```bash
# Install JavaScript dependencies
bun install

# Install Rust dependencies (automatically handled by Tauri)
cd src-tauri
cargo fetch
cd ..
```

#### 3. **Setup Database**
```bash
# SQLite database will be created automatically on first run
# No additional setup required
```

#### 4. **Build the Application**

**For Development:**
```bash
# Run in development mode (with hot reload)
bun tauri dev
```

**For Production:**
```bash
# Build optimized version
bun tauri build

# The executable will be created at:
# src-tauri/target/release/rayzen.exe (Windows)
# src-tauri/target/release/rayzen (Linux/macOS)
```

#### 5. **Run the Application**

After building, you can find the executable in:
- **Windows**: `src-tauri/target/release/rayzen.exe`
- **macOS**: `src-tauri/target/release/rayzen`
- **Linux**: `src-tauri/target/release/rayzen`

Simply double-click the executable or run it from terminal.

## 🔧 Troubleshooting

### Common Issues

#### **Issue: `cargo` command not found**
```bash
# Make sure Rust is properly installed and restart your terminal
source ~/.cargo/env  # On macOS/Linux
# On Windows, restart Command Prompt/PowerShell
```

#### **Issue: `bun` command not found**
```bash
# Make sure Bun is in your PATH
# On Windows, restart terminal after installation
# Try using npm instead:
npm install -g bun
```

#### **Issue: Build fails with "link.exe not found"**
```bash
# Install Visual Studio Build Tools (Windows only):
winget install Microsoft.VisualStudio.2022.BuildTools
# Then restart terminal and try again
```

#### **Issue: Permission denied (Linux/macOS)**
```bash
# Make sure you have proper permissions:
sudo chown -R $(whoami) ~/.cargo
chmod +x src-tauri/target/release/rayzen
```

#### **Issue: Database errors**
```bash
# Delete the database file and restart:
# Windows: %APPDATA%/rayzen/
# macOS: ~/Library/Application Support/rayzen/
# Linux: ~/.local/share/rayzen/
```

### Build-specific Issues

#### **Issue: Frontend build fails**
```bash
# Clear cache and rebuild:
rm -rf node_modules dist .solid
bun install
bun run build
```

#### **Issue: Tauri build fails**
```bash
# Clean Rust build cache:
cd src-tauri
cargo clean
cd ..
bun tauri build
```

## 📋 System Requirements

### Minimum Requirements
- **OS**: Windows 10 (64-bit), macOS 10.15+, or Linux (Ubuntu 18.04+)
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 1GB free space
- **Internet**: Required for initial setup and dependencies

### Development Requirements
- **Node.js**: v18 or higher
- **Rust**: v1.70 or higher  
- **Bun**: Latest version
- **Git**: Any recent version

## 🚀 Quick Start (TL;DR)

```bash
# 1. Install prerequisites (Node.js, Rust, Bun, Git)
# 2. Clone and build:
git clone https://github.com/yourusername/rayzen.git
cd rayzen
bun install
bun tauri build

# 3. Run the executable:
# Windows: ./src-tauri/target/release/rayzen.exe
# macOS/Linux: ./src-tauri/target/release/rayzen
```

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/rayzen/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/rayzen/discussions)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Made with ❤️ by Sani Devuong**
