// babel.config.js
module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'lib', // Use 'lib' for CommonJS modules
        style: true, // Import less files
      },
      'antd',
    ],
    [
      'import',
      {
        libraryName: '@ant-design/icons',
        libraryDirectory: 'lib/icons', // Use 'lib/icons' for CommonJS modules
        camel2DashComponentName: false,
      },
      '@ant-design/icons',
    ],
  ],
};
