<template>
  <div>
    <Top></Top>
    <Header></Header>
    
  </div>
</template>

<script>
import Top from "@/components/Top/Top.vue"
import Header from "@/components/Header/Header.vue"
import Section from "./components/Section/Section";

export default {
  data(){
    return{}
  },
  components: {
    Top,
    Header,
    Section
  }
}
</script>

<style src="@/assets/css/MyCommon.scss" lang="scss"></style>


