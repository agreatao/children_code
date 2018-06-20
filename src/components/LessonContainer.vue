<template>
    <div class='lesson-card-container'>
        <a href="" target="_blank" class="lesson-card">
            <div class="lesson-card-top">
                <img />
            </div>
            <div class="lesson-card-content">
                <h3 class="lesson-card-name">课程名称</h3>
                <p class="lesson-card-bottom">
                    <div class="lesson-card-info">
                        <span class="lesson-card-icon"></span>
                        <span class="lesson-amount">课程数量</span>
                    </div>
                <p class="lesson-card-desc"></p>
            </div>
        </a>
    </div>
</template>


<script>
export default {
    name:'LessonContainer',
    data(){
        return{
            lessonlist:[{},{}],
             
        };
    }
}
</script>

<style>
.lesson-card-container{height: 256px; width: 216px; float: left; margin:0px 0px 18px 18px; background-color: black;}

</style>


