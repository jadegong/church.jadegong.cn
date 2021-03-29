<!-- Common Header Component -->
<!-- By Forrest -->
<!-- At 2021/03/29. -->
<template>
    <div class="common-header">
        <div class="common-header-left">
            <a href="javascript:void(0)">
                <span>CH大数据统计</span>
            </a>
        </div>
        <div class="common-header-right">
            <div class="common-header-right-item" v-if="currentPageName !== 'default'">
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
export default {
    name: 'commonHeader',
    props: ['currentPage'], // 当前页面，forgetPwd,login,default
    data() {
        return {
            currentPageName: this.currentPage || 'default',
            account: '',
            isLogin: false,
        };
    },
    mounted() {
        if (localStorage.getItem('token')) {
            // TODO: Validate token.
        }
    },
}
</script>
<style lang="scss" scoped>
.common-header {
    width: 100%;
    height: 70px;
    padding: 0 40px;
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
    .common-header-left a span {
        font-size: 1.5rem;
    }
    .common-header-right {
        float: right;
    }
}
</style>
