import React, { Component } from 'react'
import Link from 'next/link'

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>Login System</h1>
        <Link href="/"><a>Home</a>
        </Link>
      </div>
    )
  }
}
