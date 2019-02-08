<template>
  <div class='header'
       @click='showDetail'>
    <div class='content-wrapper'>
      <div class='avatar'>
        <img width='64'
             height='64'
             :src='SellerData.avatar'>
      </div>
      <div class='content'>
        <div class='title'>
          <span class='brand'></span>
          <span class='name'>{{SellerData.name}}</span>
        </div>
        <div class='description'>
          {{SellerData.description}}/{{SellerData.deliveryTime}}分钟送达
        </div>
        <div v-if='SellerData.supports'
             class='support'>
          <support-ico :size=1
                       :type='SellerData.supports[0].type'></support-ico>
          <span class='text'>{{SellerData.supports[0].description}}</span>
        </div>
      </div>
      <div v-if='SellerData.supports'
           class='support-count'>
        <span class='count'>{{SellerData.supports.length}}个</span>
        <i class='icon-keyboard_arrow_right'></i>
      </div>
    </div>
    <div class='bulletin-wrapper'>
      <span class='bulletin-title'></span><span class='bulletin-text'>{{SellerData.bulletin}}</span>
      <i class='icon-keyboard_arrow_right'></i>
    </div>
    <div class='background'>
      <img :src='SellerData.avatar'
           width='100%'
           height='100%'>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'
import SupportIco from 'components/support-ico/support-ico.vue'
@Component({
  components: {
    SupportIco
  }
})
export default class Header extends Vue {
  @Prop(Object) private SellerData!: object

  private showDetail() {
    // @ts-ignore
    this.headerDetailComp =
      // @ts-ignore
      this.headerDetailComp ||
      // @ts-ignore
      this.$createHeaderDetail({
        $props: {
          seller: this.SellerData
        }
      })
    // @ts-ignore
    this.headerDetailComp.show()
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
@import '~common/stylus/mixin';
@import '~common/stylus/variable';

.header {
  color: $color-white;
  position: relative;
  overflow: hidden;
  color: $color-white;
  background: $color-background-ss;

  .content-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    padding: 24px 12px 18px 24px;

    .avatar {
      flex: 0 0 64px;
      width: 64px;
      margin-right: 16px;

      img {
        border-radius: 2px;
      }
    }

    .content {
      flex: 1;

      .title {
        display: flex;
        align-items: center;
        margin-bottom: 8px;

        .brand {
          width: 30px;
          height: 18px;
          bg-image('brand');
          background-size: 30px 18px;
          background-repeat: no-repeat;
        }

        .name {
          margin-left: 6px;
          font-size: $fontsize-medium-x;
          font-weight: bold;
        }
      }

      .description {
        margin-bottom: 8px;
        line-height: 12px;
        font-size: $fontsize-small;
        text-align: left;
      }

      .support {
        display: flex;
        align-items: center;

        .support-ico {
          margin-right: 4px;
        }

        .text {
          line-height: 12px;
          font-size: $fontsize-small-s;
        }
      }
    }

    .support-count {
      position: absolute;
      right: 12px;
      bottom: 14px;
      display: flex;
      align-items: center;
      padding: 0 8px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      border-radius: 14px;
      background: $color-background-sss;

      .count {
        font-size: $fontsize-small-s;
      }

      .icon-keyboard_arrow_right {
        margin-left: 2px;
        line-height: 24px;
        font-size: $fontsize-small-s;
      }
    }
  }

  .bulletin-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    height: 28px;
    line-height: 28px;
    padding: 0 8px;
    background: $color-background-sss;

    .bulletin-title {
      flex: 0 0 22px;
      width: 22px;
      height: 12px;
      margin-right: 2px;
      bg-image('bulletin');
      background-size: 22px 12px;
      background-repeat: no-repeat;
    }

    .bulletin-text {
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: $fontsize-small-s;
    }

    .icon-keyboard_arrow_right {
      flex: 0 0 10px;
      width: 10px;
      font-size: $fontsize-small-s;
    }
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(10px);
  }
}
</style>
