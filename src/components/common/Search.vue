<template>
    <div class="search">
        <el-card>
            <el-form inline :model="searchInfo" class="demo-form-inline">
                <el-form-item :label="label.msg1">
                    <el-input v-model="searchInfo.user" :placeholder="'请输入 ' + label.msg1"></el-input>
                </el-form-item>
                <el-form-item :label="label.msg2">
                    <el-input v-model="searchInfo.id" :placeholder="'请输入' + label.msg2"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" icon="el-icon-search">查询</el-button>
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
            }
        };
    },

    mounted() {

    },

    methods: {
        onSubmit() {
            console.log('submit!');
            this.$emit('searchInfo', this.searchInfo)
        },
        addStuInfo() {
            this.$emit('addStuInfo', 'formInfo')
        }
    },
};
</script>

<style lang="scss" scoped></style>