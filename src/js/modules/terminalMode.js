
export function initTerminalMode() {
    const logo = document.getElementById('logo');
    const terminalMode = document.getElementById('terminal-mode');
    const closeTerminal = document.getElementById('close-terminal');
    const terminalText = document.querySelector('.terminal-text');
    const terminalInput = document.getElementById('terminal-input');
    
    // Set up activation on logo click
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        activateTerminalMode();
    });
    
    // Close terminal mode
    closeTerminal.addEventListener('click', () => {
        terminalMode.classList.add('hidden');
    });
    
    
    function activateTerminalMode() {
        terminalMode.classList.remove('hidden');
        
        
        const text = `> Initiating terminal access protocol...
> Authenticating visitor...
> Access granted to YF systems interface
> Welcome to Singular Surface
> Type 'help' for available commands

Available commands:
- projects    : View current projects
- background  : Display professional background
- contact     : Show contact information
- skills      : List technical competencies
- exit        : Return to standard interface`;
        
        // Simulated typing effect
        let i = 0;
        terminalText.textContent = '';
        
        function typeWriter() {
            if (i < text.length) {
                terminalText.textContent += text.charAt(i);
                terminalText.scrollTop = terminalText.scrollHeight;
                i++;
                setTimeout(typeWriter, Math.random() * 20 + 10);
            } else {
                // Enable input after typing completes
                terminalInput.focus();
            }
        }
        
        typeWriter();
        
        // Handle terminal input
        let commandHistory = [];
        let historyIndex = -1;
        
        document.addEventListener('keydown', handleTerminalKeypress);
        
        function handleTerminalKeypress(e) {
            if (terminalMode.classList.contains('hidden')) return;
            
            if (e.key === 'Enter') {
                const command = terminalInput.textContent.trim();
                if (command) {
                    commandHistory.push(command);
                    historyIndex = commandHistory.length;
                    processCommand(command);
                    terminalInput.textContent = '';
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (historyIndex > 0) {
                    historyIndex--;
                    terminalInput.textContent = commandHistory[historyIndex];
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (historyIndex < commandHistory.length - 1) {
                    historyIndex++;
                    terminalInput.textContent = commandHistory[historyIndex];
                } else {
                    historyIndex = commandHistory.length;
                    terminalInput.textContent = '';
                }
            }
        }
        
        
        function processCommand(cmd) {
            let response = '';
            
            switch(cmd.toLowerCase()) {
                case 'help':
                    response = `Available commands:
- projects    : View current projects
- background  : Display professional background
- contact     : Show contact information
- skills      : List technical competencies
- exit        : Return to standard interface`;
                    break;
                case 'projects':
                    response = ``;
                    break;
                case 'background':
                    response = ``;
                    break;
                case 'contact':
                    response = ``;
                    break;
                case 'skills':
                    response = ``;
                    break;
                case 'exit':
                    terminalMode.classList.add('hidden');
                    document.removeEventListener('keydown', handleTerminalKeypress);
                    return;
                default:
                    response = `Command not recognized: '${cmd}'. Type 'help' for available commands.`;
            }
            
            // Display response
            terminalText.textContent += `\n\nYF@YasuFadhili:~$ ${cmd}\n${response}`;
            terminalText.scrollTop = terminalText.scrollHeight;
        }
    }
} 