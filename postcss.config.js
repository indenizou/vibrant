/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const postcssImport = require('postcss-import');
const flexBugs = require('postcss-flexbugs-fixes');

module.exports = {
  ident: 'postcss',
  plugins: [
    postcssImport({ root: path.join(__dirname, 'src') }),
    flexBugs(),
    postcssPresetEnv({
      browsers: [
        ">0.3%",
        "last 2 versions",
        "not Chrome <= 60",
        "not dead",
        "not ie <= 11",
        "not op_mini all",
        "not kaios <= 99",
        "not Baidu <= 99"
      ],
    }),
  ],
  flexbox: 'no-2009',
};
