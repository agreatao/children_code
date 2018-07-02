<template>
    <div class="footer">
        <div class="footer-container">
            <div class="footer-links">
                <div class="link-item">
                    <h2>联系我们</h2>
                    <p>商务合作与课程咨询：400-1234567</p>
                    <p>微信号：少儿编程（code）</p>
                    <p>官方QQ群：23121414</p>
                </div>
                <div class="link-item">
                    <h2>合作方式</h2>
                    <p>商务：bd@xxxx.cn</p>
                    <p>投资：ir@xxxx.cn</p>
                </div>
                <div class="link-item">
                    <h2>链接</h2>
                    <a>课程</a>
                    <a>圈子</a>
                </div>
                <div class="link-item">
                    <h2>友情链接</h2>
                    <a>百度</a>
                    <a>google</a>
                </div>
                <div class="qrcode">
                    <img :src="qrcode" />
                </div>
            </div>
            <div class="footer-copyright">
                <div class="copyright">
                    <p>© 2018 Hangzhou XXXX Company Limited</p>
                    <p>杭州XXXX公司 / 浙ICP备12323141</p>
                </div>
                <div class="gov-icon"></div>
            </div>
        </div>
    </div>
</template>
<script>
    import qrcodeImg from '@/assets/images/qrcode.png';

    export default {
        name: 'Footer',
        data() {
            return {
                qrcode: qrcodeImg
            }
        }
    }
</script>
<style lang="less">
    .footer {
        background-color: #1e1e1e;
        color: #fff;
    }

    .footer-container {
        width: 1000px;
        margin: 0 auto;
        padding: 40px 0 15px 0;
    }

    .footer-links {
        text-align: center;
    }

    .link-item {
        text-align: left;
        display: inline-block;
        vertical-align: top;
        padding: 0 20px;
        font-size: 14px;
        a {
            display: block;
            color: #777;
        }
        p {
            color: #777;
        }
        h2 {
            margin-bottom: 20px;
            color: #ccc;
        }
    }

    .qrcode {
        display: inline-block;
        vertical-align: top;
        margin-left: 40px;
    }

    .footer-copyright {
        display: block;
        text-align: center;
        margin-top: 20px;
    }

    .copyright {
        display: inline-block;
        vertical-align: middle;
        margin-right: 15px;
        color: #777;
    }

    .gov-icon {
        vertical-align: middle;
        display: inline-block;
        width: 38px;
        height: 52px;
        background-image: url("../assets/images/gov-icon.gif");
        background-size: cover;
    }
</style>