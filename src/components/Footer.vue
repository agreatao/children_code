<template>
    <div class="footer">
        <div>
            <ul class="clearfix">
                <li>a</li>
                <li>b</li>
                <li>c</li>
            </ul>
            <ol>
                <li>d</li>
                <li>e</li>
            </ol>
        </div>

    </div>
</template>
<script>
    export default {
        name: 'Footer'
    }
</script>
<style lang="less">
    .footer {
        min-height: 35px;
        background-color: #222;
        color: #fff;
        ul {
            li {
                display: block;
                float: left;
            }
            &:before, &:after {
                clear: both;
                content: '';
                visibility: hidden;
                display: block;
            }

        }
        .claerfix {

        }


    }


</style>