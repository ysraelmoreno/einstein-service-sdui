import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { Kee_BLOCK, Kee_IMPORT_BLOCKS } from 'src/core/constants';
import { KeeCore } from 'src/core/KeeCore.module';
import { ChefService } from 'src/core/services/chef.service';
import { BlockPageAbstractRenderer } from '../block/BlockPageAbstract';
import { KeeInterface } from '../interfaces/KeeInterface';

export interface ResponseInterface {
  menu: KeeInterface[];
  content: KeeInterface[];
}

type Render = ResponseInterface | KeeInterface[];

@Injectable()
export class BlockService {
  constructor(
    private moduleRef: ModuleRef,
    private readonly chefService: ChefService,
  ) {}

  async render(blockName: string): Promise<Render> {
    const { instance, isPage } = this.getBlock(blockName);

    if (isPage) {
      return this.renderPage(instance);
    }

    return instance.renderObject();
  }

  private async renderPage(instance: any) {
    const content = await instance.renderObject();
    const menu = instance.menu;

    return {
      menu,
      content,
    };
  }

  private getBlock(blockName: string) {
    const blocks = Reflect.getMetadata(Kee_IMPORT_BLOCKS, KeeCore);

    const findBlock = blocks.map((block) => {
      const findBlock = Reflect.getMetadata(Kee_BLOCK, block);

      return {
        name: findBlock,
        block,
      };
    });

    const block = findBlock.filter((block) => block.name === blockName)[0]
      .block;

    const instance = this.moduleRef.get(block);

    return {
      instance,
      isPage: block.prototype instanceof BlockPageAbstractRenderer,
    };
  }
}
