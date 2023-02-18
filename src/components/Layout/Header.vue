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
                <el-dropdown @command="handleCommand">
                    <img :src="userInfo.imageUrl" alt="" v-if="userInfo.imageUrl">
                    <i class="el-icon-user-solid" v-else></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item :command="i" v-for="(i, index) in testA" :key="index">{{
                            i.meg
                        }}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
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
            testA: [{ id: 1, meg: '退出登录' }, { id: 2, meg: '修改个人资料' }]
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
        handleCommand(a) {
            if (a.id == 1) {
                // 退出登录
                this.$store.commit('loginOut')
                this.$router.push('/login')
            } else {
                this.$message({ message: '修改个人资料模块待开发中~', type: 'success' })
            }
        }
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