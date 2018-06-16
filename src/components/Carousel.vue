<!-- xuao -->
<template>
    <div class="carousel-wrap" id="carousel" @mouseover="stop" @mouseout="auto">
        <img class="carousel-item"
             :class="{
                'right-center': ((current) % 3 === 1),
                'left-right': ((current) % 3 === 0),
                'center-left': ((current) % 3 === 2),
                'left-center': ((current) % 3 === 1),
                'right-left': ((current) % 3 === 0),
                'center-right': ((current) % 3 === 2),
             }"
             :src="list[0].image"
             @click="itemClick(current % 3)"
        />
        <img class="carousel-item"
             :class="{
                'right-center': ((current + 1) % 3 === 1),
                'left-right': ((current + 1) % 3 === 0),
                'center-left': ((current + 1) % 3 === 2),
                'left-center': ((current + 1) % 3 === 1),
                'right-left': ((current + 1) % 3 === 0),
                'center-right': ((current + 1) % 3 === 2),
             }"
             :src="list[1].image"
             @click="itemClick((current + 1) % 3)"
        />
        <img class="carousel-item"
             :class="{
                'right-center': ((current + 2) % 3 === 1),
                'left-right': ((current + 2) % 3 === 0),
                'center-left': ((current + 2) % 3 === 2),
                'left-center': ((current + 2) % 3 === 1),
                'right-left': ((current + 2) % 3 === 0),
                'center-right': ((current + 2) % 3 === 2),
             }"
             :src="list[2].image"
             @click="itemClick((current + 2) % 3)"
        />
    </div>
</template>
<script>
    export default {
        props: ['data'],
        name: 'Carousel',
        data() {
            return {
                list: [],
                current: 0,
                waitList: [],
                timer: null
            }
        },
        created() {
            this.data.forEach((item, index) => {
                if(index < 3) {
                    this.list.push(item);
                } else {
                    this.waitList.push(item);
                }
            });
            this.$nextTick(() => {
                this.auto();
            });
        },
        methods: {
            itemClick(position) {
                if(position === 0 || position === 2) { // right
                    if(++this.current >= 3) {
                        this.current = 0;
                    }
                    if(this.current % 3 === 0) {
                        this.waitList.push(this.list[0]);
                        this.list[0] = this.waitList.shift();
                    }
                    if((this.current + 1) % 3 === 0) {
                        this.waitList.push(this.list[1]);
                        this.list[1] = this.waitList.shift();
                    }
                    if((this.current + 2) % 3 === 0) {
                        this.waitList.push(this.list[2]);
                        this.list[2] = this.waitList.shift();
                    }
                }
                if(position === 1) { // center
                    console.log('open');
                }
            },
            stop() {
                if(this.timer) {
                    clearInterval(this.timer);
                    this.timer = null;
                }
            },
            auto() {
                if(!this.timer) {
                    this.timer = setInterval(() => {
                        if(++this.current >= 3) {
                            this.current = 0;
                        }
                        if(this.current % 3 === 0) {
                            this.waitList.push(this.list[0]);
                            this.list[0] = this.waitList.shift();
                        }
                        if((this.current + 1) % 3 === 0) {
                            this.waitList.push(this.list[1]);
                            this.list[1] = this.waitList.shift();
                        }
                        if((this.current + 2) % 3 === 0) {
                            this.waitList.push(this.list[2]);
                            this.list[2] = this.waitList.shift();
                        }
                    }, 4000);
                }
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
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
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