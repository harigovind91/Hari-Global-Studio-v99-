/**
 * File 2: Library.js
 * Universal Component Database for Electrical, Electronics & Nano-Tech
 */

export const ComponentLibrary = {
    // 1. High Tension / Low Tension Components
    electrical: {
        TRANSFORMER_HT: { 
            name: "Step-Down Transformer", 
            inputKV: 11, outputV: 415, 
            efficiency: 0.98, icon: "transformer_ht_icon" 
        },
        VCB_PANEL: { 
            name: "Vacuum Circuit Breaker", 
            rating: "630A", protection: "Overcurrent/Earth Fault" 
        },
        BUSBAR: { 
            name: "Copper Busbar", 
            ampacity: "1000A", material: "Cu" 
        }
    },

    // 2. Semiconductor / Nano-Tech Components
    nano: {
        FINFET_5NM: { 
            name: "5nm Transistor", 
            v_threshold: 0.3, capacitance: 1e-18, // 1 Attofarad
            thermal_limit: "125C" 
        },
        LOGIC_GATE_AND: { 
            name: "AND Gate", 
            propagation_delay: "10ps", power_consumption: "2nw" 
        }
    },

    // 3. Medical/Hospital Specific
    medical: {
        ISOLATION_TRANSFORMER: { 
            name: "IPS Transformer", 
            leakage_limit: "500uA", isolation_v: "4000V" 
        },
        LIM_MONITOR: { 
            name: "Line Isolation Monitor", 
            threshold: "5mA", alarm: true 
        }
    }
};
      
