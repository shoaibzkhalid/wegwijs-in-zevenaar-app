<template>
  <nb-container :style="{ backgroundColor: '#939751' }">
    <header :navigation="this.props.navigation" back="Home" />
    <nb-content padder>
      <nb-h2 class="category-title">
        Welkom
      </nb-h2>
      <nb-text class="category-desc">
        In de Wegwijs in Zevenaar app
      </nb-text>
      <nb-card class="news-card">
        <nb-card-item>
          <nb-body>
            <template v-if="welcome_message">
              <h-t-m-l
                :source="{ html: welcome_message }"
                style="margin-bottom: 10;"
              />
            </template>
            <template v-if="video_url !== ''">
              <video
                useNativeControls
                :source="{ uri: video_url }"
                resizeMode="contain"
                style="width: 100%; height: 250"
              />
            </template>
          </nb-body>
        </nb-card-item>
      </nb-card>
    </nb-content>
  </nb-container>
</template>

<script>
import Header from "../../components/header";
import HTML from "react-native-render-html";
import { Video, AVPlaybackStatus } from "expo-av";
import axios from "axios";

export default {
  components: {
    Header,
    HTML,
    Video
  },
  props: {
    navigation: Object
  },
  data() {
    return {
      welcome_message: "",
      video_url: ""
    };
  },

  mounted() {
    axios({
      method: "GET",
      url:
        "https://wegwijs-in-zevenaar-platform-dev-pw24i.ondigitalocean.app/api/v1/general"
    }).then(
      result => {
        this.welcome_message = result.data?.welcome_message ?? "";
        this.video_url = result.data?.video_url ?? "";
      },
      error => {
        console.error(error);
      }
    );
  }
};
</script>

<style>
.category-title {
  margin-top: 10;
  font-weight: bold;
  text-transform: capitalize;
  width: 100%;
  color: white;
}
.category-desc {
  color: white;
  margin-bottom: 20;
}
.published-date {
  margin-top: 5;
  color: #919845;
}
.post-title {
  color: #494c23;
  font-weight: bold;
  font-size: 18;
}
.news-item {
  padding-left: 0;
  margin: 0;
  border-width: 0;
}
.news-card {
  border-radius: 15;
  overflow: hidden;
}
.post-desc {
  color: #494c23;
}
.card-item-image {
  width: 100%;
  height: 200;
}
</style>
