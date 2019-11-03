import React from 'react'

interface IProps {
  asdf: string
}

export default class Index extends React.Component<IProps, {}> {
  static getInitialProps () {
    if (typeof window === 'undefined') {
      // this shouldn't be called on the client but it is
      require('../asdf')
      return { asdf: 'test1' }
    }
  }

  render () {
    return <h1>
      bug
    </h1>
  }
}
