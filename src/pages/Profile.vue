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

    <b-container
      fluid
      class="flex-grow-1"
    >
      <b-row class="align-items-center h-100">
        <b-col sm="3">
          <img
            src="../assets/profile/icon.jpg"
            width="200"
            height="200"
          >
        </b-col>
        <b-col class="text-left m-2">
          <dl>
            <dt class="h3">
              氏名
            </dt>
            <dd class="ml-3">
              田上佑希
            </dd>
            <dt class="h3">
              誕生日
            </dt>
            <dd class="ml-3">
              1994年 5月 18日
            </dd>
            <dt class="h3">
              自己紹介
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
        </b-col>
      </b-row>
    </b-container>
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
