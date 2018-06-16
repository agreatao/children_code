<template>
    <div class="home">
        <!-- 轮播 -->
        <Carousel :data="data1" />
        <!-- 副级广告区 -->
        <div class="ad">
            <img v-for="(item, index) in adList" :src="item.image" :key="index" />
        </div>
        <!-- 课程内容 -->
    </div>
</template>
<script>
    import Carousel from '@/components/Carousel';
    export default {
        name: 'Home',
        components: { Carousel },
        data() {
            return {
                data1: [
                    {
                        "image": "http://dummyimage.com/520x300/f1d65b"
                    },
                    {
                        "image": "http://dummyimage.com/580x400/40b7ea"
                    },
                    {
                        "image": "http://dummyimage.com/280x492/00ff00"
                    },
                    {
                        "image": "http://dummyimage.com/280x492/ff0000"
                    },
                    {
                        "image": "http://dummyimage.com/280x492/0000ff"
                    }
                ],
                adList: [
                    {
                        "image": "http://dummyimage.com/300x200/f1d65b"
                    },
                    {
                        "image": "http://dummyimage.com/300x200/40b7ea"
                    },
                    {
                        "image": "http://dummyimage.com/300x200/00ff00"
                    }
                ],
            }
        }
    }
</script>
<style lang='less'>
    .ad {
        margin-top: 46px;
        text-align: center;
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
</style>