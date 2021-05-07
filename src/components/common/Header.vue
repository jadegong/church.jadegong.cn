<!-- Common Header Component -->
<!-- v0.0.1 2021/03/29 Forrest Create File. -->
<!-- v0.0.1 2021/05/01 Forrest Add check token request. -->
<template>
    <div class="common-header">
        <div class="common-header-left">
            <a href="javascript:void(0)">
                <span>CH大数据统计</span>
            </a>
        </div>
        <div class="common-header-right">
            <div class="common-header-right-item" v-if="currentPageName === 'forgetPwd'">
                <a href="/login">&lt;&lt;返回登录</a>
            </div>
            <div class="common-header-right-item" v-if="currentPageName === 'default' && isLogin">
                <a href="javascript:void(0)">{{ account }}</a>
            </div>
            <div class="common-header-right-item" v-if="currentPageName === 'default' && isLogin">
                <el-button size="mini" type="warning" @click="logOut">退出</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import { checkToken } from '../../service/login';
export default {
    name: 'commonHeader',
    props: ['currentPage'], // 当前页面，forgetPwd,login,default
    data() {
        return {
            currentPageName: 'default',
            account: '',
            isLogin: false,
        };
    },
    mounted() {
        this.currentPageName = this.currentPage || 'default';
        if (localStorage.getItem('token')) {
            // DONE: Validate token.
            checkToken({}).then(res => {
                // TODO: If success, set user info and isLogin.
            });
        }
    },
}
</script>
<style lang="scss" scoped>
.common-header {
    width: 100%;
    height: 70px;
    padding: 0 40px;
    box-shadow: 0 1px 1px 0 #eee;
    .common-header-left,
    .common-header-right {
        height: 100%;
        float: left;
        .common-header-item {
            height: 100%;
            display: inline-block;
            vertical-align: middle;
            margin-left: 4px;
            line-height: 70px;
            a {
                padding: 0 4px;
                display: inline-block;
                height: 36px;
                color: #333333;
                line-height: 36px;
                &:hover {
                    color: #325efb;
                }
            }
        }
    }
    .common-header-left {
        line-height: 70px;
        a span {
            text-decoration: none;
            color: #333333;
            font-size: 1.5rem;
        }
    }
    .common-header-right {
        float: right;
    }
}
</style>
