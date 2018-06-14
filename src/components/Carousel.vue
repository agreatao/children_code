<template>
    <div class="carousel-wrap" id="carousel" @mouseover="stop" @mouseout="autoPlay">
        <img class="carousel-item"
           :class="{
               'right-center': (currentIndex == index),
               'center-left': (((currentIndex + 1) % 3) == index),
               'left-right': (((currentIndex + 2) % 3) == index),
               'left-center': (currentIndex == index),
               'center-right': (((currentIndex + 2) % 3) == index),
               'right-left': (((currentIndex + 1) % 3) == index)
           }"
           v-for="(item, index) in list" :key="index" @click="itemClick(index)" :src="item.image" />
    </div>
</template>
<script>
    export default {
        name: 'Carousel',
        data() {
            return {
                list: [
                    {
                        "clickUrl": "#",
                        "image": "http://dummyimage.com/520x300/f1d65b"
                    },
                    {
                        "clickUrl": "#",
                        "image": "http://dummyimage.com/580x400/40b7ea"
                    },
                    {
                        "clickUrl": "#",
                        "image": "http://dummyimage.com/280x492/00ff00"
                    }
                ],
                currentIndex: 0,
                timer: null
            }
        },
        created() {
            this.$nextTick(() => {
                this.autoPlay();
            });
        },
        methods: {
            itemClick(index) {

            },
            stop() {
                if(this.timer) {
                    clearInterval(this.timer);
                    this.timer = null;
                }
            },
            autoPlay() {
                if(!this.timer)
                    this.timer = setInterval(() => {
                        if(++this.currentIndex >= 3) {
                            this.currentIndex = 0;
                        }
                    }, 4000);
            }
        }
    }
</script>
<style lang='less'>
    .carousel-wrap {
        width: 1000px;
        height: 300px;
        margin: 0 auto;
        z-index: 10;
    }

    .carousel-item {
        width: 580px;
        height: 300px;
        position: absolute;
        transform-style: preserve-3d;
        border-radius: 16px;
        box-shadow: 0 4px 26px 0 rgba(0, 0, 0, .2);
        cursor: pointer;
        overflow: hidden;
    }

    .left-center {
        animation: left-to-center .5s ease forwards;
    }

    .right-left {
        animation: right-to-left .5s ease forwards;
    }

    .center-right {
        animation: center-to-right .5s ease forwards;
    }

    .left-right {
        animation: left-to-right .5s ease forwards;
    }

    .right-center {
        animation: right-to-center .5s ease forwards;
    }

    .center-left {
        animation: center-to-left .5s ease forwards;
    }

    @keyframes left-to-center {
        from {
            transform: translate3d(-53px, 0, 10px) scale(.82);
            z-index: 9;
            opacity: .6;
        }
        to {
            transform: translate3d(210px, 0, 0);
            z-index: 10;
            width: 580px;
            height: 300px;
        }
    }

    @keyframes right-to-left {
        from {
            transform: translate3d(471px, 0, 10px) scale(.82);
            opacity: .6;
        }
        to {
            transform: translate3d(-53px, 0, 10px) scale(.82);
            opacity: .6;
        }
    }

    @keyframes center-to-right {
        from {
            transform: translate3d(210px, 0, 0);
            z-index: 10;
        }
        to {
            transform: translate3d(471px, 0, 10px) scale(.82);
            opacity: .6;
        }
    }

    @keyframes left-to-right {
        from {
            transform: translateZ(10px) scale(.82);
            opacity: .6;
        }
        to {
            transform: translate3d(471px, 0, 10px) scale(.82);
            opacity: .6;
        }
    }

    @keyframes right-to-center {
        from {
            transform: translate3d(471px, 0, 10px) scale(.82);
            z-index: 9;
            opacity: .6;
        }
        to {
            transform: translate3d(210px, 0, 0) scale(1);
            z-index: 10;
        }
    }

    @keyframes center-to-left {
        from {
            transform: translate3d(210px, 0, 0);
            z-index: 10;
        }
        to {
            transform: translate3d(-53px, 0, 10px) scale(.82);
            opacity: .6;
        }
    }
</style>