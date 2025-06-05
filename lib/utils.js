import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import CryptoJS from 'crypto-js';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export const customEncodeString = (inputString) => {
    // Step 1: Generate a random number between 1 and 9
    const randomNum = Math.floor(Math.random() * 9) + 1;

    // Step 2: Define the first array and fetch the required indices
    // DEV
    const randomIndices = [38, 17, 3, 46, 31, 25, 43, 22, 14, 0, 8, 41, 24, 7, 9, 37, 27, 5, 20, 35, 13, 30, 19, 48, 10, 29, 44, 45, 15, 26, 33, 12, 49, 4, 42, 18, 21, 6, 39, 47, 40, 32, 23, 34, 2, 11, 16, 1, 28, 26];

    const fetchIndices = randomIndices.slice(randomNum - 1, randomIndices.length);

    // Step 3: Define the second array and fetch the corresponding values
    // DEV
    const randomValues = [102, 874, 4956, 203, 1278, 330, 7245, 451, 2901, 3842, 1005, 2203, 5928, 383, 4152, 784, 2048, 391, 5230, 290, 7524, 430, 1189, 594, 7620, 1857, 334, 2950, 472, 1245, 903, 3154, 450, 2356, 789, 4032, 1178, 5720, 321, 486, 2840, 4092, 730, 1995, 562, 4903, 2381, 640, 1885, 9274];

    // Step 4: Modify the input string by inserting the fetched values
    let modifiedString = '';
    let inputArray = inputString.split('');
    for (let x = 0; x < inputArray.length; x++) {
        modifiedString += `${inputArray[x]}${randomValues[fetchIndices[x]]}`;
    }

    // Step 5: Attach the random number at the start
    const finalString = randomNum + modifiedString;

    return finalString;
};

export const encryptData = (plainText) => {
  // Create a 32-byte key from the secret key using SHA-256
  const key = CryptoJS.SHA256("Pq7Gk2Xm5Hs8RdF4Nv3Tc9Bz6WyJfLuM");

  // Create a constant IV derived from a string using MD5
  const constantIV = CryptoJS.MD5("9Q8w7E6r5T4y3U2i");

  // Encrypt the plain text using AES/CBC/PKCS5Padding
  const encrypted = CryptoJS.AES.encrypt(plainText, key, {
    iv: constantIV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });

  // Convert the encrypted data to Base64 string
  return encrypted.toString();
};