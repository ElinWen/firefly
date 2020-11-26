<template>
    <div>
        <Header2 menuId="4"></Header2>
        <Need defaultType="4"></Need>
    </div>
</template>

<script>
    import Header2 from "../../components/Header/Header2.vue";
    import Need from "../../components/Need/Need.vue";

    export default {
        name: "lease",
        components: {
            Header2,
            Need
        }
    }
</script>

<style scoped>

</style>