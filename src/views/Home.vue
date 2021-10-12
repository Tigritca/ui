<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/pngwing.com.png" @click="showToast()">
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  mounted() {

  },
  methods:{
    showToast(){
      this.$toast('Simple!');
    }
  }
}
</script>
