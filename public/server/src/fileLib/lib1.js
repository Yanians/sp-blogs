"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const normalizeFileName = /\d*/gi;
;
const imgDir = path_1.default.join((process.cwd(), 'packages/client/public/images/blogs_images/'));
function ReadJPGFile(ext = '.jpg') {
    return fs_1.default.readdirSync(imgDir).filter((file) => file.endsWith(ext));
}
function ReadPNGFile(ext = '.png') {
    return fs_1.default.readdirSync(imgDir).filter((file) => file.endsWith(ext));
}
const fileDestination = {
    jpgFile: [],
    pngFile: [],
};
ReadJPGFile().forEach((file, _) => {
    if (file.match(normalizeFileName)) {
        fileDestination.jpgFile[file] = file.replace(normalizeFileName, '');
        // const writeToFile = file.replace(normalizeFileName,'');
        // fs.writeFile(imgDir,writeToFile,'utf-8')
    }
});
ReadPNGFile().forEach((file, _) => {
    if (file.match(normalizeFileName)) {
        fileDestination.pngFile[file] = file.replace(normalizeFileName, '');
    }
});
