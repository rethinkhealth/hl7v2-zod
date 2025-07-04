import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    'index': 'src/index.ts',
    '2.6/index': 'src/2.6/index.ts',
    '2.8/index': 'src/2.8/index.ts',
  },
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  minify: false,
  external: ['zod', 'zod/v4'],
  onSuccess: 'tsc --noEmit',
});
