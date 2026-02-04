/**
 * File 8: VisualSymbols.js
 * SVG Path Data for Professional Engineering Symbols
 */
export const Symbols = {
    // Electrical (HT/LT)
    TRANSFORMER: `<svg viewBox="0 0 100 100"><circle cx="40" cy="50" r="15" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="60" cy="50" r="15" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,
    GROUND: `<path d="M30 70 h40 M40 80 h20 M45 90 h10" stroke="currentColor" fill="none" />`,
    
    // Electronics
    RESISTOR: `<path d="M10 50 h15 l5 -10 l10 20 l10 -20 l10 20 l10 -20 l10 10 h15" stroke="#fbbf24" fill="none" />`,
    CAPACITOR: `<path d="M45 30 v40 M55 30 v40 M10 50 h35 M55 50 h35" stroke="#3b82f6" fill="none" />`,
    
    // Nano-Semiconductor
    LOGIC_AND: `<path d="M30 30 h20 a20 20 0 0 1 0 40 h-20 z" fill="#8b5cf6" opacity="0.5" />`,
    TRANSISTOR_NODE: `<circle cx="50" cy="50" r="5" fill="#ec4899" />`
};
