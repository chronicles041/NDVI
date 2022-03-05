// import the original type declarations
import 'react-i18next';
// import all namespaces (for the default language, only)
import common from './public/locale/en/common.json';


declare module 'react-i18next' {
  interface CustomTypeOptions {

    defaultNS: 'common';
    resources: {
      common: typeof common;
    };
  };
};