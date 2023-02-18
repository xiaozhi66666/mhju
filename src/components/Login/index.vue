<template>
    <div class="login">
        <div class="login-conten">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>墨涵教育后台管理系统</span>
                </div>
                <!-- 表单 -->
                <div class="login-form">
                    <el-form ref="form" :rules="rules" :model="mhjy" label-width="80px">
                        <el-form-item label="用户名" prop="username">
                            <el-input v-model="mhjy.username"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input v-model="mhjy.password" type="password"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" size="large" @click="login">登录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
// import { loginAPI } from '@/api/user'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
// import router from '@/router';
export default {
    name: 'login',

    data() {
        return {
            mhjy: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    {
                        required: true, message: '请填写用户名', trigger: 'blur'
                    }
                ],
                password: [
                    {
                        required: true, message: '请填写正确密码', trigger: 'blur'
                    }
                ]
            }
        };
    },

    mounted() {

    },
    computed: {
        ...mapState(['userInfo'])
    },
    methods: {
        // ...mapMutations(['getLogin']),
        ...mapActions(['getLoginAction']),
        login() {
            // 校验是否通过
            this.$refs['form'].validate(async (valid) => {
                if (valid) {
                    this.getLoginAction(this.mhjy)
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    },
};
</script>

<style lang="less" scoped>
.login {
    width: 100%;
    height: 100%;
    position: absolute;
    background: url('../../assets/images/login-bgc.jpg') no-repeat center center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    .login-conten {
        width: 500px;
        height: 300px;

        .box-card {
            .clearfix {
                display: flex;
                justify-content: center;
                align-items: center;

                span {
                    font-size: 22px;
                }
            }

            .el-button {
                width: 100%;
            }
        }
    }
}
</style>