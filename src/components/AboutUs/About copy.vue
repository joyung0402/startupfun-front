<template>
  <v-col cols="12" sm="12" class="my-16">
  <v-row justify="center">
    <v-col cols="12" sm="12" >
      <v-row class="about00">
      <v-col cols="12" sm="5" class="about01">
      <v-img
        :aspect-ratio="1"
        class="bg-white aboutimg"
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        width="100%"
        height="480px"
        cover
      ></v-img>
      </v-col>
      <v-col cols="12" sm="7" class="about02">
        <v-card>
        <div id="aboutwd">
        <p id="abouttitle">
          關於創業趣
        </p>
        <div id="abouttext" class="mt-8">
          <p>創辦人本身是出版多本書的旅遊作家，在拍攝餐廳時，遇到不少店家產品、餐點好，
          卻因擺設風格不統一、缺乏設計、招牌老舊，導致人潮流失；為了使店家死而復燃、重新恢復信心，
          同時讓年輕人創業有方向，我們創立了這個平台，讓創業者不再為如何營運店家所煩惱。
          在這裡消費者可以用現有資金，得到所有創辦餐廳、店家所需的一切設備，
          包含社群、識別設計、店內擺設家具、餐廳廚房設備、網美人氣餐廳必備 裝潢、廣告招牌、美食原料。</p>
        </div>
        </div>

      </v-card>
      </v-col>
    </v-row>
    </v-col>
  </v-row>
  </v-col>
</template>

<style>

.aboutimg{
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.about02{

margin-left: -10%;
}

.about00{
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}

#aboutwd{
  padding: 40px;
}

#abouttitle{
  font-size: 32px;
  font-weight: 900;
}

#abouttext{
  font-size: 16px;
  line-height: 2;
  font-weight: 600;
}
</style>
