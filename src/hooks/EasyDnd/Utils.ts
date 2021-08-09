/* eslint @typescript-eslint/no-empty-function: "off" */

import { Coords } from './types/events';

export function getEventClientOffset(e: MouseEvent): Coords {
  return {
    X: e.clientX,
    Y: e.clientY,
  };
}

export const noop = (): void => {};
