const babel = require('rollup-plugin-babel')

module.exports = {
  // ... other config
  rollupInputOptions: {
    plugins: [
      babel({
        runtimeHelpers: true,
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        exclude: 'node_modules/**',
      }),
    ],
  },
}
