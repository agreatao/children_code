<template>
<div id="lessonCarousel">
    <transition-group tag="ul" name="spendImg">
        <li v-for="(image,index) in carouselImg" :key="index" v-show="index==mark">
            <a><img :src="image.src"></a>
        </li>
    </transition-group>
    <div class="bullet">
        <span v-for="(item,index) in carouselImg.length" :key="index" :class="{'active':index==mark}" @click="change(index)"></span>
    </div>
</div>
</template>
<script>
export default {
    name:'lessonCarousel',
    data(){
        return{
            mark:0,
            carouselImg:[
                {src: "http://dummyimage.com/1400x500/ffe599"},
                {src: "http://dummyimage.com/1400x500/dd7e6b"},
                {src: "http://dummyimage.com/1400x500/b6d7a8"}
            ]
        }
    },
    methods:{
        change(index){
            this.mark=index;
        },
        autoPlay(){
            this.mark++
            if(this.mark==4){
                this.mark=0
                return
            }
        },
        play(){
            setInterval(this.autoPlay,3000)
        }
    },
    created(){
        this.play()
    }
    
}
</script>
<style lang="less">
#lessonCarousel{
    width: 100%;
    height: 500px;
    ul{
        li{
            display: inline-block;
            position: absolute;
            img{
                width: 1400px;
                height: 500px;
            }
        }
    }
    .bullet{
        position: absolute;
        font-size: 0;
        bottom: -170px;
        left: 50%;
        margin-left: -42px;
        span{
            display: inline-block;
	        width: 10px;
	        height: 10px;
	        background-color: #ffffff;
	        margin-left: 15px;
            border-radius: 10px;
            :first-child{
                margin-left: 0;
            }
        }
    }
}
.active{
        background-color: red;
    }
    .image-enter-active{
        transform: translateX(0);
        transition: all 1s ease;
    }
    .image-leave-active{
        transform: translateX(-100%);
        transition: all 1s ease;
    }
    .image-enter{
        transform: translateX(100%);
    }
    .image-leave{
        transform: translateX(0);
    }
</style>


