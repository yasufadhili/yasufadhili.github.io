
import { XJCtaLinks, initCtaLinks } from '../components/cta-links.js';
import { XJSkillsCloud, initSkillsCloud } from '../components/skills-cloud.js';

export function initComponents() {
    
    initCtaLinks();
    initSkillsCloud();
    
    // This would be a good place to add any global component interactions
    console.log('Web components initialized');
} 