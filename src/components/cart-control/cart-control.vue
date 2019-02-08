<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease"
           v-show="food.count>0"
           @click.stop="decrease">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count"
         v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle"
         @click.stop="add"></div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
const EVENT_ADD = 'add'
@Component
export default class CartControl extends Vue {
  // props start -----------
  @Prop({ type: Object }) private food!: any
  // props end ------------

  // data start -------------

  // data end -------------
  // methods start -------------
  private add(event: any) {
    if (!this.food.count) {
      this.$set(this.food, 'count', 1)
    } else {
      this.food.count++
    }
    this.$emit(EVENT_ADD, event.target)
  }

  private decrease() {
    if (this.food.count) {
      this.food.count--
    }
  }
  // methods end -------------
  // computed start---------------

  // computed end---------------
}
</script>


<style lang="stylus" scoped>
@import '~common/stylus/variable';

.cartcontrol {
  display: flex;
  align-items: center;

  .cart-decrease {
    display: inline-block;
    padding: 6px;
    opacity: 1;

    .inner {
      display: inline-block;
      line-height: 24px;
      font-size: $fontsize-large-xxx;
      color: $color-blue;
      transition: all 0.4s linear;
      transform: rotate(0);
    }

    &.move-enter-active, &.move-leave-active {
      transition: all 0.4s linear;
    }

    &.move-enter, &.move-leave-active {
      opacity: 0;
      transform: translate3d(24px, 0, 0);

      .inner {
        transform: rotate(180deg);
      }
    }
  }

  .cart-count {
    width: 12px;
    line-height: 24px;
    text-align: center;
    font-size: $fontsize-small-s;
    color: $color-grey;
  }

  .cart-add {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: $fontsize-large-xxx;
    color: $color-blue;
  }
}
</style>
