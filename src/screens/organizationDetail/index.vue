<template>
  <nb-container :style="{ backgroundColor: '#939751' }">
    <header
      :navigation="this.props.navigation"
      :back="parentScreen"
      :back-params="parent"
    />
    <nb-content padder v-if="organization">
      <nb-h2 class="category-title">{{ organization.attributes.name }}</nb-h2>
      <nb-card class="news-card">
        <nb-card-item>
          <nb-body>
            <nb-text class="post-title" style="margin-bottom: 10">{{
              organization.attributes.name
            }}</nb-text>

            <nb-grid
              v-if="organization.attributes.street"
              style="margin-bottom: 10"
            >
              <nb-col style="width: 30"
                ><TouchableOpacity
                  :onPress="() => openMaps()"
                  :activeOpacity="1"
                >
                  <image
                    :source="icons.mapMarkerIcon"
                    style="width: 20; height: 20;margin-right: 10"/></TouchableOpacity
              ></nb-col>
              <nb-col
                ><TouchableOpacity
                  :onPress="() => openMaps()"
                  :activeOpacity="1"
                >
                  <nb-text>{{
                    organization.attributes.street +
                      " " +
                      organization.attributes.house_number +
                      (organization.attributes.house_number_addition
                        ? organization.attributes.house_number_addition
                        : "") +
                      ", " +
                      (organization.attributes.postal_code
                        ? organization.attributes.postal_code + " "
                        : "") +
                      (organization.attributes.city
                        ? organization.attributes.city
                        : "")
                  }}</nb-text></TouchableOpacity
                ></nb-col
              >
            </nb-grid>

            <nb-grid
              v-if="organization.attributes.phone_number"
              style="margin-bottom: 10"
            >
              <nb-col style="width: 30"
                ><TouchableOpacity
                  :onPress="() => dialCall()"
                  :activeOpacity="1"
                >
                  <image
                    :source="icons.phoneIcon"
                    style="width: 20; height: 20;margin-right: 10"/></TouchableOpacity
              ></nb-col>
              <nb-col
                ><TouchableOpacity
                  :onPress="() => openMaps()"
                  :activeOpacity="1"
                >
                  <nb-text>{{
                    organization.attributes.phone_number
                  }}</nb-text></TouchableOpacity
                ></nb-col
              >
            </nb-grid>

            <nb-grid
              v-if="organization.attributes.email"
              style="margin-bottom: 10"
            >
              <nb-col style="width: 30"
                ><TouchableOpacity
                  :onPress="() => openEmail()"
                  :activeOpacity="1"
                >
                  <image
                    :source="icons.envelopeIcon"
                    style="width: 20; height: 20;margin-right: 10"/></TouchableOpacity
              ></nb-col>
              <nb-col
                ><TouchableOpacity
                  :onPress="() => openEmail()"
                  :activeOpacity="1"
                >
                  <nb-text>{{
                    organization.attributes.email
                  }}</nb-text></TouchableOpacity
                ></nb-col
              >
            </nb-grid>

            <nb-grid
              v-if="organization.attributes.website"
              style="margin-bottom: 10"
            >
              <nb-col style="width: 30"
                ><TouchableOpacity
                  :onPress="() => openWebsite()"
                  :activeOpacity="1"
                >
                  <image
                    :source="icons.globeIcon"
                    style="width: 20; height: 20;margin-right: 10"/></TouchableOpacity
              ></nb-col>
              <nb-col
                ><TouchableOpacity
                  :onPress="() => openWebsite()"
                  :activeOpacity="1"
                >
                  <nb-text>{{
                    organization.attributes.website
                  }}</nb-text></TouchableOpacity
                ></nb-col
              >
            </nb-grid>

          </nb-body>
        </nb-card-item>
        <nb-card-item>
          <nb-body>
            <nb-text v-if="organization.attributes.information_title">{{
              organization.attributes.information_title
            }}</nb-text>
            <h-t-m-l
              v-if="organization.attributes.information_description"
              :source="{
                html: organization.attributes.information_description
              }"
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
import { Linking, Platform } from "react-native";

import mapMarkerIcon from "../../../assets/map-marker-alt-solid.png";
import envelopeIcon from "../../../assets/envelope-solid.png";
import phoneIcon from "../../../assets/phone-alt-solid.png";
import globeIcon from "../../../assets/globe-europe-solid.png";

export default {
  components: {
    Header,
    HTML
  },
  props: {
    navigation: Object
  },
  mounted() {
    let organization = this.navigation.getParam("organization");
    console.log(organization);
    this.organization = organization;
    this.parent = this.navigation.getParam("parent");
    this.parentScreen = this.navigation.getParam("parentScreen");
  },
  watch: {
    "navigation.state.params": {
      deep: true,
      handler(newValue, oldValue) {
        this.organization = newValue.organization;
        this.parent = newValue.parent;
        this.parentScreen = newValue.parentScreen;
      }
    }
  },
  data() {
    return {
      icons: {
        mapMarkerIcon,
        envelopeIcon,
        phoneIcon,
        globeIcon
      },
      organization: null,
      parent: null,
      parentScreen: null,
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
  },
  methods: {
    dialCall() {
      let phoneNumber = "";

      if (Platform.OS === "android") {
        phoneNumber =
          "tel:${" + this.organization.attributes.phone_number + "}";
      } else {
        phoneNumber =
          "telprompt:${" + this.organization.attributes.phone_number + "}";
      }

      Linking.openURL(phoneNumber);
    },
    openEmail() {
      Linking.openURL("mailto:" + this.organization.attributes.email);
    },
    openWebsite() {
      Linking.openURL(
        this.organization.attributes.website.startsWith("http")
          ? this.organization.attributes.website
          : "http://" + this.organization.attributes.website
      );
    },
    openMaps() {
      const address =
        this.organization.attributes.street +
        " " +
        this.organization.attributes.house_number +
        (this.organization.attributes.house_number_addition
          ? this.organization.attributes.house_number_addition
          : "") +
        ", " +
        (this.organization.attributes.postal_code
          ? this.organization.attributes.postal_code + " "
          : "") +
        (this.organization.attributes.city
          ? this.organization.attributes.city
          : "");

      Linking.openURL("https://maps.google.com/?q=" + address);
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
