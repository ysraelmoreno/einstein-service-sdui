import { Injectable } from '@nestjs/common';
import { Kee_BLOCK } from '../constants';

export function KeeBlock(name: string): ClassDecorator {
  return (target) => {
    Reflect.defineMetadata(Kee_BLOCK, name, target);
    Injectable();
  };
}
