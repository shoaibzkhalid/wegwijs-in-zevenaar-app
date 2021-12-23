<template>
  <nb-container :style="{ backgroundColor: '#939751' }">
    <header :navigation="this.props.navigation" back="NewsList" />
    <nb-content padder v-if="newsItem">
      <nb-h2 class="category-title">{{ item.title }}</nb-h2>
      <nb-card class="news-card">
        <nb-card-item>
          <nb-body>
            <nb-text class="published-date">Gepubliceerd {{ newsItem.attributes.published_at | formatDate }}</nb-text>
            <nb-text class="post-title">{{ newsItem.attributes.title }}</nb-text>
          </nb-body>
        </nb-card-item>

        <nb-card-item cardBody style="padding-left: 15; padding-right: 15;">
          <image
            v-if="newsItem.attributes.image"
            :source="{ uri: newsItem.attributes.image }"
            class="card-item-image"
          />
        </nb-card-item>
        <nb-card-item>
          <nb-body>
            <h-t-m-l
              v-if="newsItem.attributes.content"
              :source="{ html: newsItem.attributes.content }"
            />
          </nb-body>
        </nb-card-item>
      </nb-card>
    </nb-content>
  </nb-container>
</template>

<script>
import Header from "../../components/header";
import HTML from "react-native-render-html";

export default {
  components: {
    Header,
    HTML
  },
  props: {
    navigation: Object
  },
  mounted() {
    let newsItem = this.navigation.getParam("newsItem");
    console.log(this.navigation);
    this.newsItem = newsItem;
  },
  watch: {
    "navigation.state.params": {
      deep: true,
      handler(newValue, oldValue) {
        this.newsItem = newValue.newsItem;
      }
    }
  },
  data() {
    return {
      newsItem: null,
      item: {
        id: "1",
        title: "NIEUWS",
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
