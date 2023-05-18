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
                    <img :src="userInfo.imageUrl ? userInfo.imageUrl : defaultUrl" alt="" v-if="userInfo.imageUrl">
                    <i class="el-icon-user-solid" v-else></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item :command="i" v-for="(i, index) in testA" :key="index">{{
                            i.meg
                        }}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </header>
        <!-- 对话框 -->
        <div class="dialog">
            <el-dialog :visible.sync="dialogVisible" width="50%" title="个人信息修改">
                <el-form :model="form" ref="formInfo" :rules="rules">
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <el-form-item label="姓名" prop="name">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="16">
                            <div class="grid-content bg-purple">
                                <el-form-item label="家庭住址" prop="address">
                                    <el-input v-model="form.address" autocomplete="off"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                    </el-row>
                    <el-form-item label="上传头像" prop="sex">
                        <el-upload action="#" list-type="picture-card" :auto-upload="false" :limit="1"
                            v-show="!dialogVisiblef" :on-change="handlePictureCardPreview">
                            <i slot="default" class="el-icon-plus"></i>
                            <div slot="file" slot-scope="{file}">
                                <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                            </div>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisiblef">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="edit">确 定</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import storage from '@/utils/storage';
import { mapMutations, mapState } from 'vuex';
export default {
    name: 'MhjyHeader',

    data() {
        return {
            fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
            testA: [{ id: 1, meg: '退出登录' }, { id: 2, meg: '修改个人资料' }],
            dialogVisible: false,
            imageUrl: '',
            form: {
                name: '',
                father: '',
                mother: '',
                address: '',
                phone: '',
                startTime: '',
                sex: '',
                age: '',
                email: ''

            },
            dialogImageUrl: '',
            dialogVisiblef: false,
            rules: {
                name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                ]
            },
            formInfo: '',
            defaultUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp515054775.jpg&refer=http%3A%2F%2Fimg9.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1683095654&t=4b17b773c6112a9f1e2e09f3fead3b76'
            // rules: {
            //     startTime: [{ required: true, trigger: 'blur', message: '请选择入学时间' }],
            //     address: [{ required: true, trigger: 'blur', message: '请填写地址' }],
            // },
        };
    },

    mounted() {

    },
    computed: {
        // userInfo() {
        //     return storage.get('userInfo')
        // },
        ...mapState(['userInfo'])
    },
    methods: {
        handleRemove(file) {
            console.log(file);
        },
        handlePictureCardPreview(file) {
            console.log(file);
            this.dialogImageUrl = file.url;
            console.log('上传成功');
            this.dialogVisible = true;
        },
        handleDownload(file) {
            console.log(file);
        },
        handleCommand(a) {
            if (a.id == 1) {
                // 退出登录
                this.$store.commit('loginOut')
                this.$router.push('/login')
                // this.$router.push(`/login?redirect=${this.$route.fullPath}`);
                this.$message({ message: '退出登录成功！', type: 'success' })
            } else {
                this.dialogVisible = true
                // this.$message({ message: '修改个人资料模块待开发中~', type: 'success' })
            }
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        },
        async edit() {
            try {
                await this.$refs['formInfo'].validate()
                this.$store.state.userInfo.username = this.form.name
                this.$refs['formInfo'].resetFields()
                this.$message({
                    message: '修改个人信息成功！',
                    type: 'success'
                })
                this.dialogVisible = false
            } catch (error) {
                this.$message({
                    message: '修改个人信息失败！',
                    type: 'error'
                })
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

.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}

.avatar {
    width: 178px;
    height: 178px;
    display: block;
}

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
            width: 50px;
            border-radius: 30px;
            margin-left: 20px;
        }
    }
}
</style>