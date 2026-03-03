// "Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order."

// Example:
// Input: ["act", "pots", "tops", "cat", "stop", "hat"]
// Output: [["hat"], ["act", "cat"], ["stop", "pots", "tops"]]

function groupAnagrams(strs) {

    const map = new Map();

    for ( let str of strs) {
        const key = str.split('').sort().join('');
        if(!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }

    return Array.from(map.values());
}

const strn = ["act", "pots", "tops", "cat", "stop", "hat"];
console.log(groupAnagrams(strn));