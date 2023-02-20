import { Injectable } from '@nestjs/common';

@Injectable()
export class PhotosService {
  private static defaultURL = 'http://localhost:4000/static';

  generateURL(file: string) {
    return `${PhotosService.defaultURL}/${file}`;
  }
}
