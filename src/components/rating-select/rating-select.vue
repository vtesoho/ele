<template>
  <div class="rating-select">
    <div class="rating-type border-bottom-1px">
      <span @click="select(2)"
            class="block positive"
            :class="{'active':selectType===2}">{{desc.all}}<span class="count">{{ratings.length}}</span></span>
      <span @click="select(0)"
            class="block positive"
            :class="{'active':selectType===0}">{{desc.positive}}<span class="count">{{positives.length}}</span></span>
      <span @click="select(1)"
            class="block negative"
            :class="{'active':selectType===1}">{{desc.negative}}<span class="count">{{negatives.length}}</span></span>
    </div>
    <div @click="toggleContent"
         class="switch"
         :class="{'on':onlyContent}">
      <span class="icon-check_circle"></span>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
const POSITIVE = 0
const NEGATIVE = 1
const ALL = 2
const EVENT_TOGGLE = 'toggle'
const EVENT_SELECT = 'select'
@Component
export default class RatingSelect extends Vue {
  // props start -----------
  @Prop({
    default() {
      return []
    },
    type: Array
  })
  public ratings!: any
  @Prop({ default: ALL, type: Number }) public selectType!: number
  @Prop({ default: false, type: Boolean }) public onlyContent!: boolean
  @Prop({
    default() {
      return { all: '全部', positive: '满意', negative: '不满意' }
    },
    type: Object
  })
  public desc!: any

  // props end ------------
  // data start -------------

  // data end -------------
  // methods start -------------
  private select(type: any) {
    this.$emit(EVENT_SELECT, type)
  }
  private toggleContent() {
    this.$emit(EVENT_TOGGLE)
  }
  // methods end -------------
  // computed start---------------
  get positives() {
    return this.ratings.filter((rating: any) => {
      return rating.rateType === POSITIVE
    })
  }
  get negatives() {
    return this.ratings.filter((rating: any) => {
      return rating.rateType === NEGATIVE
    })
  }
  // computed end---------------
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';

.rating-select {
  .rating-type {
    padding: 18px 0;
    margin: 0 18px;

    .block {
      display: inline-block;
      padding: 8px 12px;
      margin-right: 8px;
      line-height: 16px;
      border-radius: 1px;
      font-size: $fontsize-small;
      color: $color-grey;

      &.active {
        color: $color-white;
      }

      .count {
        margin-left: 2px;
      }

      &.positive {
        background: $color-light-blue;

        &.active {
          background: $color-blue;
        }
      }

      &.negative {
        background: $color-light-grey-s;

        &.active {
          background: $color-grey;
        }
      }
    }
  }

  .switch {
    display: flex;
    align-items: center;
    padding: 12px 18px;
    line-height: 24px;
    border-bottom: 1px solid $color-row-line;
    color: $color-light-grey;

    &.on {
      .icon-check_circle {
        color: $color-green;
      }
    }

    .icon-check_circle {
      margin-right: 4px;
      font-size: $fontsize-large-xxx;
    }

    .text {
      font-size: $fontsize-small;
    }
  }
}
</style>

