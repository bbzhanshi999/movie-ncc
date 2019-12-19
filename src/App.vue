<template>
    <div id="app">
        <h1>好啊好啊</h1>
        <el-row>
            <el-col :span="24">
                <el-menu mode="horizontal"
                         background-color="#545c64"
                         text-color="#fff"
                         active-text-color="#ffd04b"
                         default-active="/"
                         :router="true">
                    <el-menu-item index="/">选电影</el-menu-item>
                    <el-menu-item index="/top">排行榜</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center" style="background-color: #f0f3f5">
            <el-col :span="4">
                <h2 style="color:#27a">豆瓣电影</h2>
            </el-col>
            <el-col :span="6" style="line-height: 71px;">
                <el-input placeholder="搜索电影、电视剧、综艺、艺人" >
                    <template slot="append">
                        <i class="el-icon-search"></i>
                    </template>
                </el-input>
            </el-col>
        </el-row>

       <!-- <router-link to="/">首页</router-link>
        <router-link to="/demo">demo</router-link>-->
        <el-row>
            <router-view/>
        </el-row>
    </div>
</template>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
