import { Injectable } from '@nestjs/common';

@Injectable()
export class PhotosService {
  private static defaultURL = 'http://localhost:3000';

  generateURL(file: string) {
    return `${PhotosService.defaultURL}/${file}`;
  }
}
