export function getAdjacentKeys(data, key) {
    const keys = Object.keys(data); 
    const currentKeyIndex = keys.indexOf(key);

    if (currentKeyIndex < 0) {
        throw new Error("key not found")
    }

    const previousKeyIndex = (currentKeyIndex > 0) ? currentKeyIndex - 1 : (keys.length - 1);
    const nextKeyIndex     = (currentKeyIndex < (keys.length - 1)) ? currentKeyIndex + 1: 0;

    
    return {previousKeyIndex, nextKeyIndex};
}

export function capitalize(string) {
    return string[0].toUpperCase() + string.substring(1);
}