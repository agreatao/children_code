<template>
    <div>
        <div class="allCourse">
            <p>全部课程</p>
            <ul>
                <li v-for="(item,index) in data"
                    :key="index" class="courseBtn" 
                    :class="{checked:index==nowIndex}"
                    @click="isSelect(index)">{{item.name}}</li>
            </ul>
        </div>
        <div class='lesson-card-container' v-for="(item, index) in data" :key="index">
            <div v-show="index == nowIndex">
                <a href="#" target="_blank" class="lesson-card" v-for="(k, i) in item.list" :key="i">
                    <div class="lesson-card-top">
                        <img :src="k.image"/>
                    </div>
                    <div class="lesson-card-content">
                        <h3 class="lesson-card-name" v-text="k.name"></h3>
                        <div class="lesson-card-bottom">
                            <div class="lesson-card-info">
                                <span class="lesson-card-icon"></span>
                                <span class="lesson-amount" v-text="k.amount"></span>
                            </div>
                            <p class="lesson-card-desc" v-text="k.desc"></p>
                        </div>
                    </div>
                </a>
            </div>
            
        </div> 
    </div>
</template>


<script>
export default {
    props: ['data'],
  name: "LessonContainer",
  data() {
    return {
      nowIndex: 0,
    };
  },
  methods: {
      isSelect(index) {
      this.nowIndex = index;
      this.courseIndex = index + 1;
    }
  }
};
</script>

<style lang="less">
.checked {
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
}

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
    .allCourse {
        width: 1000px;
        margin: 0 auto;
        p {
        font-size: 20px;
        text-align: center;
        margin-bottom: 35px;
        }
        ul {
        text-align: center;
            .courseBtn {
                display: inline-block;
                padding: 6px 12px;
                font-size: 16px;
                font-weight: 400;
                border: 1px solid transparent; 
                border-radius: 4px;
            }
        }
    }

}

</style>


