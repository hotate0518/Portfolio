<template>
  <div class="d-flex flex-column">
    <div class="h1 m-3">
      <img
        class="mr-2"
        src="../assets/profile/profile.png"
        width="44.5"
      >
      <b>PROFILE</b>
    </div>

    <div class="flex-grow-1 pl-4 pr-4 pb-4">
      <div class="align-items-center h-100">
        <div sm="3">
          <img
            src="../assets/profile/icon.jpg"
            width="200"
            height="200"
          >
        </div>
        <div class="text-left m-2">
          <dl>
            <dt class="h3">
              <b>氏名</b>
            </dt>
            <dd class="ml-3">
              田上佑希
            </dd>
            <dt class="h3">
              <b>誕生日</b>
            </dt>
            <dd class="ml-3">
              1994年 5月 18日
            </dd>
            <dt class="h3">
              <b>自己紹介</b>
            </dt>
            <dd class="ml-3">
              <p>
                はじめまして。田上佑希
                (<a href="https://twitter.com/hotateO158">
                  @hotateO158
                </a>)と申します。社会人歴は{{ getSocialWorkHistory }}年です。<br>
                現在は、フルスタックエンジニアを目指し、バックエンド・フロントエンド問わず何でも取り組んでいます。
                また、AWSでのインフラ整備も行っており、”一人でもサービスが作れる”人間となるため日々精進中です。
              </p>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script >

export default {
  computed: {
    getSocialWorkHistory() {
      const now = new Date();
      const start = new Date(2017, 4, 1);
      return now.getFullYear() - start.getFullYear();
    },
  },

};
</script>
