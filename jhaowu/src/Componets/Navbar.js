import React from 'react';
import styled from 'styled-components'

const NavbarBg = styled.div`
    

`

function Navbar() {
  return (
    <NavbarBg>
    <nav class="navbar navbar-default" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span class="sr-only">選單切換</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">CSS可樂</a>
        </div>
        
        <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav">
                <li class="active"><a href="/">關於CSS可樂</a></li>
                <li><a href="/">CSS教學</a></li>
                <li><a href="/">CSS範例</a></li>
                <li><a href="/">原創CSS</a></li>
            </ul>
            <form class="navbar-form navbar-right" role="search">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="請輸入關鍵字"/>
                </div>
                <button type="submit" class="btn btn-default">搜尋</button>
            </form>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="/">Amos 您好</a></li>
                <li><a href="/">登出</a></li>
                <li><a href="/">個人設定</a></li>
                <li class="dropdown">
                    <a href="/" class="dropdown-toggle" data-toggle="dropdown">繁體中文 <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li><a href="/">繁體中文</a></li>
                        <li><a href="/">English</a></li>
                        <li><a href="/">日本語</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    </nav>
    </NavbarBg>
  )
}

export default Navbar;
