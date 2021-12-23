<template>
  <nb-container :style="{ backgroundColor: '#939751' }">
    <header :navigation="this.props.navigation" :back="parent" />
    <nb-content padder v-if="activityItem">
      <nb-h2 class="category-title">
        {{ item.title }}
      </nb-h2>
      <nb-card class="news-card">
        <nb-card-item>
          <nb-body>
            <nb-text class="post-title">{{
              activityItem.attributes.name
            }}</nb-text>
            <nb-text class="published-date"
              >Op {{ activityItem.attributes.start_date | formatDate }} van {{ activityItem.attributes.start_date | formatTime }} tot {{ activityItem.attributes.end_date | formatTime }}</nb-text
            >
          </nb-body>
        </nb-card-item>

        <nb-card-item cardBody style="padding-left: 15; padding-right: 15;">
          <Image
            v-if="activityItem.attributes.image"
            :source="{ uri: activityItem.attributes.image }"
            class="card-item-image"
            resizeMode="contain"
          />
        </nb-card-item>
        <nb-card-item>
          <nb-body>
            <h-t-m-l
              v-if="activityItem.attributes.description"
              :source="{ html: activityItem.attributes.description }"
            />
          </nb-body>
        </nb-card-item>
        <nb-card-item v-if="activityItem.attributes.street">
          <nb-body>
            <nb-text class="post-title">Adresgegevens:</nb-text>
              <nb-text>{{ activityItem.attributes.street }} {{ activityItem.attributes.house_number }}, {{ activityItem.attributes.postal_code }} {{ activityItem.attributes.city }}</nb-text>
          </nb-body>
        </nb-card-item>
        <nb-card-item>
          <nb-body>
            <nb-text class="post-title">Contact:</nb-text>
            <nb-text v-if="activityItem.attributes.contact_name">{{
              activityItem.attributes.contact_name
            }}</nb-text>
            <nb-text
              v-if="activityItem.attributes.phone_number"
              :onPress="() => dialCall()"
              >{{ activityItem.attributes.phone_number }}</nb-text
            >
            <nb-text
              v-if="activityItem.attributes.email"
              :onPress="() => openEmail()"
              >{{ activityItem.attributes.email }}</nb-text
            >
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
    this.activityItem = this.navigation.getParam("activityItem");
    this.parent = this.navigation.getParam("parent");
  },
  watch: {
    "navigation.state.params": {
      deep: true,
      handler(newValue, oldValue) {
        this.activityItem = newValue.activityItem;
        this.parent = newValue.parent;
      }
    }
  },
  data() {
    return {
      activityItem: null,
      parent: "ActivityList",
      item: {
        id: "1",
        title: "Activiteiten",
        description: "Korte omschrijving op deze plek"
      }
    };
  },
  methods: {
    dialCall() {
      let phoneNumber = "";

      if (Platform.OS === "android") {
        phoneNumber = "tel:${" + this.activityItem.attributes.phone_number + "}";
      } else {
        phoneNumber =
          "telprompt:${" + this.activityItem.attributes.phone_number + "}";
      }

      Linking.openURL(phoneNumber);
    },
    openEmail() {
      Linking.openURL("mailto:" + this.activityItem.attributes.email);
    },
    openMaps() {
      Linking.openURL(
        "https://maps.google.com/?q=" +
          this.activityItem.attributes.street +
          " " +
          this.activityItem.attributes.house_number +
          ", " +
          this.activityItem.attributes.postal_code +
          " " +
          this.activityItem.attributes.city
      );
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
