<template> 
  <coupon-detail :isEdit="false"></coupon-detail>
</template>
<script>
  import CouponDetail from './components/CouponDetail'
  export default {
    name: 'updateCoupon',
    components: { CouponDetail }
  }
</script>
<style scoped>
</style>


