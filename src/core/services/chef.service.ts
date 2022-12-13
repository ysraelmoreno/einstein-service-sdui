import { FileSystemService } from './fileSystem.services';
import * as path from 'path';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ChefService {
  constructor(private readonly fileSystemService: FileSystemService) {}

  getMenu() {
    const config = this.fileSystemService.getFile(
      path.join(__dirname, '..', '..', '..', 'config.json'),
    );

    const { urls } = JSON.parse(config);

    return urls;
  }

  getDocumentFile() {
    const realms = this.getRealms();

    const file = this.fileSystemService.getFile(
      path.join(__dirname, '..', '..', '..', 'config.json'),
    );
  }

  getRealms() {
    const config = this.fileSystemService.getFile(
      path.join(__dirname, '..', '..', '..', 'config.json'),
    );

    const { realms } = JSON.parse(config);

    return realms;
  }
}
