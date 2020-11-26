<template>
    <div>
        <Header2 menuId="2"></Header2>
        <Need defaultType="2"></Need>
    </div>
</template>

<script>
    import Header2 from "../../components/Header/Header2.vue";
    import Need from "../../components/Need/Need.vue";

    export default {
        name: "pcb",
        components: {
            Header2,
            Need
        }
    }
</script>

<style scoped>

</style>