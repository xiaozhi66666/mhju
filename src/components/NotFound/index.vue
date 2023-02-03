<template>
    <div class="notFound">
        <div class="btn-f">
            <el-button @click="$router.push('/home')">返回首页</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'notFound',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
html,
body {
    width: 100%;
    height: 100%;
}

.notFound {
    width: 100%;
    height: 100%;
    background: url('@/assets/images/404.png') no-repeat;
    background-size: cover;
    position: absolute;

    .btn-f {
        width: 100%;
        height: 100%;
        position: relative;

        .el-button {
            width: 220px;
            position: absolute;
            bottom: 20%;
            left: 43%;
            color: #fff;
            background-color: #333039;
        }
    }
}
</style>