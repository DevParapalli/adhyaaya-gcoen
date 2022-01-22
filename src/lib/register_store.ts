import { writable } from "svelte/store";


export interface RegisterStore {
    // Step Alpha
    name: string;
    username: string;
    gender: string;
    age: string; 
    // Step Beta
    phone_number: string;
    email: string;
    alt_email: string;
    // Step Gamma
    current_education: string; // Student, Professional or Other
    is_gcoen: string; // "yes_1y" or "yes_2y" or "yes_3y" or "yes_4y" or "no"
    where_did_you_hear: string;
    comments: string;
}


export const registerStore = writable<RegisterStore>();