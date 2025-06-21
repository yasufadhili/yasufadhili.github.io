
export class XJSkillsCloud extends HTMLElement {
  connectedCallback() {
      
      const skills = [
          { name: "Networking", desc: "Protocol design and implementation" },
          { name: "C++", desc: "Performance-driven systems programming with modern standards" },
          { name: "Compilers", desc: "Language front-ends and LLVM-based code generation" },
          { name: "Cyber Security", desc: "Zero trust architectures and threat modeling" },
          //{ name: "TailwindCSS", desc: "Utility-first design systems for the web" },
          //{ name: "BPF/eBPF", desc: "Kernel instrumentation and observability" },
          //{ name: "Language Design", desc: "Creating intuitive and powerful abstractions" },
          //{ name: "Web Components", desc: "Building modular, reusable UI elements" },
          { name: "Wasm", desc: "Web Assembly" },
          { name: "GoLang", desc: "Clean, effective service architecture and networking" },
          { name: "Zero Trust", desc: "Security architecture for modern systems" },
          //{ name: "LLVM", desc: "Compiler infrastructure and optimisation passes" },
          { name: "Linux", desc: "A very cool operating system" },
          { name: "Graph Theory", desc: "Algorithms for complex relationships and paths" },
          { name: "Cryptography", desc: "" }
      ];
      
      
      this.innerHTML = `
          <div class="mb-2 text-center">
              <h3 class="text-xl font-sans font-medium mb-4 text-accent-cyan">Explorations</h3>
              <div class="skills-cloud-container"></div>
          </div>
      `;
      
      const container = this.querySelector('.skills-cloud-container');
      
      
      skills.forEach((skill, index) => {
          // Vary size slightly for visual interest
          //const size = 0.9 + (Math.random() * 0.4); // Between 0.9 and 1.3
          const size = 1.0
          const delay = index * 0.05; // Staggered animation
          
          const tag = document.createElement('div');
          tag.className = 'tag bg-carbon-800 border border-accent-cyan/20 px-3 py-2 rounded-lg text-sm';
          tag.setAttribute('data-desc', skill.desc);
          tag.textContent = skill.name;
          tag.style.transform = `scale(${size})`;
          tag.style.opacity = '0'; // Start invisible for animation
          
          // hover and click effects
          tag.addEventListener('mouseenter', function() {
              this.classList.add('border-accent-cyan/50');
              this.classList.add('text-accent-cyan');
          });
          
          tag.addEventListener('mouseleave', function() {
              this.classList.remove('border-accent-cyan/50');
              this.classList.remove('text-accent-cyan');
          });
          
          tag.addEventListener('click', function(e) {
              // Remove any existing tooltips
              document.querySelectorAll('.skill-tooltip').forEach(el => el.remove());
              
              // Create tooltip
              const tooltip = document.createElement('div');
              tooltip.className = 'skill-tooltip fixed bg-carbon-700 border border-accent-cyan/30 p-3 rounded-lg shadow-lg text-sm max-w-xs z-50';
              tooltip.style.left = (e.pageX) + 'px';
              tooltip.style.top = (e.pageY - 40) + 'px';
              tooltip.textContent = this.getAttribute('data-desc');
              
              document.body.appendChild(tooltip);
              
              // Remove after 2.5 seconds
              setTimeout(() => tooltip.remove(), 2500);
          });
          
          container.appendChild(tag);
          
          // Animate each tag with a delay
          setTimeout(() => {
              tag.style.transition = 'all 0.3s ease-out';
              tag.style.opacity = '1';
              tag.style.transform = `scale(${size}) translateY(0)`;
          }, delay * 1000);
      });
  }
}


customElements.define('yf-skills-cloud', XJSkillsCloud);


export function initSkillsCloud() {
    console.log("...Skills");
    
}