class  JawtSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="bg-carbon-800/50 border border-accent-cyan/20 rounded-lg p-6 mb-8 w-full">
                <h2 class="text-xl font-sans font-semibold mb-4 text-accent-cyan">Jawt</h2>
                <p class="text-gray-300 mb-4">
                  Jawt is my attempt at building a toolchain that allows building minimal web apps with a declarative approach.
                  It uses a custom language called JML to provide a unified development environment
                </p>
                <a href="https://github.com/yasufadhili/jawt" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="inline-flex items-center text-accent-cyan hover:text-accent-cyan/80 transition-colors">
                    <span class="mr-2">View on GitHub</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                </a>
            </div>
        `;
    }
}

customElements.define('yf-jawt-section', JawtSection); 