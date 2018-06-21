<template>
    <div class='lesson-card-container'>
        <a href="#" target="_blank" class="lesson-card">
            <div class="lesson-card-top">
                <img src="" />
            </div>
            <div class="lesson-card-content">
                <h3 class="lesson-card-name">课程名称</h3>
                <p class="lesson-card-bottom">
                    <div class="lesson-card-info">
                        <span class="lesson-card-icon"></span>
                        <span class="lesson-amount">课程数量</span>
                    </div>
                    <p class="lesson-card-desc">课程介绍</p>
            </div>
        </a>
    </div>
</template>


<script>
export default {
  name: "LessonContainer",
  data() {
    return {
      lessonlist: [{}, {}]
    };
  }
};
</script>

<style>
*{
    font-size: "PingFang SC", Helvetica, "Helvetica Neue", 微软雅黑, Tahoma, Arial, sans-serif;
}
.lesson-card-container {
    height: 256px;
    width: 216px;
    float: left;
    margin: 0px 0px 18px 18px;
}
.lesson-card-top {
    width: 216px;
    height: 120px;
    transition: all .3s;
}
.lesson-card-top img{
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: #f3f5f7;
}
.lesson-card-content{
    padding: 12px 8px;
}
.lesson-card-content .lesson-card-name{
    font-size: 16px;
    color: #07111B;
    line-height: 24px;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-height: 46px;
    transition: all .3s;
    }
.lesson-card-content .lesson-card-info {
    font-size: 12px;
    color: #93999F;
    line-height: 24px;
    font-weight: 400;
}
.lesson-card-container .lesson-card-content .lesson-card-info span {
    display: inline-block;
    margin-right: 12px;
}
.lesson-card-container .lesson-card-content .lesson-card-desc {
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
</style>


