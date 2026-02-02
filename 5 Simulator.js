/**
 * File 5: Simulator.js
 * Physics-Based Simulation Engine
 */
import { PhysicsEngine } from './MathEngine';

export const SimulationEngine = {
    isRunning: false,
    
    startSimulation: (activeCircuit) => {
        this.isRunning = true;
        console.log("HAI Simulator: Running Physics Checks...");
        
        return activeCircuit.map(comp => {
            // हर कंपोनेंट के लिए लोड और लॉस की लाइव कैलकुलेशन
            const liveCurrent = PhysicsEngine.electrical.calcCurrent(comp.loadKW || 0, comp.voltage || 230);
            const thermalStatus = comp.loadKW > 50 ? "HEATING" : "NORMAL";
            
            return {
                id: comp.id,
                current: liveCurrent.toFixed(2) + "A",
                temp: thermalStatus,
                efficiency: (comp.efficiency * 100) + "%"
            };
        });
    },

    stopSimulation: () => {
        this.isRunning = false;
        return "Simulation Halted.";
    }
};
          
