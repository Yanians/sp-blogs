import fs from 'fs';
import path from 'path';
const normalizeFileName = /\d*/gi;

interface IMGPROPS {
    jpgFile:IMGPROPS[];
    pngFile:IMGPROPS[];
};

const imgDir = path.join((process.cwd(),'packages/client/public/images/blogs_images/'));

function ReadJPGFile(ext = '.jpg'){
    return fs.readdirSync(imgDir).filter((file)=>file.endsWith(ext))
}

function ReadPNGFile(ext = '.png'){
    return fs.readdirSync(imgDir).filter((file)=>file.endsWith(ext))
}

const fileDestination:IMGPROPS = {
  jpgFile:[],
  pngFile:[],
};
         ReadJPGFile().forEach((file:any,_)=>{
                if(file.match(normalizeFileName)){
                        fileDestination.jpgFile[file] = file.replace(normalizeFileName,'');
                        // const writeToFile = file.replace(normalizeFileName,'');
                        // fs.writeFile(imgDir,writeToFile,'utf-8')
                }
         });

         ReadPNGFile().forEach((file:any,_)=>{
            if(file.match(normalizeFileName)){
                    fileDestination.pngFile[file] = file.replace(normalizeFileName,'');
            }
        });



