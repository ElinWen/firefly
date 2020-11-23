<template>
  <div>
    <Top></Top>
    <router-view></router-view>
  </div>
</template>

<script>
import Top from "@/components/Top/Top.vue"

export default {
  data(){
    return{}
  },
  components: {
    Top
  }
}
</script>

<style src="@/assets/css/MyCommon.scss" lang="scss"></style>


