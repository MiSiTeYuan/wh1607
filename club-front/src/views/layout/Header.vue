<template>
  <div class="navbar">
    <div class="navbar-inner">
      <div class="container">
        <a class="brand" href="/">
          <!-- <% if (config.site_logo) {%>
          <img src="<%- staticFile(config.site_logo) %>" />
        <%} else {%>
          <%- config.name %>
        <%}%> -->
        </a>

        <form id="search_form" class="navbar-search" action="/search">
          <input
            type="text"
            id="q"
            name="q"
            class="search-query span3"
            value=""
          />
        </form>
        <ul class="nav pull-right">
          <li><a href="/">首页</a></li>
          <!-- <% if (current_user){ %>
          <li>
            <a href="/my/messages">
              <% if (current_user.messages_count) { %>
              <span class="big messages_count"
                ><%= current_user.messages_count %></span
              >
              <% } %> 未读消息
            </a>
          </li>
          <% } %> -->
          <!-- <li><a href="/getstart">新手入门</a></li> -->
          <li><a href="/api">API</a></li>
          <li><a href="/setting">设置</a></li>
          <li>
            <a href="/signout" data-method="post" rel="nofollow">退出</a>
          </li>
          <li><a href="/signup">注册</a></li>
          <li><a href="/signin">登录</a></li>
        </ul>
        <a class="btn btn-navbar" id="responsive-sidebar-trigger">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navbar {
    margin-bottom: 20px;
    overflow: visible
}

