<template>
    <div>
        <div class='lesson-card-container' v-for="(lesson,index) in lessonList" :key="index">
            <a href="#" target="_blank" class="lesson-card">
                <div class="lesson-card-top">
                    <img :src="lesson.image"/>
                </div>
                <div class="lesson-card-content">
                    <h3 class="lesson-card-name" v-text="lesson.name"></h3>
                    <div class="lesson-card-bottom">
                        <div class="lesson-card-info">
                            <span class="lesson-card-icon"></span>
                            <span class="lesson-amount" v-text="lesson.amount"></span>
                        </div>
                        <p class="lesson-card-desc" v-text="lesson.desc"></p>
                    </div>
                </div>
            </a>
        </div> 
    </div>
</template>


<script>
export default {
  name: "LessonContainer",
  data() {
    return {
      lessonList: [
        {
            image:'http://dummyimage.com/256x216/f1d65b',
            name:'mobx入门基础教程',
            amount:123,
            desc:'mobx框架基础入门,使用mobx做状态管理',
            type:'1'
        },
        {
            image:'http://dummyimage.com/256x216/f1d65b',
            name:'用GO语言构建自己的区块链',
            amount:234,
            desc:'区块链自己动手实现一把，啥都明白了。',
            type:'2'
        },
        {
            image:'http://dummyimage.com/256x216/f1d65b',
            name:'Crontab不知疲倦的时间表',
            amount:657,
            desc:'Crontab不知疲倦的时间表',
            type:'3'
        },
        {
            image:'http://dummyimage.com/256x216/f1d65b',
            name:'mobx入门基础教程',
            amount:123,
            desc:'mobx框架基础入门,使用mobx做状态管理',
            type:'3'
        },
        {
            image:'http://dummyimage.com/256x216/f1d65b',
            name:'用GO语言构建自己的区块链',
            amount:234,
            desc:'区块链自己动手实现一把，啥都明白了。',
            type:'1'
        },
        {
            image:'http://dummyimage.com/256x216/f1d65b',
            name:'Crontab不知疲倦的时间表',
            amount:657,
            desc:'Crontab不知疲倦的时间表',
            type:'1'
        },
        {
            image:'http://dummyimage.com/256x216/f1d65b',
            name:'用GO语言构建自己的区块链',
            amount:234,
            desc:'区块链自己动手实现一把，啥都明白了。',
            type:'2'
        },
        {
            image:'http://dummyimage.com/256x216/f1d65b',
            name:'Crontab不知疲倦的时间表',
            amount:657,
            desc:'Crontab不知疲倦的时间表',
            type:'1'
        }
      ],
    };
  }
};
</script>

<style lang="less">

.lesson-card-container {
    height: 256px;
    width: 216px;
    float: left;
    margin: 0px 0px 27px 27px;
}
.lesson-card-top {
    width: 216px;
    height: 120px;
    border-radius: 8px;
    border: none;
    transition: all .3s;
    img{
        width: 100%;
        height: 100%;
        border-radius: 8px;
        background-color: #f3f5f7;
    }
}    

.lesson-card-content{
    padding: 8px;
    .lesson-card-name{
        font-size: 16px;
        color: #07111B;
        line-height: 18px;
        word-wrap: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        max-height: 46px;
        transition: all .3s;
        font-weight: 500;
    }
    .lesson-card-info {
        font-size: 12px;
        color: #93999F;
        line-height: 20px;
        font-weight: 400;
    }
    
    .lesson-card-icon{
        display: inline-block;
        margin-right: 12px;
        background: url('../assets/images/lesson_lisener.png') no-repeat;
        background-size: cover;
        height: 12px;
        width:12px;
    }
    .lesson-card-amount{
        height: 12px;
        width:12px;
        display: inline-block;
        margin-right: 12px;
    }
    .lesson-card-desc {
        font-size: 12px;
        font-weight: 300;
        color: #93999F;
        line-height: 22px;
        margin-top: 2px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        height: 44px;
    }
}

</style>


