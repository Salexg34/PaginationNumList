import {JSDOM} from 'jsdom';
import {readFileSync} from 'node:fs';

const htmlStructure = readFileSync('./index.html', {encoding: 'utf-8'});
const dom = new JSDOM(htmlStructure);
    
global.document = dom.window.document;
