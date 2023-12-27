const path = require('path');

module.exports = {
  images: {
    domains: ['technogetic.com', 'res.cloudinary.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
