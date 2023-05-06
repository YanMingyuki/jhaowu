import React from 'react';
// import styled from 'styled-components'
import './Navbar.css'

function Navbar() {
  return (
    <nav class="navbar navbar-default navbar-bg" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span class="sr-only">選單切換</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">高雄科技大學</a>
        </div>
        
        <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav navbar-right aa">
                <li><a href="/">Amos 您好</a></li>
                <li><a href="/">登入</a></li>
                <li><a href="/">註冊</a></li>
            </ul>
        </div>
    </div>
    </nav>
  )
}

export default Navbar;
