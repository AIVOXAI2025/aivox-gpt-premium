import { aiWriter } from './aiWriter';
import { imageGenerator } from './imageGenerator';

export const toolRegistry = {
  'AI Writer': aiWriter,
  'Image Generator': imageGenerator
};
