import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class FileSystemService {
  getFile(path: string) {
    const fileContent = fs.readFileSync(path, 'utf-8');

    return fileContent;
  }
}
