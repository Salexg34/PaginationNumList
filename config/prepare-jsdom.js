import {JSDOM} from 'jsdom';
import {readFileSync} from 'node:fs';

const htmlStructure = readFileSync('./index.html', {encoding: 'utf-8'});
const dom = new JSDOM(htmlStructure, {
    url: 'http://localhost', // Set a base URL
    storageQuota: 10000000, // Set a storage quota (adjust as needed)
    pretendToBeVisual: true, // Pretend to be a visual browser
    runScripts: 'dangerously', // Allow running scripts (use with caution)
});
    
global.document = dom.window.document;
global.window = dom.window;
global.navigator = dom.window.navigator;
