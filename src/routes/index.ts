import { Router } from "express";
import { readdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PATH = __dirname;

const cleanFileName = (fileName: string) => fileName.split('.').shift();

readdirSync(PATH).forEach(async (fileName) => {
  const route = cleanFileName(fileName);
  console.log({
    fileName,
    route,
    PATH,
  })
  if(route !== 'index') router.use(`/api/${route}`, await import(`./${fileName}`).then(route => route.router));
})


console.log(PATH);
export { router };
