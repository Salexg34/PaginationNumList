// eslint-disable-next-line import/namespace
import {defineConfig} from 'vite';

export default defineConfig({
    test: {
        
        setupFiles: ['./config/prepare-jsdom.js'],
    },
});
