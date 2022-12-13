import { DynamicModule, Module, ModuleMetadata } from '@nestjs/common';
import { Kee_IMPORT_BLOCKS, KEE_REALM } from './constants';
import { ConfigController } from './controllers/config.controller';
import { BlockService } from './renderer/services/block.service';
import { ChefService } from './services/chef.service';
import { FileSystemService } from './services/fileSystem.services';
import { PhotosService } from './services/photos.service';

interface IModuleMetadata extends ModuleMetadata {
  realm?: any;
}

@Module({
  providers: [FileSystemService, BlockService, ChefService, PhotosService],
  exports: [BlockService, PhotosService, ChefService],
  controllers: [ConfigController],
})
export class KeeCore {
  static forRoot(providers: IModuleMetadata = {}): DynamicModule {
    if (!Reflect.hasMetadata(Kee_IMPORT_BLOCKS, KeeCore)) {
      Reflect.defineMetadata(Kee_IMPORT_BLOCKS, [], KeeCore);
    }

    if (providers.realm) {
      const realms = Reflect.getMetadata(Kee_IMPORT_BLOCKS, KeeCore);
      Reflect.defineMetadata(KEE_REALM, providers.realm, KeeCore);

      Reflect.defineMetadata(
        Kee_IMPORT_BLOCKS,
        [...realms, ...providers.exports],
        KeeCore,
      );
    }

    return {
      module: KeeCore,
      controllers: providers.controllers,
      exports: providers.exports,
      imports: providers.imports,
      providers: providers.providers,
    };
  }
}
