<template>
    <div class="home-content">
        <Header />
        <el-container class="content">
            <Menu />
            <!-- <el-aside width="200px">
            </el-aside> -->

            <el-container>
                <!-- <el-aside width="200px">Aside</el-aside> -->
                <el-main>
                    <Breadcrumb />
                    <router-view />
                </el-main>
                <el-footer>
                    <Footer />
                </el-footer>
            </el-container>
        </el-container>
        <!-- <Footer /> -->
        <!-- <header>header</header> -->

    </div>
</template>

<script>
import Header from '../Layout/Header.vue'
import Menu from '../Layout/Menu.vue'
import Footer from '../Layout/Footer.vue'
import Breadcrumb from '../Home/common/Breadcrumb.vue'
export default {
    name: 'home',
    components: { Header, Menu, Footer, Breadcrumb },
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
.home-content {


    .el-container {
        .el-header .el-footer {
            background-color: #c4e1c5;
            font-size: 20px;
        }

    }

    .content {
        width: 100%;
        position: absolute;
        top: 60px;
        bottom: 0;

    }
}
</style>