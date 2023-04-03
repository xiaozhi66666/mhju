<template>
    <div>
        <div class="search">
            <Search :label="labelMsg" @addStuInfo="addInfo" @reset="reset" @searchInfo="searchInfo" />
        </div>
        <Table @del="del" @open="open" :stripe="true" :tableData="infoList" :propsArray="propsArray" :btnS="btnInfo"
            :loading="isLoading" />
        <!-- 对话框 -->
        <div class="dialog">
            <el-dialog @close="close('formInfo')" :title="isEdit ? '学生信息编辑' : '信息添加'" :visible.sync="dialogFormVisible"
                width="50%">
                <el-form :model="form" ref="formInfo" :rules="rules">
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <el-form-item label="姓名" prop="name">
                                    <el-input v-model="form.name" autocomplete="off"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <el-form-item label="性别" prop="sex">
                                    <el-select v-model="form.sex" placeholder="请选择性别">
                                        <el-option label="男" value="1"></el-option>
                                        <el-option label="女" value="2"></el-option>
                                    </el-select>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <el-form-item label="年龄" prop="age">
                                    <el-input v-model="form.age" autocomplete="off"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="24">

                        <el-col :span="7">
                            <div class="grid-content bg-purple">
                                <el-form-item label="父亲姓名" prop="father">
                                    <el-input v-model="form.father" autocomplete="off"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="7">
                            <div class="grid-content bg-purple">
                                <el-form-item label="母亲姓名" prop="mother">
                                    <el-input v-model="form.mother" autocomplete="off"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="10">
                            <div class="grid-content bg-purple">
                                <el-form-item label="联系方式" prop="phone">
                                    <el-input v-model="form.phone" autocomplete="off"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="10">
                            <div class="grid-content bg-purple">
                                <el-form-item label="入学时间" prop="startTime">
                                    <el-date-picker value-format="yyyy-MM-dd" v-model="form.startTime" type="date"
                                        placeholder="选择日期">
                                    </el-date-picker>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="14">
                            <div class="grid-content bg-purple">
                                <el-form-item label="家庭住址" prop="address">
                                    <el-input v-model="form.address" autocomplete="off"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="edit">确 定</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import Search from '@/components/common/Search.vue'
import Table from '@/components/common/Table.vue'
import { getInfosAPI } from '@/api/stu'
import _ from 'lodash'
export default {
    name: 'MhjyInfoList',
    components: { Search, Table },
    data() {
        return {
            infoList: [],
            isEdit: false,
            propsArray: [
                {
                    prop: 'name',
                    label: '姓名',
                    width: 300
                },
                {
                    prop: 'sex',
                    label: '性别',
                    width: 100
                },
                {
                    prop: 'age',
                    label: '年龄',
                    width: 100
                }, {
                    prop: 'father',
                    label: '父亲',
                    width: 500
                }, {
                    prop: 'mother',
                    label: '母亲',
                    width: 100
                }, {
                    prop: 'address',
                    label: '家庭住址',
                    width: 300
                }, {
                    prop: 'startTime',
                    label: '入学时间',
                    width: 300
                }, {
                    prop: 'phone',
                    label: '联系方式',
                    width: 300
                }
            ],
            rules: {
                name: [{ required: true, trigger: 'blur', message: '请填写姓名' }],
                age: [{ required: true, trigger: 'blur', message: '请填写年龄' }],
                sex: [{ required: true, trigger: 'blur', message: '请选择性别' }],
                father: [{ required: true, trigger: 'blur', message: '请填写姓名' }],
                mother: [{ required: true, trigger: 'blur', message: '请填写母亲姓名' }],
                phone: [{ required: true, trigger: 'blur', message: '请填写联系方式' }],
                startTime: [{ required: true, trigger: 'blur', message: '请选择入学时间' }],
                address: [{ required: true, trigger: 'blur', message: '请填写地址' }],
            },
            btnInfo: {
                icon1: 'el-icon-edit',
                icon2: 'el-icon-delete',
                isCircle: false
                // msg1: '查看',
                // msg2: '删除'
            },
            form: {
                name: '',
                father: '',
                mother: '',
                address: '',
                phone: '',
                startTime: '',
                sex: '',
                age: '',

            },
            sex: [
                {
                    label: '男',
                    value: 1
                },
                {
                    label: '女',
                    value: 2
                }
            ],
            labelMsg: {
                msg1: '姓名',
                msg2: '手机号'
            },
            isLoading: false,
            dialogFormVisible: false
        };
    },
    created() {
        this.getInfos()
    },

    mounted() {

    },

    methods: {
        async getInfos() {
            this.isLoading = true
            const { data } = await getInfosAPI()
            // console.log(res);
            this.infoList = data.data.list
            this.infoList.map(i => {
                i.sex == 1 ? i.sex = '男' : i.sex = '女'
            })
            this.isLoading = false
        },
        addInfo() {
            this.form = {
                name: '',
                father: '',
                mother: '',
                address: '',
                phone: '',
                startTime: '',
                sex: '',
                age: '',

            },
                this.dialogFormVisible = true
            console.log(this.$refs['formInfo']);
            // 移除校验以及恢复初始值
            this.$refs['formInfo'].resetFields()
            this.isEdit = false
        },
        // 查询
        searchInfo(i) {
            this.infoList = this.infoList.filter((item) => i.id === item.phone || i.user === item.name)
            // if (i.id == '' && i.user == '') {
            //     this.getStuList()
            // } else {
            // }
        },
        open(i) {
            // 打开弹框
            this.dialogFormVisible = true
            this.isEdit = true
            this.form = _.cloneDeep(i)
        },
        reset() {
            console.log('info');
            this.getInfos()
        },
        //编辑
        async edit() {
            try {
                await this.$refs['formInfo'].validate()
                if (this.isEdit) {
                    this.infoList = this.infoList.filter((item) => item.phone !== this.form.phone)
                }
                this.form.sex == 1 ? this.form.sex = '男' : this.form.sex = '女'
                // if (this.form.sex == 1) {
                //     this.form.sex = '男'
                // } else {
                //     this.form.sex = '女'
                // }
                this.infoList.unshift(this.form)
                this.$message({
                    message: '修改信息成功！',
                    type: 'success'
                })
                this.dialogFormVisible = false
                // this.$refs['form'].resetField()
            } catch (error) {

            }
            // console.log('======================>', i);
        },
        close(form) {
            console.log('关闭');
            // this.$refs[form].resetFields()
            this.$nextTick(() => {
            })
        },
        async del(i) {
            try {
                await this.$confirm('确定删除此条信息？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                })
                this.infoList = this.infoList.filter((item) => item.phone !== i.phone)
                this.$message({ message: '删除成功！', type: 'success' })
            } catch (error) {
                this.$message({ message: '删除取消！', type: 'info' })
            }
        }
    },
};
</script>

<style lang="less" scoped>
.search {
    margin-bottom: 30px;
}

.dialog {
    /deep/.el-form-item__content {
        display: flex;
    }
}
</style>