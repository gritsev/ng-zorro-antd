const fs = require('fs-extra');
const path = require('path');

const theme = fs.readFileSync(path.resolve(__dirname, `../site/_site/src/theme.less`), 'utf8');
fs.outputFileSync(
  path.resolve(__dirname, `../../schematics/utils/custom-theme.ts`),
`export function createCustomTheme() {
  return \`@import "../node_modules/solar-ng-zorro-antd/src/ng-zorro-antd.less";
${theme.replace(/`/g, '\\`')}
\`;
}
`
);
