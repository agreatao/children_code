<template>
    <div class="nav-wrap">
        <div class="nav">
            <div class="logo">
                青少年计算机编程网
            </div>
            <ul class="main-nav">
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/lesson">课程</router-link></li>
                <li><router-link to="/">直播</router-link></li>
                <li><router-link to="/circle">圈子</router-link></li>
                <li><router-link to="/">咨询</router-link></li>
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
        .nav {
            max-width: 1000px;
            min-height: 60px;
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
                    }
                }
            }

            &::before, &::after {
                content: "";
                display: block;
                clear: both;
                visibility: hidden;
                height: 1px;
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