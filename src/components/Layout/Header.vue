<template>
    <div>
        <header class="content-header">
            <div class="icon">
                <img src="@/assets/images/logo.png" alt="">
                <p>~墨涵教育~</p>
            </div>
            <div class="user">
                <img src="" alt="">
                <span>欢迎您！</span>
                <span>{{ userInfo.username }}</span>
                <img :src=" userInfo.imageUrl " alt="" v-if="userInfo.imageUrl">
                <i class="el-icon-user-solid" v-else></i>
                <!-- <span>退出</span> -->
            </div>
        </header>

    </div>
</template>

<script>
import storage from '@/utils/storage';
export default {
    name: 'MhjyHeader',

    data() {
        return {
            // userInfo:{}
        };
    },

    mounted() {

    },
    computed: {
        userInfo() {
            return storage.get('userInfo')
        }
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

    .icon {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 55px;
            border-radius: 15px;
        }
    }

    .user {
        display: flex;
        align-items: center;

        .el-icon-user-solid {
            font-size: 30px;
            margin-left: 20px;
        }

        img {
            width: 58px;
            border-radius: 30px;
            margin-left: 20px;
        }
    }
}
</style>