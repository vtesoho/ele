<template>
  <div class="bubble">
    {{num}}
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class Bubble extends Vue {
  // props start -----------
  @Prop(Number) private num!: any
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

.bubble {
  display: inline-block;
  padding: 0 5px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  border-radius: 16px;
  font-family: Helvetica;
  font-weight: 700;
  font-size: $fontsize-small-s;
  color: $color-white;
  background: linear-gradient(to right, $color-orange, $color-red);
}
</style>
