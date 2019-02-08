<template>
  <div class="tab">
    <cube-tab-bar :useTransition=false
                  :showSlider=true
                  :data="tabs"
                  v-model="selectedLabel"
                  ref="tabBar"
                  class="border-bottom-1px">
    </cube-tab-bar>
    <div class="slide-wrapper">
      <cube-slide :loop=false
                  :auto-play=false
                  :show-dots=false
                  :initial-index="index"
                  ref="slide"
                  :options="slideOptions"
                  @scroll="onScroll"
                  @change="onChange">
        <cube-slide-item v-for="(tab,index) in tabs"
                         :key="index">
          <component ref="component"
                     :is="tab.component"
                     :data="tab.data"></component>
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'
import { prefixStyle } from '@/components/tools/tools'

@Component
export default class Tab extends Vue {
  // props start --------
  @Prop({
    default() {
      return []
    },
    type: Array
  })
  private tabs!: any
  @Prop({ default: 0, type: Number }) private initialIndex!: number
  // props end ------------

  // data start -------------
  private touch: any = {}
  private index: number = this.initialIndex
  private currentShow: number = 0
  private innerWidth: number = window.innerWidth
  private initTabWidth: number = this.innerWidth * this.tabs.length
  private slideOptions: object = {
    listenScroll: true,
    probeType: 3,
    directionLockThreshold: 0
  }
  // data end -------------

  // computed start---------------
  private _selectedLabel: string = '' // tslint:disable-line
  public get selectedLabel(): string {
    this._selectedLabel = this.tabs[this.index].label
    return this._selectedLabel
  }
  public set selectedLabel(news: string) {
    this.index = this.tabs.findIndex((value: any) => {
      return value.label === news
    })
  }
  // computed end---------------

  // methods start -------------
  private onScroll(pos: any) {
    const tabBar: any = this.$refs.tabBar
    const tabBarEl: Element = tabBar.$el
    const tabBarWidth = tabBarEl.clientWidth

    const slide: any = this.$refs.slide
    const slideWidth = slide.slide.scrollerWidth
    const transform = (-pos.x / slideWidth) * tabBarWidth

    tabBar.setSliderTransform(transform)
  }

  private onChange(current: number) {
    this.index = current
    const el: any = this.$refs.component
    const instance: any = el[current]
    if (instance && instance.fetch) {
      instance.fetch()
    }
  }

  // methods end -------------
  private mounted() {
    this.onChange(this.index)
    // console.log(this.tabs)
  }
}
</script>



<style lang="stylus" scoped>
@import '~common/stylus/variable';

.tab {
  display: flex;
  flex-direction: column;
  height: 100%;

  >>> .cube-tab {
    padding: 10px 0;
  }

  .slide-wrapper {
    flex: 1;
    overflow: hidden;
  }
}
</style>
