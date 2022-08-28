import EventEmitter from 'eventemitter3'

export enum EventEmitterContext {
  app = 'app',
}

export const emitter = new EventEmitter()