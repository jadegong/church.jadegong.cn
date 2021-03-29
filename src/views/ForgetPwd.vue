<!-- Forget password page -->
<!-- By Forrest -->
<!-- At 2021/03/29. -->
<template>
    <div class="forget-pwd-page">
        <div class="page-title">忘记密码</div>
        <div class="forget-content-container">
            <el-steps :active="currentActiveStep" finish-status="success" simple>
                <el-step title="验证身份">
                    <div class="forget-content-item">
                        <el-form :model="validateForm" :rules="validateFormRules" ref="validateForm" label-width="100px">
                            <el-form-item label="用户名" prop="userName">
                                <el-input v-model="validateForm.userName"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" prop="password">
                                <el-input type="password" v-model="validateForm.password"></el-input>
                            </el-form-item>
                            <div class="extra-tip">
                                <a href="#">忘记密码？</a>
                            </div>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('validateForm')">登录</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-step>
                <el-step title="输入新密码">
                    <div class="forget-content-item" v-if="currentActiveStep === 0">
                    </div>
                </el-step>
                <el-step title="完成">
                    <div class="forget-content-item" v-if="currentActiveStep === 0">
                    </div>
                </el-step>
            </el-steps>
            <div class="forget-content">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'LoginPage',
    data() {
        return {
            currentActiveStep: 0,
            validateForm: {
                userName: '',
                password: '',
            },
            validateFormRules: {
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
.forget-pwd-page {
    .page-title {
        text-align: center;
    }
    .el-button {
        width: 100%;
    }
}
</style>
<style lang="scss" scoped>
.forget-pwd-page {
    width: 100%;
    height: 100%;
    .login-form-container {
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
