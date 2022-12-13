import * as path from 'path';
import { Controller, Get } from '@nestjs/common';
import { FileSystemService } from '../services/fileSystem.services';
import { ChefService } from '../services/chef.service';

@Controller('config')
export class ConfigController {
  constructor(
    private readonly fileSystemService: FileSystemService,
    private readonly chefService: ChefService,
  ) {}

  @Get()
  async getConfig() {
    const json = this.fileSystemService.getFile(
      path.join(__dirname, '..', '..', '..', 'config.json'),
    );

    return JSON.parse(json);
  }

  @Get('/menu')
  async getMenu() {
    const items = this.chefService.getMenu();

    return items;
  }
}
