import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
        <header className="text-gray-600 body-font sticky top-0 bg-[#C4DFDF] z-30">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to='/'>
                <span className="ml-3 text-xl">Contest</span>
            </Link>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <Link className="mr-5 hover:text-gray-900" to='/codechef'>Codechef</Link>
                <Link className="mr-5 hover:text-gray-900" to='/codeforces'>Codeforces</Link>
                <Link className="mr-5 hover:text-gray-900" to='/hackerearth'>HackerEarth</Link>
                <Link className="mr-5 hover:text-gray-900" to='/hackerrank'>Hackerank</Link>
            </nav>
            </div>
        </header>
    )
  }
}
