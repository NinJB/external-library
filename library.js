/******************************************************************************************************/

/*library.js - uses extra or more tools for random number generator - different algorithms etc.*/
/*It is almost similar to security-fix.js, but this one has more randomization methods*/

/******************************************************************************************************/

/**
 * Generates a cryptographically secure random integer between min and max.
 * @param {number} min - The minimum value (inclusive).
 * @param {number} max - The maximum value (exclusive).
 * @returns {number} - A secure random number.
 */

/******************************************************************************************************/

export function getSecureRandomInt(min, max) {
    if (typeof min !== "number" || typeof max !== "number" || min >= max) {
        throw new Error("Invalid range: min must be less than max.");
    }

    const randomBuffer = new Uint32Array(1);
    window.crypto.getRandomValues(randomBuffer);
    const randomNumber = randomBuffer[0] / (0xFFFFFFFF + 1);

    return Math.floor(randomNumber * (max - min) + min);
}

/******************************************************************************************************/

/**
 * Generates a secure random float between 0 and 1.
 * @returns {number} - A random float between 0 (inclusive) and 1 (exclusive).
 */

export function getSecureRandomFloat() {
    const randomBuffer = new Uint32Array(1);
    window.crypto.getRandomValues(randomBuffer);
    return randomBuffer[0] / (0xFFFFFFFF + 1);
}

/******************************************************************************************************/

/**
 * Generates a secure random UUID (v4).
 * @returns {string} - A securely generated UUID.
 */

export function generateSecureUUID() {
    return crypto.randomUUID();
}

/******************************************************************************************************/
