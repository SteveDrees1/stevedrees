// helper.js

// Function to fetch data from an API
export const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

// Function to save data to local storage
export const saveToLocalStorage = (key, value) => {
    try {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(key, serializedValue);
    } catch (error) {
        console.error('Error saving to local storage:', error);
    }
};

// Function to load data from local storage
export const loadFromLocalStorage = (key) => {
    try {
        const serializedValue = localStorage.getItem(key);
        return serializedValue ? JSON.parse(serializedValue) : null;
    } catch (error) {
        console.error('Error loading from local storage:', error);
        return null;
    }
};

// Function to format dates in a readable format
export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

// Debouncing is a programming practice used to ensure that ime-consumings tasks do not fire so often, which can improve performance in certain situations like search input fields.
export const debounce = (func, delay) => {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};

//A function to format numbers as currency
export const formatCurrency = (amount, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency
    }).format(amount);
};

// Validates whether a string is a valid email format
export const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

// A generic function to sort and array of objects based on specific object key
export function sortArrayByKey(array, key) {
    return array.sort((a, b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0));
}


// Creates a deep clone of an object. Useful for avoiding unintended side effects when modifying objects.
export function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Extracts query parameters from a URL and return them as ann object.
export function getQueryParams(url) {
    const params = {};
    new URL(url).searchParams.forEach((value, key) => {
        params[key] = value;
    });
    return params;
}

// A function to check if an object is empty (has no properties)
export function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
}

// A function to add or remove an element from an array, commonly used in situations like logging selected items in a list.
export function toggleElementInArray(array, element) {
    const index = array.indexOf(element);
    if (index === -1) {
        return [...array, element];
    } else {
        return array.filter((item) => item !== element);
    }
}

// Useful for generating unique identifiers, often needed for key props in lists or for managing items without a natural ID.
export function generateUniqueId() {
    return Math.random().toString(36).substring(2, 9);
}

// Converts and object into an array of its values or key-value pairs, useful in various data transformation scenarios.
export function objectToArray(obj, keyValuePair = false) {
    return keyValuePair ? Object.entries(obj) : Object.values(obj);
}

// Filters and object based on a set of keys, returning a new object with only the specified keys.
export function filterObjectByKey(obj, keys) {
    return keys.reduce((result, key) => {
        if (obj[key]) {
            result[key] = obj[key];
        }
        return result;
    }, {});
}

// Combines multiple class names into a single string, useful for dynamically setting CCS classes.
export function mergeClassNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

// Dynamically sets the document title, useful for single-page applications where the title might change based on the current view.
export function setDocumentTitle(title) {
    document.title = title;
}

//Safely parses a JSON string, avoiding exceptions on invalid JSON.
export function parseJSONSafely(jsonString, fallback = {}) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        return fallback;
    }
}

// A simple function to scroll the window back to the top, which can be useful in single-page applications after navigation.
export function scrollToTop() {
    window.scrollTo(0, 0);
}

//A function to format a date object to a specified pattern, such as 'YYYY-MM-DD'
export function formatDateToPattern(date, pattern = 'YYYY-MM-DD') {
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(date))
        .replace(/(\d{2})\/(\d{2})\/(\d{4})/, (match, month, day, year) => {
            return pattern
                .replace('YYYY', year)
                .replace('MM', month)
                .replace('DD', day);
        });
}

// Quickly check if a given date is today
export function isToday(date) {
    const today = new Date();
    return date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();
}

// Convert a size in bytes to a more readable format (KB, MB, GB, etc.)
export function bytesToSize(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Byte';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

// Validate a URL:
export function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

// Truncate a string to a specified length and append an ellipsis('...')
export function truncateString(str, num) {
    if (str.length <= num) {
        return str;
    }
    return str.slice(0, num) + '...';
}

// Copy a given text to the clipboard
export function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        console.log('Text successfully copied to clipboard');
    }).catch(function(err) {
        console.error('Unable to copy text to clipboard', err);
    });
}

// Determine if the user is on a mobile device.
export function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Generate Random Hex Color
export function generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Useful for situations where you need a random item from an array
export function getRandomArrayElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Eliminates duplicates from an array, returning only unique elements.
export function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Converts RGB color values to a hex color code
export function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Extracts parameters from a URL and returns them as an object.
export function getURLParams(url) {
    const params = {};
    new URL(url).searchParams.forEach((value, key) => {
        params[key] = value;
    });
    return params;
}

// Formats a number with commas as thousands separators.
export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Checks if a string is a valid JSON format
export function isJSONString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

// Calculates are given the date of birth
export function calculateAge(dob) { // dob in YYYY-MM-DD format
    const diffMs = Date.now() - new Date(dob).getTime();
    const ageDt = new Date(diffMs);
    return Math.abs(ageDt.getUTCFullYear() - 1970);
}

// Converts a string to titleCase
export function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        (txt) => {
            return txt.charAt(0).toUpperCase() + txt.toLowerCase();
        }
    );
}

// A function to create a delay in an async function.
export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Useful for displaying numbers with a fixed length, by adding leading zeros if necessary.
export function padNumber(number, length) {
    return String(number).padStart(length, '0');
}

// Convert String to Slug
export function stringToSlug(str) {
    return str.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}

export function getFileExtension(filename) {
    return filename.split('.').pop();
}

export function isArrayEmpty(arr) {
    return Array.isArray(arr) && arr.length === 0;
}

export function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Converts temperature between Celsius and Fahrenheit
export function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

export function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Checks if a current page is loaded over HTTPS.
export function isHttps() {
    return window.location.protocol === 'https:';
}

// Formats a JavaScript Date object to a time string (e.g., '10:30 AM').
export function formatTime(date) {
    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
    });
}

// Extracts the domain name from a given URL
export function extractDomain(url) {
    return new URL(url).hostname;
}

// Merges two objects deeply, combining their properties
export function deepMergeObjects(target, source) {
    for (const key in source) {
        if (source[key] instanceof Object) {
            Object.assign(source[key], deepMergeObjects(target[key], source[key]));
        }
    }

    Object.assign(target || {}, source);
    return target;
}
