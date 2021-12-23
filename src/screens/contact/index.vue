<template>
  <nb-container :style="{ backgroundColor: '#939751' }">
    <header :navigation="this.props.navigation" back="Home" />
    <nb-content padder>
      <nb-h2 class="category-title">
        Contact
      </nb-h2>
      <nb-card class="news-card">
        <nb-card-item>
          <image
            :source="icons.userIcon"
            style="width: 20; height: 20;margin-right: 10"
          />
          <nb-text>{{ contactName }}</nb-text>
        </nb-card-item>
        <TouchableOpacity :onPress="() => openMaps()" :activeOpacity="1">
          <nb-card-item>
            <image
              :source="icons.mapMarkerIcon"
              style="width: 20; height: 20;margin-right: 10"
            />
            <nb-text
              >{{ contactStreet }} {{ contactHouseNumber }}, {{ contactPostalCode }} {{ contactCity }}</nb-text
            >
          </nb-card-item>
        </TouchableOpacity>
        <TouchableOpacity :onPress="() => openEmail()" :activeOpacity="1">
          <nb-card-item>
            <image
              :source="icons.envelopeIcon"
              style="width: 20; height: 20;margin-right: 10"
            />
            <nb-text>{{ contactEmail }}</nb-text>
          </nb-card-item>
        </TouchableOpacity>
        <TouchableOpacity :onPress="() => dialCall()" :activeOpacity="1">
          <nb-card-item>
            <image
              :source="icons.phoneIcon"
              style="width: 20; height: 20;margin-right: 10"
            />
            <nb-text>{{ contactPhoneNumber }}</nb-text>
          </nb-card-item>
        </TouchableOpacity>
      </nb-card>
    </nb-content>
  </nb-container>
</template>

<script>
import Header from "../../components/header";
import HTML from "react-native-render-html";
import axios from "axios";
import { Linking, Platform } from "react-native";

import userIcon from "../../../assets/user-solid.png";
import mapMarkerIcon from "../../../assets/map-marker-alt-solid.png";
import envelopeIcon from "../../../assets/envelope-solid.png";
import phoneIcon from "../../../assets/phone-alt-solid.png";

export default {
  components: {
    Header,
    HTML
  },
  props: {
    navigation: Object
  },
  data() {
    return {
      icons: {
        userIcon,
        mapMarkerIcon,
        envelopeIcon,
        phoneIcon
      },
      contactName: "",
      contactStreet: "",
      contactHouseNumber: "",
      contactPostalCode: "",
      contactCity: "",
      contactPhoneNumber: "",
      contactEmail: ""
    };
  },

  mounted() {
    axios({
      method: "GET",
      url:
        "https://wegwijs-in-zevenaar-platform-dev-pw24i.ondigitalocean.app/api/v1/general"
    }).then(
      result => {
        this.contactName = result.data?.contact_name ?? "";
        this.contactStreet = result.data?.contact_street ?? "";
        this.contactHouseNumber = result.data?.contact_house_number ?? "";
        this.contactPostalCode = result.data?.contact_postal_code ?? "";
        this.contactCity = result.data?.contact_city ?? "";
        this.contactPhoneNumber = result.data?.contact_phone_number ?? "";
        this.contactEmail = result.data?.contact_email ?? "";
      },
      error => {
        console.error(error);
      }
    );
  },
  methods: {
    dialCall() {
      let phoneNumber = "";

      if (Platform.OS === "android") {
        phoneNumber = "tel:${" + this.contactPhoneNumber + "}";
      } else {
        phoneNumber = "telprompt:${" + this.contactPhoneNumber + "}";
      }

      Linking.openURL(phoneNumber);
    },
    openEmail() {
      Linking.openURL("mailto:" + this.contactEmail);
    },
    openMaps() {
      Linking.openURL("https://maps.google.com/?q=" + this.contactStreet + " " + this.contactHouseNumber + ", " + this.contactPostalCode + " " + this.contactCity);
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
