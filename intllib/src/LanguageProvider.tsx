import * as React from 'react';

import { IntlProvider } from 'react-intl';

import Messages from './en.json';

interface Props {
  children: any,
  messages:any
}

export default ({ children,messages }: Props) => {
  return (
    <IntlProvider locale='en' messages={{...Messages,...messages}}>
      {children}
    </IntlProvider>
  )
}
