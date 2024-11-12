# Edge Detector

A Visual Studio Code extension that detects if the active editor is at the leftmost or rightmost edge of the window.

## Features

- **Detect Leftmost or Rightmost Editor**: Determines whether the currently active editor is at the leftmost, rightmost, or neither edge of the editor layout.
- **Simple Commands**: Easily invoke the detection through a command.

## Installation

### From VSIX File

1. **Download the Extension**: Obtain the `edge-detector-x.x.x.vsix` file.
2. **Install via Command Palette**:
   - Open VSCode.
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS) to open the Command Palette.
   - Type `Extensions: Install from VSIX...` and select it.
   - Navigate to the location of the `.vsix` file and select it.
3. **Reload VSCode**: After installation, click the **Reload** button when prompted.

## Usage

1. **Open Multiple Editors**:
   - Split your editor horizontally to create multiple columns.
     - Go to `View` > `Editor Layout` > `Split Right` (or use the split editor button).
2. **Focus on an Editor**:
   - Click inside the editor you want to check.
3. **Run the Command**:
   - Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`).
   - Type `Check If Editor Is At Left/Right Edge` and select the command.
4. **View the Result**:
   - An information message will appear displaying one of the following:
     - `leftmost`
     - `rightmost`
     - `leftmost and rightmost` (only one editor open)
     - `not at edge`

## Example

- **Single Editor**:
  - Only one editor is open.
  - Running the command returns: `leftmost and rightmost`.
- **Multiple Editors**:
  - Three editors are open.
  - Active editor is the first one.
  - Running the command returns: `leftmost`.
  - Active editor is the last one.
  - Running the command returns: `rightmost`.
  - Active editor is the middle one.
  - Running the command returns: `not at edge`.

## Known Issues

- **Vertical Position Detection**: Due to limitations in the VSCode API, detecting if the editor is at the topmost or bottommost edge is not supported.
- **Complex Layouts**: In complex editor layouts with both vertical and horizontal splits, the detection may not accurately represent the physical position in the grid.

## Release Notes

### 1.0.0

- Initial release of Edge Detector.
- Supports detection of leftmost and rightmost editor positions.

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests to improve the extension.

1. **Fork the Repository**
2. **Create a Feature Branch**
   - `git checkout -b feature/YourFeature`
3. **Commit Your Changes**
   - `git commit -m 'Add your feature'`
4. **Push to the Branch**
   - `git push origin feature/YourFeature`
5. **Open a Pull Request**

## License

This project is licensed under the [MIT License](LICENSE).

## Author

- **Your Name**
  - [GitHub Profile](https://github.com/your-github-username)
  - [Email](mailto:your-email@example.com)

---

**Enjoy using Edge Detector! If you find it useful, please give it a star on GitHub.**