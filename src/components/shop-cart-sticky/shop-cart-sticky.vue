<template>
  <div class="shop-cart-sticky"
       v-show="visible">
    <shop-cart ref="shopCart"
               :selectFoods="selectFoods"
               :deliveryPrice="deliveryPrice"
               :minPrice="minPrice"
               :fold="fold"
               :sticky=true>
    </shop-cart>
  </div>
</template>

<script lang="ts">
import ShopCart from '@/components/shop-cart/shop-cart.vue'
import Popup from '@/common/mixins/popup'
import { Component, Prop, Vue, Mixins } from 'vue-property-decorator'

@Component({
  components: {
    ShopCart
  }
})
export default class ShopCartSticky extends Mixins(Popup) {
  // props start -----------
  @Prop({
    default() {
      return []
    },
    type: Array
  })
  private selectFoods!: any
  @Prop({ default: 0, type: Number }) private deliveryPrice!: number
  @Prop({ default: 0, type: Number }) private minPrice!: number
  @Prop({ default: true, type: Boolean }) private fold!: boolean
  @Prop({
    default() {
      return {}
    },
    type: Object
  })
  private list!: object

  // props end ------------
  // data start -------------

  // data end -------------
  // methods start -------------
  public drop(el: any) {
    const shopCart: any = this.$refs.shopCart
    shopCart.drop(el)
  }
  // methods end -------------
  // computed start---------------

  // computed end---------------
}
</script>
<style lang="stylus" scoped>
</style>