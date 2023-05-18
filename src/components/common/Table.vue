<template>
    <div class="table">
        <div class="export">
            <el-button type="primary" size="medium" @click="exportExcel" class="exportBtn">Excel导出</el-button>
        </div>
        <el-table id="outTable" :stripe="stripe" v-loading="loading" border :data="comData" style="width: 100%">
            <div v-if="isShowIndex">
                <el-table-column type="index" align="center" :index="currentIndex">
                </el-table-column>
            </div>
            <el-table-column :prop="i.prop" :label="i.label" align="center" v-for="i, index in propsArray" :key="index">
            </el-table-column>
            <el-table-column fixed="right" label="操作" align="center">
                <template slot-scope="scope">
                    <el-button :circle="btnS.isCircle" @click="handleClick(scope.row)" type="primary" size="small"
                        :icon="btnS.icon1">{{ btnS.msg1 ? btnS.msg1 : ''
                        }}</el-button>
                    <el-button :circle="btnS.isCircle" type="danger" size="small" @click="del(scope.row)"
                        :icon="btnS.icon2">{{
                            btnS.msg2 ? btnS.msg2 : ''
                        }}</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
                :page-sizes="[5, 10, 15, 20]" :page-size="5" layout="total, sizes, prev, pager, next, jumper"
                :total="tableData.length">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import FileSaver from "file-saver";
import XLSX from "xlsx";
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
        isShowIndex: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        total: {
            type: Number,
            default: 0
        },
        btnS: {
            type: Object,
            default: {}
        },
        stripe: {
            type: Boolean,
            default: false
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
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage = val
            // console.log(`当前页: ${val}`);
        },

        currentIndex(index) {
            // console.log('index-----------', index);
            // 序号 = (默认序号 + 1 + （ 当前页码 - 1 ） * 一页条数 ) + 1
            return index + 1 + (this.currentPage - 1) * this.pageSize
        },
        exportExcel() {
            // this.$emit('update')
            // this.pageSize = 30
            this.handleSizeChange(30)
            console.log('this.pageSize============', this.pageSize);
            // this.currentPage = 1
            this.$nextTick(() => {
                var xlsxParam = { raw: true }
                var table = document.querySelector('#outTable').cloneNode(true)
                table.removeChild(table.querySelector('.el-table__fixed-right'))
                var wb = XLSX.utils.table_to_book(table, xlsxParam)
                var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
                try {
                    FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'fileName.xlsx')
                    this.handleSizeChange(5)
                } catch (e) {
                    if (typeof console !== 'undefined') {
                        console.log(e, wbout);
                    }
                }
            })
            setTimeout(() => {
            }, 10)
            // this.pageSize = 5
        }
    },
};
</script>

<style lang="less" scoped>
.table {

    // position: relative;
    .export {
        width: 100%;
        // position: relative;
        display: flex;
        justify-content: flex-end;
        padding-bottom: 20px;

        .exportBtn {
            // position: absolute;
            right: 10px;

            // overflow: hidden;
        }

    }

    .pagination {
        margin-top: 30px;
    }
}
</style>