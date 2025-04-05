
export function initCommandPalette() {
    const commandPalette = document.getElementById('command-palette');
    const commandInput = document.getElementById('command-input');
    
    // Command palette keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Command palette shortcut (Cmd+K or /)
        if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || e.key === '/') {
            e.preventDefault();
            toggleCommandPalette();
        }
        
        // Easter egg keyboard shortcuts
        if (!e.ctrlKey && !e.metaKey && !e.altKey) {
            if (e.key === 'g') {
                window.open('https://github.com', '_blank');
            } else if (e.key === 'c') {
                document.getElementById('cv-link').click();
            } else if (e.key === 'k') {
                document.getElementById('kiswahili-link').click();
            }
        }
    });
    
    // Toggle command palette visibility
    function toggleCommandPalette() {
        commandPalette.classList.toggle('active');
        if (commandPalette.classList.contains('active')) {
            commandInput.focus();
        }
    }
    
    // Add click events to command items
    document.querySelectorAll('.command-item').forEach(item => {
        item.addEventListener('click', () => {
            const command = item.getAttribute('data-command');
            executeCommand(command);
        });
    });
    
    
    function executeCommand(command) {
        switch(command) {
            case 'github':
                window.open('https://github.com', '_blank');
                break;
            case 'cv':
                document.getElementById('cv-link').click();
                break;
            case 'code':
                document.getElementById('code-link').click();
                break;
            case 'kiswahili':
                document.getElementById('kiswahili-link').click();
                break;
        }
        toggleCommandPalette();
    }
    
    // Click outside to close command palette
    document.addEventListener('click', (e) => {
        if (commandPalette.classList.contains('active') && 
            !commandPalette.contains(e.target) && 
            e.target.id !== 'command-input') {
            commandPalette.classList.remove('active');
        }
    });
} 