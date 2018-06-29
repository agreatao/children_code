<template>
    <div>
        <div class="allCourse-option">
            <h4 data-v-4b424b3b>全部课程</h4>
            <ul class="allCourse-group">
                <li class="allCourse-list"
                    v-for="(item,index) in data"
                    :key="index"  
                    :class="{checked:index==nowIndex}"
                    @click="isSelect(index)" style="cursor:pointer;">{{item.name}}</li>
            </ul>
        </div>
        <div class='lesson-card-container' v-for="(item, index) in data" :key="index" v-show="index == nowIndex">
                <a href="#" target="_blank">
                    <span class="lesson-card" v-for="(k, i) in item.list" :key="i" >
                        <span class="lesson-card-top">
                            <img :src="k.image"/>
                        </span>
                        <span class="lesson-card-content">
                            <h3 class="lesson-card-name" v-text="k.name"></h3>
                            <span class="lesson-card-bottom">
                                <span class="lesson-card-info">
                                    <span class="lesson-card-icon"></span>
                                    <span class=".lesson-card-teacher" v-text="k.teacher"></span>
                                </span>
                                <p class="lesson-card-desc" v-text="k.desc"></p>
                            </span>
                        </span>
                    </span>
                </a>
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
        },
        
    }
};
</script>

<style lang="less">
.allCourse-option{
    width: 1000px;
    margin: 0 auto;
    .allCourse-title{
        font-size: 20px;
        text-align: center;
        margin-bottom: 35px;
    }
    .allCourse-group{
        text-align: center;
        margin-bottom: 20px;
        .allCourse-list{
            display: inline-block;
            padding: 6px 12px;
            font-size: 16px;
            font-weight: 400;
            border: 1px solid transparent; 
            border-radius: 4px;
        }
        .allCourse-list:hover{
            color: #4cae4c;
        }
    }
} 
.checked {
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
}

.lesson-card-container {
    float: left;
    margin: 0px 0px 27px 27px;
    padding:0 50px 0 50px;
    .lesson-card{
        display: inline-block;
        margin:0 45px 50px 0;
        width: 246px;
        height: 270px;
        border-radius: 8px;
        padding:15px;
        transition:all .5s;
    }
    .lesson-card:hover{
        background-color: #f0f0f0;
        box-shadow:0 3px 2px #c0c0c0;
    }
}
.lesson-card-top {
    width: 216px;
    height: 120px;
    border-radius: 8px;
    border: none;
    transition: all .3s;
    display: block;
    img{
        width: 100%;
        height: 100%;
        border-radius: 8px;
        background-color: #f3f5f7;
    }
}    

.lesson-card-content{
    display: block;
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
        background: url('../assets/images/lesson_teacher.png') no-repeat;
        background-size: cover;
        height: 12px;
        width:12px;
    }
    .lesson-card-teacher{
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


