/**
 * File 4: AIGenerator.js
 * HAI Intelligence - Automated Design Synthesis
 */
import { ComponentLibrary } from './Library';

export const AIGenerator = {
    generateProject: (userPrompt) => {
        const prompt = userPrompt.toLowerCase();
        let projectLayout = {
            name: "AI Generated Project",
            components: [],
            warnings: []
        };

        // 1. Hospital OT Logic
        if (prompt.includes("hospital") || prompt.includes("ot")) {
            projectLayout.components = [
                { ...ComponentLibrary.medical.ISOLATION_TRANSFORMER, pos: { x: 100, y: 100 } },
                { ...ComponentLibrary.medical.LIM_MONITOR, pos: { x: 250, y: 100 } },
                { name: "Emergency UPS", rating: "10kVA", pos: { x: 400, y: 100 } }
            ];
            projectLayout.notes = "Standard Hospital IPS Layout generated.";
        }

        // 2. High Voltage Substation Logic
        else if (prompt.includes("substation") || prompt.includes("11kv")) {
            projectLayout.components = [
                { ...ComponentLibrary.electrical.TRANSFORMER_HT, pos: { x: 50, y: 200 } },
                { ...ComponentLibrary.electrical.VCB_PANEL, pos: { x: 200, y: 200 } },
                { ...ComponentLibrary.electrical.BUSBAR, pos: { x: 350, y: 200 } }
            ];
            projectLayout.notes = "Industrial HT to LT Distribution Grid generated.";
        }

        // 3. Nano-Technology / Chip Logic
        else if (prompt.includes("chip") || prompt.includes("nano")) {
            projectLayout.components = [
                { ...ComponentLibrary.nano.FINFET_5NM, count: 1000, array: "Grid" },
                { ...ComponentLibrary.nano.LOGIC_GATE_AND, type: "ALU Unit" }
            ];
            projectLayout.notes = "5nm Node Micro-architecture generated.";
        }

        return projectLayout;
    }
};
      
