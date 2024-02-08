import path from "path";
import fs from "fs";
import fsp from "fs/promises";
import stream from "stream/promises";
import os from 'os'

export async function osController (input) {
  try {
    const props = input.split('--')[1].trim();
    switch (props) {
      case 'EOL' : {
        console.log('System end-of-line: ', JSON.stringify(os.EOL));
        break;
      }
      case 'cpus' : {
        const res = [];
        os.cpus().map((cpu) => {
          res.push({Model: cpu.model, Speed: `${(cpu.speed / 1000).toFixed(3)} GHz`})
        })
        console.log(`Number of cores: ${res.length}`);
        console.table(res);
        break;
      }
      case 'homedir' : {
        console.log('Home direction:', os.homedir());
        break;
      } 
      case 'username' : {
        console.log('System username:', os.userInfo().username);
        break;
      } 
      case 'architecture' : {
        console.log('System architecture:', os.arch());
        break;
      } 
      default: {
        console.error('Operation  failed: unknown property');
      }
    }
  } catch (error) {
    console.error("Operation failed: please insert a property in 'os --prop' format");
  }
}