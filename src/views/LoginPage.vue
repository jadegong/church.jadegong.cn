<template>
    <div class="login-page">
        <div class="login-form-container">
            <div class="login-form-content">
            <el-form :model="userForm" :rules="userFormRules" ref="userForm" label-width="100px">
                <el-form-item label="用户名" prop="userName">
                    <el-input v-model="userForm.userName"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="userForm.password"></el-input>
                </el-form-item>
                <div class="extra-tip">
                    <a href="#">忘记密码？</a>
                </div>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('userForm')">登录</el-button>
                </el-form-item>
            </el-form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'LoginPage',
    data() {
        return {
            userForm: {
                userName: '',
                password: '',
            },
            userFormRules: {
                userName: [
                    {required: true, message: '用户名不可为空！', trigger: 'blur'},
                ],
                password: [
                    {required: true, message: '密码不可为空！', trigger: 'blur'},
                ],
            },
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    console.log(valid);
                }
            });
        },
    },
}
</script>
<style lang="scss">
.login-page {
    .el-button {
        width: 100%;
    }
}
</style>
<style lang="scss" scoped>
.login-page {
    width: 100%;
    height: 100%;
    .login-form-container {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -180px 0 0 -250px;
        width: 500px;
        height: 360px;
        background-color: #ffffff;
        border-radius: 5px;
        padding: 24px;
        .extra-tip {
            margin-bottom: 5px;
            width: 100%;
            text-align: right;
            a {
                color: #409eff;
                text-decoration: none;
                &:hover,
                &:focus {
                    text-decoration: underline;
                    outline: none;
                }
            }
        }
    }
}
</style>
