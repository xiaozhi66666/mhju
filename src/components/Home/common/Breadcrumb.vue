<template>
    <div>
        <el-card>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item v-for="(i, index) in $route.matched" :key="index">{{ i.name }}</el-breadcrumb-item>
            </el-breadcrumb>
        </el-card>
    </div>
</template>