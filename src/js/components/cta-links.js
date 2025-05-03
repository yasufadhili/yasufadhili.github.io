
export class XJCtaLinks extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
          <div class="flex flex-wrap justify-center gap-4">
              <a href="https://github.com/yasufadhili" target="_blank" id="github-link" class="bg-carbon-800 hover:bg-carbon-700 border border-gray-700 hover:border-accent-cyan/50 px-6 py-3 rounded-lg hover:scale-105 transition-all duration-150 flex items-center gap-2">
                  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub
              </a>
              <a href="/cv.html" id="cv-link" class="bg-carbon-800 hover:bg-carbon-700 border border-gray-700 hover:border-accent-cyan/50 px-6 py-3 rounded-lg hover:scale-105 transition-all duration-150 flex items-center gap-2">
                  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  CV
              </a>
              <a href="#code" id="code-link" class="bg-carbon-800 hover:bg-carbon-700 border border-gray-700 hover:border-accent-cyan/50 px-6 py-3 rounded-lg hover:scale-105 transition-all duration-150 flex items-center gap-2">
                  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                  Code
              </a>
              <!--
              <a href="#kiswahili" id="kiswahili-link" class="bg-carbon-800 hover:bg-carbon-700 border border-gray-700 hover:border-accent-cyan/50 px-6 py-3 rounded-lg hover:scale-105 transition-all duration-150 flex items-center gap-2">
                  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  Kiswahili Map
              </a>
              -->
          </div>
      `;
  }
}


customElements.define('yf-cta-links', XJCtaLinks);


//export function initCtaLinks() {}