import React, { PureComponent } from 'react'
import Import from 'react-import'
import fastclick from 'fastclick'

import Routes from './routes'

interface Props {
  initial: boolean,
  setPopup: (o: { waiting?: boolean, error?: string | null }) => void,
}

class Main extends PureComponent<Props> {
  render() {
    const { props } = this
    return (
      <>
        <Import component={import(/* webpackChunkName: "version" */ './Version')} />
        <Routes
          initial={props.initial}
          setPopup={props.setPopup}
        />
      </>
    )
  }
}

fastclick.attach(document.body)

export default Main
