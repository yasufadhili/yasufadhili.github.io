
export function initDateHex() {

    const updateDateHex = () => {
        const now = new Date();
        const hex = now.getTime().toString(16).slice(-8).toUpperCase();
        document.getElementById('date-hex').textContent = '0x' + hex;
    };
    
    updateDateHex();
    setInterval(updateDateHex, 1000);
} 