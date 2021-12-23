<template>
  <nb-container :style="{ backgroundColor: '#939751' }">
    <header :navigation="this.props.navigation" back="ActivityOrIdea" />
    <nb-content padder>
      <nb-h2 class="category-title">{{ item.title }}</nb-h2>
      <nb-text class="category-desc">U vindt hier ideeën van de gemeenschap om samen het wonen en leven in de gemeente nog mooier te maken. Misschien kunt u helpen een of meerdere ideeën te realiseren. U heeft ook de mogelijkheid om als inwoner, buurt of groep een mooi idee in te dienen.</nb-text>
      <touchable-opacity
        v-for="post in item.post"
        :key="post.id"
        :onPress="() => navigation.navigate('IdeaDetail', { ideaItem: post })"
      >
        <nb-card class="news-card">
          <nb-card-item>
            <nb-body>
              <nb-text class="published-date"
                >Gepubliceerd {{ post.attributes.created_at | formatDate }}</nb-text
              >
              <nb-text class="post-title">{{ post.attributes.title }}</nb-text>
            </nb-body>
          </nb-card-item>
          <nb-card-item>
            <nb-body>
              <nb-grid>
                <nb-col :size="2"
                  ><Image
                    v-if="post.attributes.image"
                    :source="{ uri: post.attributes.image }"
                    class="card-item-image-new"
                    resizeMode="contain"
                /></nb-col>
                <nb-col :size="4"
                  ><nb-text class="post-desc" style="padding-left: 15;">{{
                    getSubString(post.attributes.short_description)
                  }}</nb-text></nb-col
                >
              </nb-grid>
            </nb-body>
          </nb-card-item>
        </nb-card>
      </touchable-opacity>
      <nb-card class="news-card">
        <nb-card-item>
          <nb-body>
            <nb-text class="post-title">Heeft u zelf een leuk idee?</nb-text>
              <nb-text class="post-desc">Ga naar de website www.wegwijsinzevenaar.nl en dien je idee in.</nb-text>
          </nb-body>
        </nb-card-item>
      </nb-card>
    </nb-content>
  </nb-container>
</template>

<script>
import Header from "../../components/header";
import HTML from "react-native-render-html";
import axios from "axios";

export default {
  components: {
    Header,
    HTML
  },
  methods: {
    getSubString(string) {
      const LIMIT = 150;
      if (string.length > LIMIT) return string.substring(0, LIMIT) + "...";
      else return string;
    }
  },
  props: {
    navigation: Object
  },
  data() {
    return {
      item: {
        id: "1",
        title: "Ideeën",
        description: "Korte omschrijving op deze plek",
        post: [
          // {
          //   id: "1",
          //   published_date: "12-05-2021",
          //   title: "Brandweer op zoek naar nieuwe leden",
          //   image: newsImage,
          //   description:
          //     "Zevenaar - Diverse brandweerposten in de regio zijn dringend op zoek naar nieuwe leden. Zowel mannen als vrouwen kunnen hiervoor in aanmerking komen. Ben je be nieuwd wat het inhoudt om een brandweer man/-vrouw te zijn en wat je daarvoor moet doen? Kijk dan op bijdebrandweer.nl voor informatie"
          // },
          // {
          //   id: "2",
          //   published_date: "12-05-2021",
          //   title: "Denk mee over de buitenruimte in Zevenaar",
          //   image: newsImage,
          //   description:
          //     "Zevenaar - Diverse brandweerposten in de regio zijn dringend op zoek naar nieuwe leden. Zowel mannen als vrouwen kunnen hiervoor in aanmerking komen. Ben je be nieuwd wat het inhoudt om een brandweer man/-vrouw te zijn en wat je daarvoor moet doen? Kijk dan op bijdebrandweer.nl voor informatie"
          // },
          // {
          //   id: "3",
          //   published_date: "12-05-2021",
          //   title: "Denk mee over de buitenruimte in Zevenaar",
          //   image: newsImage,
          //   description:
          //     "Zevenaar - Diverse brandweerposten in de regio zijn dringend op zoek naar nieuwe leden. Zowel mannen als vrouwen kunnen hiervoor in aanmerking komen. Ben je be nieuwd wat het inhoudt om een brandweer man/-vrouw te zijn en wat je daarvoor moet doen? Kijk dan op bijdebrandweer.nl voor informatie"
          // }
        ]
      }
    };
  },
  mounted() {
    axios({
      method: "GET",
      url:
        "https://wegwijs-in-zevenaar-platform-dev-pw24i.ondigitalocean.app/api/v1/ideas"
    }).then(
      result => {
        this.item.post = result.data?.data ?? [];
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
  padding: 0;
  margin: 0;
  border-width: 0;
}
.news-card {
  border-radius: 15;
  overflow: hidden;
  margin-bottom: 10;
}
.post-desc {
  color: #494c23;
}
.card-item-image {
  width: 100%;
  height: 200;
}
.card-item-image-new {
  flex: 1;
}
</style>
