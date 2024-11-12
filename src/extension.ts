import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // Initial update of context variables
    updateEdgeContext();

    // Listen to changes in active editor
    vscode.window.onDidChangeActiveTextEditor(() => {
        updateEdgeContext();
    });

    // Listen to changes in visible editors (e.g., when an editor is closed)
    vscode.window.onDidChangeVisibleTextEditors(() => {
        updateEdgeContext();
    });

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

function updateEdgeContext() {
    const activeEditor = vscode.window.activeTextEditor;
    if (!activeEditor) {
        // No active editor, reset context variables
        vscode.commands.executeCommand('setContext', 'edgeDetector.isLeftmost', false);
        vscode.commands.executeCommand('setContext', 'edgeDetector.isRightmost', false);
        // let position = `no position`
        // vscode.window.showInformationMessage(position);
        return;
    }
 
    const activeColumn = activeEditor.viewColumn;

    // Get all visible editors
    const editors = vscode.window.visibleTextEditors;
    const columns = editors
        .map(editor => editor.viewColumn)
        .filter((vc): vc is number => vc !== undefined);

    const minColumn = Math.min(...columns);
    const maxColumn = Math.max(...columns);

    const isLeftmost = activeColumn === minColumn;
    const isRightmost = activeColumn === maxColumn;

    // Set context variables
    vscode.commands.executeCommand('setContext', 'edgeDetector.isLeftmost', isLeftmost);
    vscode.commands.executeCommand('setContext', 'edgeDetector.isRightmost', isRightmost);
    // let position = `${isLeftmost} ${isRightmost}`
    // vscode.window.showInformationMessage(position);
}

// This method is called when your extension is deactivated
export function deactivate() {}
