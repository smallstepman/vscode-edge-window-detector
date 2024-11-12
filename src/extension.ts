import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposableLeftRight = vscode.commands.registerCommand('edge-detector.checkLeftRightEdge', () => {
        const position = checkLeftRightEdge();

        vscode.window.showInformationMessage(position);
    });

    context.subscriptions.push(disposableLeftRight);
}

function checkLeftRightEdge(): string {
    const activeEditor = vscode.window.activeTextEditor;
    if (!activeEditor) {
        return 'No active editor found.';
    }

    const activeColumn = activeEditor.viewColumn;

    // Get all visible editors
    const editors = vscode.window.visibleTextEditors;
    const columns = editors
        .map(editor => editor.viewColumn)
        .filter((vc): vc is number => vc !== undefined);

    const minColumn = Math.min(...columns);
    const maxColumn = Math.max(...columns);

    let positions: string[] = [];

    if (activeColumn === minColumn) {
        positions.push('leftmost');
    }
    if (activeColumn === maxColumn) {
        positions.push('rightmost');
    }

    if (positions.length === 0) {
        return 'not at edge';
    } else {
        return positions.join(' and ');
    }
}

// this method is called when your extension is deactivated
export function deactivate() {}
