<template>
  <div>
    <input type="text" v-model="message">
    <p>{{message}}</p>
  </div>
</template>

<script lang="javascript">
module.exports = {
  setup() {
    const message = ref("Hello");

    const fetch = async () => {
      const res = await axios.get(
        "https://edurpap2.asia.edu.tw/App_api/api/app_08/scr_data"
      );
      console.log(res.data);
    };

    fetch();

    return { message };
  }
};
</script>