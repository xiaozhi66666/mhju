<template>
    <div class="menu">
        <el-aside width="200px" style="background-color: #21a0ff">
            <el-menu router default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
                active-text-color="#ffd04b">
                <template v-for="(i, index) in menus">
                    <el-submenu :index="index + ''" :key="index" v-if="!i.hidden">
                        <template slot="title">
                            <i :class="i.icon"></i>
                            <span>{{ i.name }}</span>
                        </template>
                        <!-- <template v-for="(c, index) in i.children"> -->
                        <el-menu-item-group v-for="(c, index) in i.children" :key="index">
                            <!-- <i :class="c.icon"></i> -->
                            <el-menu-item :index="c.path + ''"><i :class="c.icon"></i>
                                <span>{{ c.name }}</span></el-menu-item>
                        </el-menu-item-group>
                        <!-- </template> -->
                    </el-submenu>
                </template>
            </el-menu>
        </el-aside>
    </div>
</template>

<script>
export default {
    name: 'MhjyMenu',

    data() {
        return {
            menus: []
        };
    },


    mounted() {

    },
    created() {
        // console.log(this.$router.options.routes);
        this.menus = this.$router.options.routes
    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
.menu {
    overflow-y: hidden;

    .el-aside {
        height: 100%;
        // overflow: hidden;

        .el-menu {
            height: 100%;

            .el-submenu {
                .el-submenu__title {
                    span {
                        margin-left: 6px;
                    }
                }

                .el-menu-item {
                    min-width: 0;

                    span {
                        margin-left: 6px;
                    }

                }
            }
        }
    }
}
</style>