<template>
    <div id="lesson">
        <!--轮播-->
        <LessonCarousel />
        <!--热门课程-->
        <div class="hotLesson">
        <h4 data-v-4b424b3b>热门课程</h4>
        <img v-for="(item,index) in hotCourse" :key="index" :src="item.src" @click="item.url">
        </div>
        <!--全部课程列表-->
        <div class="allCourse-box">
          <LessonContainer :data="data" />
        </div>
        
    </div>
  
</template>
<script>
import LessonCarousel from "@/components/LessonCarousel"
import LessonContainer from "@/components/LessonContainer"
export default {
  name: "Lesson",
  components:{LessonContainer,LessonCarousel},
  data() {
    return {
      data: [{
        name: '机器人',
        list: [
        {
            image:'http://dummyimage.com/256x216/f1d65b',
            name:'mobx入门基础教程',
            desc:'mobx框架基础入门,使用mobx做状态管理',
            teacher:'张三',
        },
        {
            image:'http://dummyimage.com/256x216/f1d65b',
            name:'用GO语言构建自己的区块链',
            desc:'区块链自己动手实现一把，啥都明白了。',
            teacher:'张三',
        },
        
        {
            image:'http://dummyimage.com/256x216/f1d65b',
            name:'用GO语言构建自己的区块链',
            desc:'区块链自己动手实现一把，啥都明白了。',
            teacher:'李四',
        },
        {
            image:'http://dummyimage.com/256x216/f1d65b',
            name:'Crontab不知疲倦的时间表',
            desc:'Crontab不知疲倦的时间表',
            teacher:'李四',
        },
        {
            image:'http://dummyimage.com/256x216/f1d65b',
            name:'用GO语言构建自己的区块链',
            desc:'区块链自己动手实现一把，啥都明白了。',
            teacher:'李四',
        },
        {
            image:'http://dummyimage.com/256x216/f1d65b',
            name:'Crontab不知疲倦的时间表',
            desc:'Crontab不知疲倦的时间表',
            teacher:'李四',
        }
      ]
      },{
        name: 'Scratch',
        list: [
        {
            image:'http://dummyimage.com/256x216/f1d65b',
            name:'用GO语言构建自己的区块链',
            desc:'区块链自己动手实现一把，啥都明白了。',
            teacher:'李四',
        },
        {
            image:'http://dummyimage.com/256x216/f1d65b',
            name:'Crontab不知疲倦的时间表',
            desc:'Crontab不知疲倦的时间表',
            teacher:'李四',
        },
        {
            image:'http://dummyimage.com/256x216/f1d65b',
            name:'用GO语言构建自己的区块链',
            desc:'区块链自己动手实现一把，啥都明白了。',
            teacher:'李四',
        },
        {
            image:'http://dummyimage.com/256x216/f1d65b',
            name:'Crontab不知疲倦的时间表',
            desc:'Crontab不知疲倦的时间表',
            teacher:'李四',
        }
      ]
      }, {
        name: '人工智能',
        list: [{
            image:'http://dummyimage.com/256x216/f1d65b',
            name:'Crontab不知疲倦的时间表',
            desc:'Crontab不知疲倦的时间表',
            teacher:'李四',
        },
        {
            image:'http://dummyimage.com/256x216/f1d65b',
            name:'mobx入门基础教程',
            desc:'mobx框架基础入门,使用mobx做状态管理',
            teacher:'李四',
        }]
      },
      ],
      hotCourse: [
        {
          src: "http://dummyimage.com/300x200/ffe599",
          url: "#"
        },
        {
          src: "http://dummyimage.com/300x200/dd7e6b",
          url: "#"
        },
        {
          src: "http://dummyimage.com/300x200/b6d7a8",
          url: "#"
        }
      ],
      nowIndex: 0,
      courseIndex: -1
    };
  },
  methods: {
    isSelect(index) {
      this.nowIndex = index;
      this.courseIndex = index + 1;
    }
  },
  mounted() {}
};
</script>
<style lang='less' scoped>
#lesson {
  .hotLesson {
    width: 1000px;
    margin: 0 auto;
    height: 400px;
    text-align: center;
    padding: 65px 0;
    p {
      font-size: 20px;
      text-align: center;
      margin-bottom: 35px;
  }
    img {
      display: inline-block;
      margin-left: 20px;
    }
  }
  
    
}

.allCourse-box{
  width:1000px;
  margin:40px auto;
  height: 1000px;
  padding: 65px 0;
}
</style>
