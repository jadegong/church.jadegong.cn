<template>
    <div class="login-page">
        <common-header></common-header>
        <div class="login-page-words-container">
            <h2>JH大数据统计</h2>
            <P>1.xxxxxxxxxxxxxxxx</P>
            <P>2.xxxxxxxxxxxxxxxx</P>
            <P>3.xxxxxxxxxxxxxxxx</P>
            <P>4.xxxxxxxxxxxxxxxx</P>
            <P>5.xxxxxxxxxxxxxxxx</P>
        </div>
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
import CommonHeader from '../components/common/Header.vue';
export default {
    name: 'LoginPage',
    components: { CommonHeader },
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
    .login-page-words-container {
        position: absolute;
        top: 18rem;
        left: 9rem;
        background-color: rgba(255, 255, 255, .6);
        width: 33.33333333rem;
        padding: 1rem;
        h2 {
            font-size: 3.333333rem;
            height: 6.5rem;
            line-height: 6.5rem;
            padding: 0 0 0 2rem;
            margin: 0;
        }
        p {
            text-indent: 2rem;
        }
    }
    .login-form-container {
        position: absolute;
        top: 50%;
        left: calc(50% + 21rem);
        margin: -15rem 0 0 -21rem;
        width: 42rem;
        height: 30rem;
        background-color: #ffffff;
        border-radius: 5px;
        padding: 2rem;
        .extra-tip {
            margin-bottom: .5rem;
            width: 100%;
            text-align: right;
            a {
                color: #1e96ff;
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
