<template>
    <div class="carousel-wrap" id="carousel">
        <a>
            <img v-for="(item, index) in slideList" :key="index" :src="item.image" :href="item.clickUrl" />
        </a>
    </div>
</template>
<script>
    export default {
        name: 'Carousel',
        data() {
            return {
                slideList: [
                    {
                        "clickUrl": "#",
                        "image": "http://dummyimage.com/280x492/f1d65b"
                    },
                    {
                        "clickUrl": "#",
                        "image": "http://dummyimage.com/280x492/40b7ea"
                    },
                    {
                        "clickUrl": "#",
                        "image": "http://dummyimage.com/280x492/00ff00"
                    }
                ],
                currentIndex: 0,
                timer: null
            }
        },
        created() {
            this.$nextTick(() => {
                this.timer = setInterval(() => {

                }, 4000);
            })
        },
        methods: {

        }
    }
</script>
<style lang='less'>

</style>