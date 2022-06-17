const path = require('path');
const withPWA = require('next-pwa');

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    register: true,
    sw: 'service-worker.js',
  },
  optimizeFonts: false,
  images: {
    domains: ['raw.githubusercontent.com', 'res.cloudinary.com'],
  },
  webpack(config, _options) {
    config.resolve.alias['@pages'] = path.join(__dirname, 'pages');
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    config.resolve.alias['@utils'] = path.join(__dirname, 'utils');
    config.resolve.alias['@interfaces'] = path.join(__dirname, 'interfaces');
    config.resolve.alias['@styles'] = path.join(__dirname, 'styles');
    config.resolve.alias['@containers'] = path.join(__dirname, 'containers');
    config.resolve.alias['@store'] = path.join(__dirname, 'store');

    return config;
  },
});
