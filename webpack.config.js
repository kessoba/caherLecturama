const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  // Your existing configuration...
  optimization: {
    minimize: true, // Enable minimization
    minimizer: [new TerserPlugin({
      // Terser plugin options
      terserOptions: {
        compress: true, // Enables compression
        mangle: true, // Enable mangling
        // Additional options can be configured here
        // Refer to Terser documentation for more options
      },
    })],
  },
};