<template>
    <div class="home">
        <!-- 轮播 -->
        <Carousel3D :data="topAD" />
        <!-- 副级区 -->
        <div class="ad">
            <img v-for="(item, index) in subAD" :src="item.image" :key="index" />
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
        <div class="news">
            <h4>新闻资讯</h4>
            <div class="news-box">
                <div v-for="(item, index) in news" :key="index" class="news-item">
                    <div class="news-image">
                        <img src="http://dummyimage.com/250x150/f1d65b" />
                    </div>
                    <div class="news-info">
                        <a class="news-title">题目</a>
                        <p class="news-content">内容</p>
                        <p class="news-time">2018-10-20 14:00:00</p>
                    </div>
                </div>
                <div class="more">
                    <button>查看更多</button>
                </div>
            </div>
        </div>
        <div class="circle">
            <h4>学友圈</h4>
            <div class="circle-box">
                <div class="circle-item">
                    家长圈
                </div>
                <div class="circle-item">
                    老师圈
                </div>
                <div class="circle-item">
                    朋友圈
                </div>
            </div>
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
                topAD: [
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
                subAD: [
                    {
                        image: "http://dummyimage.com/300x200/f1d65b"
                    }, {
                        image: "http://dummyimage.com/300x200/40b7ea"
                    }, {
                        image: "http://dummyimage.com/300x200/00ff00"
                    }
                ],
                news: [
                    {
                        image: "http://dummyimage.com/520x300/f1d65b"
                    }, {
                        image: "http://dummyimage.com/520x300/40b7ea"
                    }, {
                        image: "http://dummyimage.com/520x300/00ff00"
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
            margin-left: 0;
        }
    }
    h4 {
        text-align: center;
        padding-top: 35px;
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

    .news {
        background-color: #f1f2f3;

        .news-item {
            display: block;
            width: 850px;
            margin: 0 auto 20px auto;
            &:before, &:after {
                display: block;
                clear: both;
                content: '';
                visibility: hidden;
            }
            .news-image {
                float: left;
            }
            .news-info {
                margin-left: 300px;
            }
            .news-title {
                font-size: 21px;
                text-align: left;
                vertical-align: top;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
                color: #1c1f21;
            }
            .news-content {
                color: #918d8d;
                font-size: 15px;
                margin-top: 20px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                overflow: hidden;
            }
            .news-time {
                text-align: end;
                font-size: 12px;
                color: #918d89;
            }
        }
        .more {
            width: 850px;
            margin: 0 auto;
            padding-bottom: 20px;
            button {
                display: block;
                width: 100%;
                text-align: center;
                height: 45px;
                background-color: #f1f2f3;
                border: none;
                cursor: pointer;
                color: #aaa;
                outline: none;
                &:hover {
                    color: #333;
                }
            }
        }
    }
</style>