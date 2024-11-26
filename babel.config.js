// babel.config.js
module.exports = {
    presets: ['next/babel'],
    plugins: [
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'lib', // Use 'lib' for CommonJS modules
          style: true, // Set to true to import less files
        },
        'antd',
      ],
    ],
  };
  