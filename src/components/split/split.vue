<template>
  <div class="split"></div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Split extends Vue {
  // props start -----------
  // props end ------------
  // data start -------------
  // data end -------------
  // methods start -------------
  // methods end -------------
  // computed start---------------
  // computed end---------------
}
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable';

.split {
  width: 100%;
  height: 16px;
  border-top: 1px solid $color-row-line;
  border-bottom: 1px solid $color-row-line;
  background: $color-background-ssss;
}
</style>