.navbar-inner {
    min-height: 40px;
    padding-right: 20px;
    padding-left: 20px;
    background-color: #fafafa;
    background-image: -moz-linear-gradient(top,#fff,#f2f2f2);
    background-image: -webkit-gradient(linear,0 0,0 100%,from(#fff),to(#f2f2f2));
    background-image: -webkit-linear-gradient(top,#fff,#f2f2f2);
    background-image: -o-linear-gradient(top,#fff,#f2f2f2);
    background-image: linear-gradient(to bottom,#fff,#f2f2f2);
    border: 1px solid #d4d4d4;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffffff', endColorstr='#fff2f2f2', GradientType=0);
    -webkit-box-shadow: 0 1px 4px rgba(0,0,0,.065);
    -moz-box-shadow: 0 1px 4px rgba(0,0,0,.065);
    box-shadow: 0 1px 4px rgba(0,0,0,.065)
}

.navbar-inner:after,.navbar-inner:before {
    display: table;
    line-height: 0;
    content: ""
}

.navbar .container {
    width: auto
}

.nav-collapse.collapse {
    height: auto;
    overflow: visible
}

.navbar .brand {
    display: block;
    float: left;
    padding: 10px 20px;
    margin-left: -20px;
    font-size: 20px;
    font-weight: 200;
    color: #777;
    text-shadow: 0 1px 0 #fff
}

.navbar .brand:focus,.navbar .brand:hover {
    text-decoration: none
}

.navbar-text {
    margin-bottom: 0;
    line-height: 40px;
    color: #777
}

.navbar-link {
    color: #777
}

.navbar-link:focus,.navbar-link:hover {
    color: #333
}

.navbar .divider-vertical {
    height: 40px;
    margin: 0 9px;
    border-right: 1px solid #fff;
    border-left: 1px solid #f2f2f2
}

.navbar .btn,.navbar .btn-group {
    margin-top: 5px
}

.navbar .btn-group .btn,.navbar .input-append .btn,.navbar .input-append .btn-group,.navbar .input-prepend .btn,.navbar .input-prepend .btn-group {
    margin-top: 0
}

.navbar-form {
    margin-bottom: 0
}

.navbar-form:after,.navbar-form:before {
    display: table;
    line-height: 0;
    content: ""
}

.navbar-form .checkbox,.navbar-form .radio,.navbar-form input,.navbar-form select {
    margin-top: 5px
}

.navbar-form .btn,.navbar-form input,.navbar-form select {
    display: inline-block;
    margin-bottom: 0
}

.navbar-form input[type=image],.navbar-form input[type=radio],.navbar-form input[type=checkbox] {
    margin-top: 3px
}

.navbar-form .input-append,.navbar-form .input-prepend {
    margin-top: 5px;
    white-space: nowrap
}

.navbar-form .input-append input,.navbar-form .input-prepend input {
    margin-top: 0
}

.navbar-search {
    float: left;
    margin-top: 5px;
    margin-bottom: 0
}

.navbar-search .search-query {
    padding: 4px 14px;
    margin-bottom: 0;
    font-size: 13px;
    font-weight: 400;
    line-height: 1;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px
}

.navbar-static-top {
    position: static;
    margin-bottom: 0
}

.navbar-static-top .navbar-inner {
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0
}

.navbar-fixed-bottom,.navbar-fixed-top {
    position: fixed;
    right: 0;
    left: 0;
    z-index: 1030;
    margin-bottom: 0
}

.navbar-fixed-top .navbar-inner,.navbar-static-top .navbar-inner {
    border-width: 0 0 1px;
    -webkit-box-shadow: 0 1px 10px rgba(0,0,0,.1);
    -moz-box-shadow: 0 1px 10px rgba(0,0,0,.1);
    box-shadow: 0 1px 10px rgba(0,0,0,.1)
}

.navbar-fixed-bottom .navbar-inner {
    border-width: 1px 0 0;
    -webkit-box-shadow: 0 -1px 10px rgba(0,0,0,.1);
    -moz-box-shadow: 0 -1px 10px rgba(0,0,0,.1);
    box-shadow: 0 -1px 10px rgba(0,0,0,.1)
}

.navbar-fixed-bottom .navbar-inner,.navbar-fixed-top .navbar-inner {
    padding-right: 0;
    padding-left: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0
}

.navbar-fixed-bottom .container,.navbar-fixed-top .container,.navbar-static-top .container {
    width: 940px
}

.navbar-fixed-top {
    top: 0
}

.navbar-fixed-bottom {
    bottom: 0
}

.navbar .nav {
    position: relative;
    left: 0;
    display: block;
    float: left;
    margin: 0 10px 0 0
}

.navbar .nav.pull-right {
    float: right;
    margin-right: 0
}

.navbar .nav>li {
    float: left
}

.navbar .nav>li>a {
    float: none;
    padding: 10px 15px;
    color: #777;
    text-decoration: none;
    text-shadow: 0 1px 0 #fff
}

.navbar .nav .dropdown-toggle .caret {
    margin-top: 8px
}

.navbar .nav>li>a:focus,.navbar .nav>li>a:hover {
    color: #3f82c4;
    text-decoration: none;
    background-color: transparent
}

.navbar .nav>.active>a,.navbar .nav>.active>a:focus,.navbar .nav>.active>a:hover {
    color: #555;
    text-decoration: none;
    background-color: #e5e5e5;
    -webkit-box-shadow: inset 0 3px 8px rgba(0,0,0,.125);
    -moz-box-shadow: inset 0 3px 8px rgba(0,0,0,.125);
    box-shadow: inset 0 3px 8px rgba(0,0,0,.125)
}

.navbar .btn-navbar {
    display: none;
    float: right;
    padding: 7px 10px;
    margin-right: 5px;
    margin-left: 5px;
    color: #fff;
    background-color: #ededed;
    background-image: -moz-linear-gradient(top,#f2f2f2,#e5e5e5);
    background-image: -webkit-gradient(linear,0 0,0 100%,from(#f2f2f2),to(#e5e5e5));
    background-image: -webkit-linear-gradient(top,#f2f2f2,#e5e5e5);
    background-image: -o-linear-gradient(top,#f2f2f2,#e5e5e5);
    background-image: linear-gradient(to bottom,#f2f2f2,#e5e5e5);
    background-repeat: repeat-x;
    border-color: #e5e5e5 #e5e5e5 #bfbfbf;
    border-color: rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff2f2f2', endColorstr='#ffe5e5e5', GradientType=0);
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.075);
    -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.075);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.075)
}

.navbar .btn-navbar.active,.navbar .btn-navbar.disabled,.navbar .btn-navbar:active,.navbar .btn-navbar:focus,.navbar .btn-navbar:hover,.navbar .btn-navbar[disabled] {
    color: #fff;
    background-color: #e5e5e5
}

.navbar .btn-navbar.active,.navbar .btn-navbar:active {
    background-color: #ccc\9
}

.navbar .btn-navbar .icon-bar {
    display: block;
    width: 18px;
    height: 2px;
    background-color: #f5f5f5;
    -webkit-border-radius: 1px;
    -moz-border-radius: 1px;
    border-radius: 1px;
    -webkit-box-shadow: 0 1px 0 rgba(0,0,0,.25);
    -moz-box-shadow: 0 1px 0 rgba(0,0,0,.25);
    box-shadow: 0 1px 0 rgba(0,0,0,.25)
}

.btn-navbar .icon-bar+.icon-bar {
    margin-top: 3px
}

.navbar .nav>li>.dropdown-menu:before {
    position: absolute;
    top: -7px;
    left: 9px;
    display: inline-block;
    border-right: 7px solid transparent;
    border-bottom: 7px solid #ccc;
    border-left: 7px solid transparent;
    border-bottom-color: rgba(0,0,0,.2);
    content: ''
}

.navbar .nav>li>.dropdown-menu:after {
    position: absolute;
    top: -6px;
    left: 10px;
    display: inline-block;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #fff;
    border-left: 6px solid transparent;
    content: ''
}

.navbar-fixed-bottom .nav>li>.dropdown-menu:before {
    top: auto;
    bottom: -7px;
    border-top: 7px solid #ccc;
    border-bottom: 0;
    border-top-color: rgba(0,0,0,.2)
}

.navbar-fixed-bottom .nav>li>.dropdown-menu:after {
    top: auto;
    bottom: -6px;
    border-top: 6px solid #fff;
    border-bottom: 0
}

.navbar .nav li.dropdown>a:focus .caret,.navbar .nav li.dropdown>a:hover .caret {
    border-top-color: #333;
    border-bottom-color: #333
}

.navbar .nav li.dropdown.active>.dropdown-toggle,.navbar .nav li.dropdown.open.active>.dropdown-toggle,.navbar .nav li.dropdown.open>.dropdown-toggle {
    color: #555;
    background-color: #e5e5e5
}

.navbar .nav li.dropdown>.dropdown-toggle .caret {
    border-top-color: #777;
    border-bottom-color: #777
}

.navbar .nav li.dropdown.active>.dropdown-toggle .caret,.navbar .nav li.dropdown.open.active>.dropdown-toggle .caret,.navbar .nav li.dropdown.open>.dropdown-toggle .caret {
    border-top-color: #555;
    border-bottom-color: #555
}

.navbar .nav>li>.dropdown-menu.pull-right,.navbar .pull-right>li>.dropdown-menu {
    right: 0;
    left: auto
}

.navbar .nav>li>.dropdown-menu.pull-right:before,.navbar .pull-right>li>.dropdown-menu:before {
    right: 12px;
    left: auto
}

.navbar .nav>li>.dropdown-menu.pull-right:after,.navbar .pull-right>li>.dropdown-menu:after {
    right: 13px;
    left: auto
}

.navbar .nav>li>.dropdown-menu.pull-right .dropdown-menu,.navbar .pull-right>li>.dropdown-menu .dropdown-menu {
    right: 100%;
    left: auto;
    margin-right: -1px;
    margin-left: 0;
    -webkit-border-radius: 6px 0 6px 6px;
    -moz-border-radius: 6px 0 6px 6px;
    border-radius: 6px 0 6px 6px
}

.navbar-inverse .navbar-inner {
    background-color: #1b1b1b;
    background-image: -moz-linear-gradient(top,#222,#111);
    background-image: -webkit-gradient(linear,0 0,0 100%,from(#222),to(#111));
    background-image: -webkit-linear-gradient(top,#222,#111);
    background-image: -o-linear-gradient(top,#222,#111);
    background-image: linear-gradient(to bottom,#222,#111);
    border-color: #252525;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff222222', endColorstr='#ff111111', GradientType=0)
}

.navbar-inverse .brand,.navbar-inverse .nav>li>a {
    color: #999;
    text-shadow: 0 -1px 0 rgba(0,0,0,.25)
}

.navbar-inverse .brand:focus,.navbar-inverse .brand:hover,.navbar-inverse .nav>li>a:focus,.navbar-inverse .nav>li>a:hover {
    color: #fff
}

.navbar-inverse .brand,.navbar-inverse .navbar-text {
    color: #999
}

.navbar-inverse .nav>li>a:focus,.navbar-inverse .nav>li>a:hover {
    color: #fff;
    background-color: transparent
}

.navbar-inverse .nav .active>a,.navbar-inverse .nav .active>a:focus,.navbar-inverse .nav .active>a:hover {
    color: #fff;
    background-color: #111
}

.navbar-inverse .navbar-link {
    color: #999
}

.navbar-inverse .navbar-link:focus,.navbar-inverse .navbar-link:hover {
    color: #fff
}

.navbar-inverse .divider-vertical {
    border-right-color: #222;
    border-left-color: #111
}

.navbar-inverse .nav li.dropdown.active>.dropdown-toggle,.navbar-inverse .nav li.dropdown.open.active>.dropdown-toggle,.navbar-inverse .nav li.dropdown.open>.dropdown-toggle {
    color: #fff;
    background-color: #111
}

.navbar-inverse .nav li.dropdown>a:focus .caret,.navbar-inverse .nav li.dropdown>a:hover .caret {
    border-top-color: #fff;
    border-bottom-color: #fff
}

.navbar-inverse .nav li.dropdown>.dropdown-toggle .caret {
    border-top-color: #999;
    border-bottom-color: #999
}

.navbar-inverse .nav li.dropdown.active>.dropdown-toggle .caret,.navbar-inverse .nav li.dropdown.open.active>.dropdown-toggle .caret,.navbar-inverse .nav li.dropdown.open>.dropdown-toggle .caret {
    border-top-color: #fff;
    border-bottom-color: #fff
}

.navbar-inverse .navbar-search .search-query {
    color: #fff;
    background-color: #515151;
    border-color: #111;
    -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,.1),0 1px 0 rgba(255,255,255,.15);
    -moz-box-shadow: inset 0 1px 2px rgba(0,0,0,.1),0 1px 0 rgba(255,255,255,.15);
    box-shadow: inset 0 1px 2px rgba(0,0,0,.1),0 1px 0 rgba(255,255,255,.15);
    -webkit-transition: none;
    -moz-transition: none;
    -o-transition: none;
    transition: none
}

.navbar-inverse .navbar-search .search-query:-moz-placeholder {
    color: #ccc
}

.navbar-inverse .navbar-search .search-query:-ms-input-placeholder {
    color: #ccc
}

.navbar-inverse .navbar-search .search-query::-webkit-input-placeholder {
    color: #ccc
}

.navbar-inverse .navbar-search .search-query.focused,.navbar-inverse .navbar-search .search-query:focus {
    padding: 5px 15px;
    color: #333;
    text-shadow: 0 1px 0 #fff;
    background-color: #fff;
    border: 0;
    outline: 0;
    -webkit-box-shadow: 0 0 3px rgba(0,0,0,.15);
    -moz-box-shadow: 0 0 3px rgba(0,0,0,.15);
    box-shadow: 0 0 3px rgba(0,0,0,.15)
}

.navbar-inverse .btn-navbar {
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0,0,0,.25);
    background-color: #0e0e0e;
    background-image: -moz-linear-gradient(top,#151515,#040404);
    background-image: -webkit-gradient(linear,0 0,0 100%,from(#151515),to(#040404));
    background-image: -webkit-linear-gradient(top,#151515,#040404);
    background-image: -o-linear-gradient(top,#151515,#040404);
    background-image: linear-gradient(to bottom,#151515,#040404);
    border-color: #040404 #040404 #000;
    border-color: rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff151515', endColorstr='#ff040404', GradientType=0);
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false)
}

.navbar-inverse .btn-navbar.active,.navbar-inverse .btn-navbar.disabled,.navbar-inverse .btn-navbar:active,.navbar-inverse .btn-navbar:focus,.navbar-inverse .btn-navbar:hover,.navbar-inverse .btn-navbar[disabled] {
    color: #fff;
    background-color: #040404
}

.navbar-inverse .btn-navbar.active,.navbar-inverse .btn-navbar:active {
    background-color: #000\9
}

.breadcrumb {
    padding: 8px 15px;
    margin: 0 0 20px;
    background-color: #f5f5f5;
    border-radius: 4px
}

.breadcrumb>li {
    display: inline-block;
    text-shadow: 0 1px 0 #fff
}

.badge,.label,.progress .bar {
    text-shadow: 0 -1px 0 rgba(0,0,0,.25)
}

.breadcrumb>li>.divider {
    padding: 0 5px;
    color: #ccc
}

.breadcrumb>.active {
    color: #999
}

.pagination {
    margin: 20px 0
}

.pagination ul {
    display: inline-block;
    margin-bottom: 0;
    margin-left: 0;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.05);
    -moz-box-shadow: 0 1px 2px rgba(0,0,0,.05);
    box-shadow: 0 1px 2px rgba(0,0,0,.05)
}

.pagination ul>li {
    display: inline
}

.pagination ul>li>a,.pagination ul>li>span {
    float: left;
    padding: 4px 12px;
    line-height: 20px;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
    border-left-width: 0
}

.pagination ul>.active>a,.pagination ul>.active>span,.pagination ul>li>a:focus,.pagination ul>li>a:hover {
    background-color: #f5f5f5
}

.pagination ul>.active>a,.pagination ul>.active>span {
    color: #999;
    cursor: default
}

.pagination ul>.disabled>a,.pagination ul>.disabled>a:focus,.pagination ul>.disabled>a:hover,.pagination ul>.disabled>span {
    color: #999;
    cursor: default;
    background-color: transparent
}

.pagination ul>li:first-child>a,.pagination ul>li:first-child>span {
    border-left-width: 1px;
    -webkit-border-bottom-left-radius: 4px;
    border-bottom-left-radius: 4px;
    -webkit-border-top-left-radius: 4px;
    border-top-left-radius: 4px;
    -moz-border-radius-bottomleft: 4px;
    -moz-border-radius-topleft: 4px
}

.pagination ul>li:last-child>a,.pagination ul>li:last-child>span {
    -webkit-border-top-right-radius: 4px;
    border-top-right-radius: 4px;
    -webkit-border-bottom-right-radius: 4px;
    border-bottom-right-radius: 4px;
    -moz-border-radius-topright: 4px;
    -moz-border-radius-bottomright: 4px
}

.pagination-right {
    text-align: right
}

.pagination-large ul>li>a,.pagination-large ul>li>span {
    padding: 11px 19px;
    font-size: 17.5px
}

.pagination-large ul>li:first-child>a,.pagination-large ul>li:first-child>span {
    -webkit-border-bottom-left-radius: 6px;
    border-bottom-left-radius: 6px;
    -webkit-border-top-left-radius: 6px;
    border-top-left-radius: 6px;
    -moz-border-radius-bottomleft: 6px;
    -moz-border-radius-topleft: 6px
}

.pagination-large ul>li:last-child>a,.pagination-large ul>li:last-child>span {
    -webkit-border-top-right-radius: 6px;
    border-top-right-radius: 6px;
    -webkit-border-bottom-right-radius: 6px;
    border-bottom-right-radius: 6px;
    -moz-border-radius-topright: 6px;
    -moz-border-radius-bottomright: 6px
}

.pagination-mini ul>li:first-child>a,.pagination-mini ul>li:first-child>span,.pagination-small ul>li:first-child>a,.pagination-small ul>li:first-child>span {
    -webkit-border-bottom-left-radius: 3px;
    border-bottom-left-radius: 3px;
    -webkit-border-top-left-radius: 3px;
    border-top-left-radius: 3px;
    -moz-border-radius-bottomleft: 3px;
    -moz-border-radius-topleft: 3px
}

.pagination-mini ul>li:last-child>a,.pagination-mini ul>li:last-child>span,.pagination-small ul>li:last-child>a,.pagination-small ul>li:last-child>span {
    -webkit-border-top-right-radius: 3px;
    border-top-right-radius: 3px;
    -webkit-border-bottom-right-radius: 3px;
    border-bottom-right-radius: 3px;
    -moz-border-radius-topright: 3px;
    -moz-border-radius-bottomright: 3px
}

.pagination-small ul>li>a,.pagination-small ul>li>span {
    padding: 2px 10px;
    font-size: 11.9px
}

.pagination-mini ul>li>a,.pagination-mini ul>li>span {
    padding: 0 6px;
    font-size: 10.5px
}

.pager {
    margin: 20px 0;
    text-align: center
}

.modal-footer,.modal-form {
    margin-bottom: 0
}

.pager:after,.pager:before {
    display: table;
    line-height: 0;
    content: ""
}

.pager li {
    display: inline
}

.pager li>a,.pager li>span {
    display: inline-block;
    padding: 5px 14px;
    background-color: #fff;
    border: 1px solid #ddd;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px
}

.pager li>a:focus,.pager li>a:hover {
    text-decoration: none;
    background-color: #f5f5f5
}

.pager .next>a,.pager .next>span {
    float: right
}

.pager .previous>a,.pager .previous>span {
    float: left
}

.pager .disabled>a,.pager .disabled>a:focus,.pager .disabled>a:hover,.pager .disabled>span {
    color: #999;
    cursor: default;
    background-color: #fff
}

</style>
