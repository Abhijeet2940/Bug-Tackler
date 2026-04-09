export const saveToLocalStorage = (state) => {

    try {
        const serialized = JSON.stringify(state);
        localStorage.setItem('bugTacklerState', serialized);
    } catch (e) {
        console.error('Failed to save state to localStorage:', e);
    }
};

export const loadFromLocalStorage = () => {
    try {
        const serialized = localStorage.getItem('bugTacklerState');
        if (serialized === null) return null;
        return JSON.parse(serialized);
    } catch (e) {
        console.error('Failed to load state from localStorage:', e);
        return null;
    }
};

export const clearLocalStorage = () => {
    try {
        localStorage.removeItem('bugTacklerState');
    } catch (e) {
        console.error('Failed to clear state from localStorage:', e);
    }
};
