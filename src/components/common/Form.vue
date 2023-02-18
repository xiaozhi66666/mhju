<template>
    <div class="table">
        <el-table v-loading="loading" border :data="comData" style="width: 100%">
            <el-table-column type="index" align="center" :index="currentIndex">
            </el-table-column>
            <el-table-column :prop="i.prop" :label="i.label" align="center" v-for="i, index in propsArray" :key="index">
            </el-table-column>
            <el-table-column fixed="right" label="操作" align="center">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="primary" size="small"
                        icon="el-icon-zoom-in">查看</el-button>
                    <el-button type="danger" size="small" @click="del(scope.row)" icon="el-icon-delete">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage" :page-sizes="[5, 10, 15, 20]" :page-size="5"
                layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
            </el-pagination>

        </div>
    </div>
</template>

<script>
export default {
    name: 'MhjyForm',
    props: {
        tableData: {
            type: Array,
            default: []
        },
        propsArray: {
            type: Array,
            default: []
        },
        loading: {
            type: Boolean,
            default: false
        },
        total: {
            type: Number,
            default: 0
        }

    },
    data() {
        return {
            currentPage: 1,
            pageSize: 5,
            // total: ''
        };
    },

    mounted() {

    },
    computed: {
        comData() {
            return this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
        },

    },

    methods: {
        // 查看详情
        handleClick(i) {
            console.log(i);
            // 打开父组件的弹框
            this.$emit('open', i)
        },
        // 删除
        del(i) {
            this.$emit('del', i)
        },
        handleSizeChange(val) {
            this.pageSize = val
            // this.pageSize = val
            // this.pageSize = 1
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage = val
            console.log(`当前页: ${val}`);
        },

        currentIndex(index) {
            // console.log('index-----------', index);
            // 序号 = (默认序号 + 1 + （ 当前页码 - 1 ） * 一页条数 ) + 1
            return index + 1 + (this.currentPage - 1) * this.pageSize
        }
    },
};
</script>

<style lang="less" scoped>
.table {
    .pagination {
        margin-top: 30px;
    }
}
</style>