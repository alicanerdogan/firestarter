/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  alias: {
    src: './src',
  },
  plugins: [
    ['snowpack-plugin-svgr', {}],
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    [
      '@snowpack/plugin-typescript',
      {
        ...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {}),
      },
    ],
    [
      'snowpack-plugin-hash',
      {
        sourceMaps: true,
      },
    ],
  ],
  routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
  optimize: {
    minify: true,
    bundle: true,
    treeshake: true,
    sourcemap: 'external',
    splitting: true,
  },
  packageOptions: {},
  devOptions: {
    open: 'none',
  },
  buildOptions: {},
};
