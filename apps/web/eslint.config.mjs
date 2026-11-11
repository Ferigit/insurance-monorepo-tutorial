import config from '@tutorial/eslint-config/next';
const eslintConfig = [...config, { ignores: ['.next/**', 'next-env.d.ts'] }];
export default eslintConfig;
