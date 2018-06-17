<template>
    <div class="home">
        <!-- 轮播 -->
        <Carousel3D :data="data1" />
        <!-- 副级区 -->
        <div class="ad">
            <img v-for="(item, index) in adList" :src="item.image" :key="index" />
        </div>
        <!-- 课程内容 -->
        <div class="lesson">
            <h4>在线课程</h4>
            <div class="container">
                <a>Scratch</a>
                <a>人工智能</a>
                <a>机器人</a>
            </div>
        </div>
        <div class="teacher">
            <h4>师资团队</h4>
            <TeacherCarousel />
        </div>
    </div>
</template>
<script>
    import Carousel3D from '@/components/Carousel3D';
    import TeacherCarousel from '@/components/TeacherCarousel';
    export default {
        name: 'Home',
        components: { Carousel3D, TeacherCarousel },
        data() {
            return {
                data1: [
                    {
                        image: "http://dummyimage.com/520x300/f1d65b"
                    }, {
                        image: "http://dummyimage.com/520x300/40b7ea"
                    }, {
                        image: "http://dummyimage.com/520x300/00ff00"
                    }, {
                        image: "http://dummyimage.com/520x300/ff0000"
                    }, {
                        image: "http://dummyimage.com/520x300/0000ff"
                    }
                ],
                adList: [
                    {
                        image: "http://dummyimage.com/300x200/f1d65b"
                    }, {
                        image: "http://dummyimage.com/300x200/40b7ea"
                    }, {
                        image: "http://dummyimage.com/300x200/00ff00"
                    }
                ],
            }
        }
    }
</script>
<style lang='less' scoped>
    .home {
        position: relative;
    }
    .ad {
        margin-top: 46px;
        text-align: center;
        margin-bottom: 20px;
        img {
            display: inline-block;
            margin-left: 20px;
            border-radius: 5px;
            box-shadow: 4px 4px 26px 0 rgba(0, 0, 0, .2);
        }
        img:first-child {
            margin-left: 0px;
        }
    }
    h4 {
        text-align: center;
        margin-bottom: 91px;
        font-size: 29px;
        font-weight: bold;
        color: #333;
    }
    .lesson {
        display: block;
        background: url('../assets/images/home_lesson_bg.png') no-repeat center -80px;
        text-align: center;
        padding: 65px 0;
        margin-bottom: 20px;
        a {
            display: inline-block;
            width: 286px;
            height: 410px;
            margin-left: 21px;
            border: 1px solid #ccc;
            border-radius: 4px;
            background-color: #fff;
        }
        a:first-child {
            margin-left: 0;
        }
    }
    .teacher {
        padding: 65px 0;
    }
</style>