<template>
    <div class="teacher-carousel">
        <transition-group tag="ul" class='teacher-carousel-ul' name="teacher-carousel">
            <li v-for="(item, index) in list" :key="index" v-show="index === current">
                <div class="teacher-item">
                    <img :src="item.image"/>
                    <h2 class="name">张三</h2>
                    <p class="job">杭州电子科技大学 教授</p>
                    <div class="honer">
                        <p>荣誉A</p>
                        <p>荣誉B</p>
                        <p>荣誉C</p>
                        <p>荣誉D</p>
                    </div>
                </div>
                <div class="teacher-item">
                    <img :src="item.image" />
                    <h2 class="name">张三</h2>
                    <p class="job">杭州电子科技大学 教授</p>
                    <div class="honer">
                        <p>荣誉A</p>
                        <p>荣誉B</p>
                        <p>荣誉C</p>
                        <p>荣誉D</p>
                    </div>
                </div>
                <div class="teacher-item">
                    <img :src="item.image" />
                    <h2 class="name">张三</h2>
                    <p class="job">杭州电子科技大学 教授</p>
                    <div class="honer">
                        <p>荣誉A</p>
                        <p>荣誉B</p>
                        <p>荣誉C</p>
                        <p>荣誉D</p>
                    </div>
                </div>
            </li>
        </transition-group>
        <div class="teacher-carousel-control">
            <span v-for="(item, index) in list" :class="{'active': index === current}" @click="change(index)"></span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'TeacherCarousel',
        data() {
            return {
                list: [{
                    image: "http://dummyimage.com/150x150/f1d65b"
                }, {
                    image: "http://dummyimage.com/150x150/40b7ea"
                }],
                current: 0,
                timer: null
            };
        },
        created() {

        },
        methods: {
            stop() {

            },
            change(index) {
                this.current = index;
            }
        }
    }
</script>
<style lang="less">
    .teacher-carousel {
        position: relative;
        height: 550px;
        width: 100%;
        overflow: hidden;
        background-color: #fff;
        padding: 5px 0;
    }

    .teacher-carousel-ul {
        width: 100%;
        height: 100%;
        li {
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            text-align: center;
        }
    }

    .teacher-carousel-control {
        position: absolute;
        z-index: 10;
        top: 530px;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        font-size: 0;
        span {
            display: inline-block;
            height: 3px;
            width: 43px;
            margin: 0 3px;
            background-color: #e5e5e5;
            cursor: pointer;
            &.active {
                background-color: #999;
            }
        }
    }

    .teacher-item {
        display: inline-block;
        width: 326px;
        height: 490px;
        margin-left: 50px;
        background-color: #ffffff;
        box-shadow: 2px 3px 16px 1px rgba(4, 0, 0, 0.11);
        border-radius: 4px;
        &:first-child {
            margin-left: 0;
        }
        img {
            display: block;
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin: 44px auto 25px;
        }
    }
    .teacher-carousel-enter-to {
        transition: all 1s ease;
        transform: translateX(0);
    }

    .teacher-carousel-leave-active {
        transition: all 1s ease;
        transform: translateX(-100%);
    }

    .teacher-carousel-enter {
        transform: translateX(100%);
    }

    .teacher-carousel-leave {
        transform: translateX(0);
    }
</style>