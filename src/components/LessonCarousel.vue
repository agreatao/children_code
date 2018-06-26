<template>
<div id="lessonCarousel" @mouseenter="enter" @mouseleave="leave">
    <transition-group tag="ul" name="spendImg">
        <li v-for="(image,index) in carouselImg" :key="index" v-show="index==mark">
            <a><img :src="image.src"></a>
        </li>
    </transition-group>
    <div class="bullet">
        <span v-for="(item,index) in carouselImg.length" :key="index" :class="{'active':index==mark}" @click="change(index)"></span>
    </div>
    <div class="switch">
        <span class="prev" @click="prev">&lt;</span>
        <span class="next" @click="next">&gt;</span>
    </div>
</div>
</template>
<script>
export default {
    name:'lessonCarousel',
    data(){
        return{
            mark:0,
            time:null,
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
            if(this.mark==3){
                this.mark=0
                return
            }
        },
        play(){
            this.time=setInterval(this.autoPlay,4000)
        },
        enter(){
            console.log('enter')
            clearInterval(this.time);
        },
        leave(){
            console.log('leave')
            this.play();
        },
        prev(){
            this.mark--;
            if(this.mark === -1){
                this.mark = 2;
                return
            }
        },
        next(){
            this.mark++;
            if(this.mark === 3){
                this.mark = 0;
                return
            }
        },
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
        bottom: 100px;
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
    .switch{
        span{
            position: absolute;
            width: 50px;
	        height: 50px;
	        line-height: 50px;
	        text-align: center;
	        background-color: rgba(0,0,0,.1);
	        font-size: 20px;
	        color: #ffffff;
	        top: 50%;
	        margin-top: -25px;
	        cursor: pointer;
	        font-family: "宋体";
        }
        span:hover{
            background-color: rgba(0,0,0,.5);
        }
    }
    .prev{
        left: 0;
    }
    .next{
        right: 0;
    }
    .active{
        background-color: red !important;
    }
    .spendImg-enter-active{
        transform: translateX(0);
        transition: all 1s ease;
    }
    .spendImg-leave-active{
        transform: translateX(-100%);
        transition: all 1s ease;
    }
    .spendImg-enter{
        transform: translateX(100%);
    }
    .spendImg-leave{
        transform: translateX(0);
    }
}

</style>


