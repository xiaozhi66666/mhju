<template>
    <div>
        <div class="add">
            <Search @addStuInfo="addStuInfo" @searchInfo="searchInfo" :label="labelMsg" @reset="reset" />
        </div>
        <Table @update="update" :btnS="btnInfo" :isShowIndex="true" :loading="loading" :total="total" :tableData="stuData"
            :propsArray="propsArray" @open="openDialog" @del="del" />
        <div class="dialog">
            <el-dialog :title="isShowInfo ? '学生详细信息' : '学生信息录入'" :visible.sync="dialogVisible" width="40%" @close="close">
                <div class="body" v-if="isShowInfo">
                    <img :src="studentInfo.imgUrl" alt="" class="userImg">
                    <div class="info">
                        <p>姓名： <span>{{ studentInfo.name }}</span> </p>
                        <p>年龄： <span>{{ studentInfo.age }}</span></p>
                        <p>学籍号： <span>{{ studentInfo.id }}</span></p>
                    </div>
                </div>
                <div class="form" v-if="!isShowInfo">
                    <el-form :model="addStu" :rules="rules" ref="form">
                        <el-form-item label="学生姓名" prop="name" :label-width="formLabelWidth">
                            <el-input v-model="addStu.name" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="学生年龄" prop="age" :label-width="formLabelWidth">
                            <el-input v-model="addStu.age" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="学生id" prop="id" :label-width="formLabelWidth">
                            <el-input v-model="addStu.id" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="学生生日" prop="birdthay" :label-width="formLabelWidth">
                            <el-date-picker type="date" placeholder="选择日期" v-model="addStu.birdthay"
                                value-format="yyyy-MM-dd"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="学生性别" prop="sex" :label-width="formLabelWidth">
                            <el-select v-model="addStu.sex" placeholder="请选性别">
                                <el-option label="男" value="1"></el-option>
                                <el-option label="女" value="2"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </div>
                <div slot="footer" class="dialog-footer" v-if="!isShowInfo">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="submitForm">确 定</el-button>
                </div>
            </el-dialog>
            <!-- <el-dialog title="学生信息录入" :visible.sync="dialogFormVisible" width="30%" @close="closeAdd">

                                                                                                                                    </el-dialog> -->
        </div>
    </div>
</template>
<script>
import Table from '@/components/common/Table.vue'
import Search from '@/components/common/Search.vue'
import { getStuListAPI } from '@/api/stu'
import _ from 'lodash'
export default {
    components: { Table, Search },
    data() {
        return {
            stuData: [],
            total: 0,
            propsArray: [
                {
                    prop: 'birdthay',
                    label: '日期',
                    width: 300
                },
                {
                    prop: 'name',
                    label: '姓名',
                    width: 200
                },
                {
                    prop: 'age',
                    label: '年龄',
                    width: 100
                }, {
                    prop: 'id',
                    label: '学生ID',
                    width: 500
                }, {
                    prop: 'sex',
                    label: '性别',
                    width: 100
                }
            ],
            btnInfo: {
                icon1: 'el-icon-zoom-in',
                icon2: 'el-icon-delete',
                msg1: '查看',
                msg2: '删除'
            },
            labelMsg: {
                msg1: '姓名',
                msg2: '学生id'
            },
            formLabelWidth: '40',
            dialogVisible: false,
            dialogFormVisible: false,
            studentInfo: {},
            addStu: {
                name: '',
                age: '',
                sex: '',
                id: '',
                birdthay: ''
            },
            rules: {
                name: [
                    {
                        required: true, message: '请填写学生姓名', trigger: 'blur'
                    }
                ],
                age: [
                    {
                        required: true, message: '请填写学生年龄', trigger: 'blur'
                    }
                ],
                id: [
                    {
                        required: true, message: '请填写学生id', trigger: 'blur'
                    }
                ],
                birdthay: [
                    {
                        required: true, message: '请选择学生生日', trigger: 'blur'
                    }
                ],
                sex: [
                    {
                        required: true, message: '请选择学生性别', trigger: 'blur'
                    }
                ],
            },
            isShowInfo: true
        }
    },
    created() {
        this.getStuList()
    },
    methods: {
        update() {
            this.getStuList()
        },
        async getStuList() {
            this.loading = true
            try {
                const { data } = await getStuListAPI()
                this.stuData = data.data.list
                this.total = data.data.total
                this.stuData.map(i => {
                    if (i.sex == 1) {
                        i.sex = '男'
                    } else {
                        i.sex = '女'
                    }
                })
            } catch (error) {

            } finally {
                this.loading = false
            }
        },
        openDialog(i) {
            console.log('父组件');
            // 打开弹框
            this.dialogVisible = true
            this.isShowInfo = true
            // 传递详细信息
            this.studentInfo = i
        },
        // 删除
        async del(i) {
            // 确认删除？
            try {
                await this.$confirm('确定删除此学生信息？是否继续？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                })
                this.stuData = this.stuData.filter(item => item.id !== i.id)
                this.$message({ message: '已删除成功！', type: 'success' })
            } catch (error) {
                this.$message({ message: '已取消删除', type: "info" })
            }
        },
        reset() {
            console.log('stu');
            // if(this.studentInfo.)
            this.getStuList()
        },
        // 新增
        addStuInfo() {
            this.dialogVisible = true
            this.isShowInfo = false
            // this.dialogFormVisible = true

        },
        // 查询
        searchInfo(i) {
            this.stuData = this.stuData.filter((item) => i.id === item.id || i.user === item.name)
            // if (i.id == '' && i.user == '') {
            //     this.getStuList()
            // } else {
            // }
        },
        test() {

        },
        // 确定新增
        async submitForm() {
            try {
                await this.$refs['form'].validate()
                console.log('新增人员信息是', this.addStu);
                const obj = _.cloneDeep(this.addStu)
                console.log('深克隆结果', obj);
                this.stuData.unshift({ ...obj, imgUrl: 'https://img2.baidu.com/it/u=2321976118,1503111808&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500' })
                this.$message({ message: '新增学生信息成功！', type: 'success' })
                this.dialogVisible = false
                this.$refs['form'].resetFields()
            } catch (error) {
                this.$message({ message: '未通过验证', type: 'error' })
                console.log(error);
            } finally {
                // 重置表单值以及校验结果
            }
        },
        // 关闭新增信息弹框的回调
        closeAdd() {
            console.log('关闭了');
            // 关闭时重置所有值以及校验结果
            this.$refs['form'].resetFields()
        },
        close() {
            if (!this.isShowInfo) {
                this.$refs['form'].resetFields()
            }
        }
        // open() {
        //     this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        //         confirmButtonText: '确定',
        //         cancelButtonText: '取消',
        //         type: 'warning'
        //     }).then(() => {
        //         this.$message({
        //             type: 'success',
        //             message: '删除成功!'
        //         });
        //     }).catch(() => {
        //         this.$message({
        //             type: 'info',
        //             message: '已取消删除'
        //         });
        //     });
        // }
    }
}
</script>

<style lang="less">
.add {
    margin-bottom: 20px;

    .el-card__body {
        display: flex;
        width: 100%;
    }
}

.dialog {
    .body {
        display: flex;

        .userImg {
            width: 100px;
            height: 120px;
        }

        .info {
            padding-left: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            p {
                font-size: 20px;
                // color: aqua;
            }

            span {
                color: #000;
                font-size: 18px;
            }

        }

    }
}
</style>