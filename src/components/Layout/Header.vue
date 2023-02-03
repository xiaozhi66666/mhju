<template>
    <div>
        <header class="content-header">
            <div class="icon">
                企业图标
                <img src="" alt="">
            </div>
            <div class="user">
                <img src="" alt="">
                <span>欢迎您！</span>
                <i class="el-icon-user-solid"></i>
                <!-- <span>退出</span> -->
            </div>
        </header>

    </div>
</template>

<script>
export default {
    name: 'MhjyHeader',

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
.content-header {
    height: 60px;
    padding: 0px 10px;
    background-color: #21a0ff;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .user {
        display: flex;
        align-items: center;

        .el-icon-user-solid {
            font-size: 30px;
            margin-left: 20px;
        }
    }
}
</style>