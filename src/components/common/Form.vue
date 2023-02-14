<template>
    <div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column :prop="i.prop" :label="i.label" width="180" v-for="i, index in propsArray" :key="index">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'MhjyForm',
    props: {
        tableData: {
            type: Array,
            default: []
        },
        propsArray: {
            type: Array,
            default: []
        },

    },
    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>

</style>