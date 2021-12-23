<template>
  <nb-container :style="{ backgroundColor: '#939751' }">
    <header :navigation="this.props.navigation" back="IdeasList" />
    <nb-content padder v-if="ideaItem">
      <nb-h2 class="category-title">
        {{ item.title }}
      </nb-h2>
      <nb-card class="news-card">
        <nb-card-item>
          <nb-body>
            <nb-text class="published-date"
              >Gepubliceerd {{ ideaItem.attributes.published_at | formatDate }}</nb-text
            >
            <nb-text class="post-title">{{
              ideaItem.attributes.title
            }}</nb-text>
          </nb-body>
        </nb-card-item>

        <nb-card-item cardBody style="padding-left: 15; padding-right: 15;">
          <Image
            v-if="ideaItem.attributes.image"
            :source="{ uri: ideaItem.attributes.image }"
            class="card-item-image"
            resizeMode="contain"
          />
        </nb-card-item>
        <nb-card-item>
          <nb-body>
            <h-t-m-l
              v-if="ideaItem.attributes.description"
              :source="{ html: ideaItem.attributes.description }"
            />
          </nb-body>
        </nb-card-item>
        <nb-card-item>
          <nb-body>
            <nb-text class="post-title">Contact:</nb-text>
            <nb-text v-if="ideaItem.attributes.contact_name">{{
              ideaItem.attributes.contact_name
            }}</nb-text>
            <nb-text
                v-if="ideaItem.attributes.phone_number"
                :onPress="() => dialCall()">{{
              ideaItem.attributes.phone_number
            }}</nb-text>
            <nb-text
              v-if="ideaItem.attributes.email"
              :onPress="() => openEmail()">{{
              ideaItem.attributes.email
            }}</nb-text>
          </nb-body>
        </nb-card-item>
      </nb-card>
    </nb-content>
  </nb-container>
</template>

<script>
import Header from "../../components/header";
import HTML from "react-native-render-html";
import { Linking, Platform } from "react-native";

export default {
  components: {
    Header,
    HTML
  },
  props: {
    navigation: Object
  },
  mounted() {
    let newsItem = this.navigation.getParam("ideaItem");
    console.log(this.navigation);
    this.ideaItem = newsItem;
  },
  watch: {
    "navigation.state.params": {
      deep: true,
      handler(newValue, oldValue) {
        this.ideaItem = newValue.ideaItem;
      }
    }
  },
  data() {
    return {
      ideaItem: null,
      item: {
        id: "1",
        title: "Ideeën",
        description: "Korte omschrijving op deze plek"
        // "post": {
        //   "id": "1",
        //   "published_date": "12-05-2021",
        //   "title": "Brandweer op zoek naar nieuwe leden",
        //   "image": newsImage,
        //   "description": "Zevenaar - Diverse brandweerposten in de regio zijn dringend op zoek naar nieuwe leden. Zowel mannen als vrouwen kunnen hiervoor in aanmerking komen. Ben je be nieuwd wat het inhoudt om een brandweer man/-vrouw te zijn en wat je daarvoor moet doen? Kijk dan op bijdebrandweer.nl voor informatie"
        // }
      }
    };
  },
  methods: {
    dialCall() {
      let phoneNumber = "";

      if (Platform.OS === "android") {
        phoneNumber = "tel:${" + this.ideaItem.attributes.phone_number + "}";
      } else {
        phoneNumber =
          "telprompt:${" + this.ideaItem.attributes.phone_number + "}";
      }

      Linking.openURL(phoneNumber);
    },
    openEmail() {
      Linking.openURL("mailto:" + this.ideaItem.attributes.email);
    }
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
