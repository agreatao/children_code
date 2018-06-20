<template>
    <div class="teacher-carousel">
        <transition-group tag="ul" class='teacher-carousel-ul' :name="left ? 'teacher-carousel-left' : 'teacher-carousel'">
            <li v-for="(item, index) in list" :key="index" v-show="index === current">
                <div class="teacher-item">
                    <img :src="item.image"/>
                    <h2 class="name">张三</h2>
                    <p class="introduce">杭州电子科技大学 教授</p>
                    <div class="achievements">
                        <p>荣誉A</p>
                        <p>荣誉B</p>
                        <p>荣誉C</p>
                        <p>荣誉D</p>
                    </div>
                </div>
                <div class="teacher-item">
                    <img :src="item.image" />
                    <h2 class="name">张三</h2>
                    <p class="introduce">杭州电子科技大学 教授</p>
                    <div class="achievements">
                        <p>荣誉A</p>
                        <p>荣誉B</p>
                        <p>荣誉C</p>
                        <p>荣誉D</p>
                    </div>
                </div>
                <div class="teacher-item">
                    <img :src="item.image" />
                    <h2 class="name">张三</h2>
                    <p class="introduce">杭州电子科技大学 教授</p>
                    <div class="achievements">
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
        <a class="teacher-carousel-control-left" @click="changeLeft"></a>
        <a class="teacher-carousel-control-right" @click="changeRight"></a>
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
                }, {
                    image: "http://dummyimage.com/150x150/407bea"
                }],
                current: 0,
                left: false
            };
        },
        created() {

        },
        methods: {
            change(index) {
                if(index < this.current) {
                    this.left = true;
                } else {
                    this.left = false;
                }
                this.current = index;
            },
            changeLeft() {
                this.left = true;
                if(--this.current < 0)  {
                    this.current = this.list.length - 1;
                }
            },
            changeRight() {
                this.left = false;
                if(++this.current >= this.list.length) {
                    this.current = 0;
                }
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
        .name {
            font-size: 24px;
             color: #353535;
            text-align: center;
            margin: 0 auto 21px;
        }
        .introduce {
            color: #353535;
            font-size: 16px;
            text-align: center;
            margin: 0 auto 15px;
        }
        .achievements p {
            width: 210px;
            margin: 0 auto;
            font-size: 14px;
            color: #999;
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

    .teacher-carousel-control-left {
        display: block;
        background: url("../assets/images/PJ_left.png") no-repeat 0 0;
        width: 21px;
        height: 38px;
        position: absolute;
        top: 50%;
        margin-top: -19px;
        left: 20px;
    }

    .teacher-carousel-control-right {
        display: block;
        background: url("../assets/images/PJ_right.png") no-repeat 0 0;
        width: 21px;
        height: 38px;
        position: absolute;
        top: 50%;
        margin-top: -19px;
        right: 20px;
    }


    .teacher-carousel-enter {
        transform: translateX(100%);
    }

    .teacher-carousel-enter-to {
        transition: all 1s ease;
        transform: translateX(0);
    }

    .teacher-carousel-leave {
        transform: translateX(0);
    }

    .teacher-carousel-leave-active {
        transition: all 1s ease;
        transform: translateX(-100%);
    }

    .teacher-carousel-left-enter {
        transform: translateX(-100%);
    }

    .teacher-carousel-left-enter-to {
        transition: all 1s ease;
        transform: translateX(0);
    }

    .teacher-carousel-left-leave {
        transform: translateX(0);
    }

    .teacher-carousel-left-leave-active {
        transition: all 1s ease;
        transform: translateX(100%);
    }
</style>