<template>
    <div class="nav-wrap">
        <div class="nav">
            <div class="logo">
                <img src="http://dummyimage.com/50x50/f1d65b" width="50" height="50" style="margin-top: 5px;"/>
            </div>
            <ul class="main-nav">
                <li><router-link to="/" exact>首页</router-link></li>
                <li><router-link to="/lesson">课程</router-link></li>
                <li><router-link to="/tv">直播</router-link></li>
                <li><router-link to="/circle">圈子</router-link></li>
                <li><router-link to="/news">咨询</router-link></li>
            </ul>
            <ul class="user-nav">
                <li><router-link to="/signin">登录</router-link></li>
                <li><router-link to="/stusignup">注册</router-link></li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Nav',
    }
</script>
<style lang='less'>
    .nav-wrap {
        margin-bottom: 12px;
        box-shadow: 0px 1px 2px 0 rgba(0, 0, 0, .1);
        border-bottom: 1px solid #f0f1f2;
        .nav {
            max-width: 1000px;
            height: 60px;
            margin: 0 auto;
            font-size: 16px;
            ul {
                li {
                    display: inline-block;
                    a {
                        width: 56px;
                        height: 60px;
                        line-height: 60px;
                        text-align: center;
                        &.active {
                            color: #f63a3b;
                        }
                    }
                }
            }

            &::before, &::after {
                content: "";
                display: block;
                clear: both;
                visibility: hidden;
                height: 0px;
            }
        }
    }

    
    .logo {
        float: left;
        margin-right: 15px;
    }
    
    .main-nav {
        float: left;
    }
    
    .user-nav {
        float: right;
    }
</style>