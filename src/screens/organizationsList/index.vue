<template>
  <nb-container :style="{ backgroundColor: '#939751' }">
    <header :navigation="this.props.navigation" back="Home" />
    <nb-content padder>
      <template>
        <nb-h2 class="category-title">Gids</nb-h2>
        <nb-text class="category-desc">Zoekt u een organisatie of een functie in de gemeente Zevenaar die actief zijn op het gebied van het sociaal domein dan kunt u die vinden met gebruik van de zoekfunctie. Typ de naam of functie en druk op de zoekknop.</nb-text>
      </template>
      <footer
        :navigation="this.props.navigation"
        :on-home="false"
        style="margin-bottom: 10; padding-left: 3; padding-right: 3"
      />
      <template v-if="organizations.length > 0">
        <touchable-opacity
          v-for="organization in organizations"
          :key="organization.id"
          :onPress="
            () =>
              navigation.navigate('OrganizationDetail', {
                parentScreen: 'OrganizationsList',
                parent: {
                  search: search
                },
                organization: organization
              })
          "
        >
          <nb-card class="news-card">
            <nb-card-item>
              <nb-body>
                <nb-text class="post-title">{{
                  organization.attributes.name
                }}</nb-text>
              </nb-body>
            </nb-card-item>
          </nb-card>
        </touchable-opacity>
      </template>
    </nb-content>
  </nb-container>
</template>

<script>
import Footer from "../../components/footer";
import Header from "../../components/header";
import HTML from "react-native-render-html";
import axios from "axios";

export default {
  components: {
    Header,
    HTML,
    Footer
  },
  props: {
    navigation: Object
  },
  data() {
    return {
      search: "",
      organizations: []
    };
  },
  mounted() {
    this.search = this.navigation?.state?.params?.search ?? "";
    this.loadOrganizations();
  },
  watch: {
    "navigation.state.params": {
      deep: true,
      handler(newValue, oldValue) {
        this.search = newValue.search;
        this.loadOrganizations();
      }
    }
  },
  methods: {
    loadOrganizations() {
      if (!this.search) {
        return;
      }
      axios({
        method: "GET",
        url:
          "https://wegwijs-in-zevenaar-platform-dev-pw24i.ondigitalocean.app/api/v1/organizations?filter[search]=" +
          this.search
      }).then(
        result => {
          this.organizations = result.data?.data ?? [];
        },
        error => {
          console.error(error);
        }
      );
    },
    getSubString(string) {
      const LIMIT = 100;
      if (string.length > LIMIT) return string.substring(0, LIMIT) + "...";
      else return string;
    }
  }
};
</script>

<style>
.category-title {
  margin-top: 10;
  margin-bottom: 10;
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
</style>
