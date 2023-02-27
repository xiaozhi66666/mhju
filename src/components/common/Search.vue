<template>
    <div class="search">
        <el-card>
            <el-form inline :model="searchInfo" class="demo-form-inline" ref="formS">
                <el-form-item :label="label.msg1" prop="user">
                    <el-input v-model.trim="searchInfo.user" :placeholder="'请输入 ' + label.msg1"></el-input>
                </el-form-item>
                <el-form-item :label="label.msg2" prop="id">
                    <el-input v-model.trim="searchInfo.id" :placeholder="'请输入' + label.msg2"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" icon="el-icon-search">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="reset" icon="el-icon-refresh-left">重置</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addStuInfo" icon="el-icon-circle-plus-outline">新增</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'MhjySearch',
    props: {
        label: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            searchInfo: {
                user: '',
                id: ''
            },
            rulesS: {
                // user: [{
                //     required: true,
                //     message:'请填写学生姓名'
                // }],
                // id: [{
                //     required: true,
                //     message:'请填写'
                // }]
            }
        };
    },

    mounted() {

    },

    methods: {
        onSubmit() {
            if (this.searchInfo.user == '' && this.searchInfo.id == '') {
                this.$message({ message: '请填写任意一项搜索信息再进行搜索', type: 'warning' })
            } else {
                this.$emit('searchInfo', this.searchInfo)
            }
        },
        addStuInfo() {
            this.$emit('addStuInfo', 'formInfo')
        },
        reset() {
            if (this.searchInfo.user == '' && this.searchInfo.id == '') {
                return
            } else {
                this.searchInfo.user = ''
                this.searchInfo.id = ''
                this.$emit('reset')
            }
            console.log('----------------->reset');
            // this.$refs['formS'].resetFields()
        }
    },
};
</script>

<style lang="scss" scoped></style>