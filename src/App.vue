<template>
  <div id='app'
       @touchmove.prevent>
    <Header :SellerData='SellerData'></Header>
    <div class='tab-wrapper'>
      <tab :tabs='tabs'>

      </tab>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'
import Header from '@/components/header/header.vue'
import Goods from '@/components/goods/goods.vue'
import Ratings from '@/components/ratings/ratings.vue'
import Seller from '@/components/seller/seller.vue'
import Tab from '@/components/tab/tab.vue'
import { getSeller } from '@/components/api/api'

@Component({
  components: {
    Header,
    Tab
  }
})
export default class App extends Vue {
  private seller: object = { id: 0 }
  private SellerData: any = {}

  private created() {
    this._getSeller()
  }

  private _getSeller(): any {
    getSeller({}).then((seller: object) => {
      this.SellerData = seller
      // console.log(this.seller)
      // this.seller = Object.assign({}, this.seller, seller)
    })
  }
  get tabs() {
    return [
      {
        label: '商品',
        component: Goods,
        data: {
          seller: this.SellerData
        }
      },
      {
        label: '评论',
        component: Ratings,
        data: {
          seller: this.SellerData
        }
      },
      {
        label: '商家',
        component: Seller,
        data: {
          seller: this.SellerData
        }
      }
    ]
  }
}
</script>
<style lang="stylus" scoped>
#app {
  .tab-wrapper {
    position: fixed;
    top: 136px;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
