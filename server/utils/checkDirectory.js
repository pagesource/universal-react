/**
 * Directory creation utility
 * (used majorly for Lighthouse CLI for now)
 */
const fs = require('fs');
const path = require('path');

function createDirectory(targetDir) {
  const { sep } = path;
  const initDir = path.isAbsolute(targetDir) ? sep : '';
  targetDir.split(sep).reduce((parentDir, childDir) => {
    const curDir = path.resolve(parentDir, childDir);
    try {
      fs.mkdirSync(curDir);
    } catch (err) {
      if (err.code !== 'EEXIST') {
        throw err;
      }
    }

    return curDir;
  }, initDir);
}

module.exports = function checkDirectory(targetDir, shouldCreate = false) {
  if (fs.existsSync(targetDir)) {
    return true;
  }
  if (shouldCreate) {
    createDirectory(targetDir);
    return true;
  }
  return false;
};
