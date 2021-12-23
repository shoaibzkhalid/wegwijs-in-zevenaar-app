<template>
  <nb-container>
    <nb-content class="sidebar-content-wrapper" :bounces="false">
      <nb-list>
        <nb-list-item
          v-for="item in listItems"
          :key="item.id"
          :class="selectedItem === item.id ? 'selected' : ''"
          button
          style="padding-left: 10; margin-left: -5; padding-top: 5; padding-bottom: 5"
          :onPress="() => handleListItemClick(item.id)"
        >
          <nb-left>
            <image
              v-if="item.icon"
              :source="selectedItem === item.id ? item.icon : item.activeIcon"
              style="width: 40; height: 40; margin-right: 10"
            />
            <nb-text
              :class="selectedItem === item.id ? 'selected' : ''"
              style="font-size: 14"
            >
              {{ item.title }}
            </nb-text>
          </nb-left>
        </nb-list-item>
      </nb-list>
    </nb-content>
  </nb-container>
</template>

<script>
// Load item images
import home from "../../../assets/home.png";
import icon1 from "../../../assets/icon1.png";
import icon2 from "../../../assets/icon2.png";
import icon3 from "../../../assets/icon3.png";
import icon4 from "../../../assets/icon4.png";
import icon5 from "../../../assets/icon5.png";
import icon6 from "../../../assets/icon6.png";
import icon7 from "../../../assets/icon7.png";
import icon8 from "../../../assets/icon8.png";
import icon9 from "../../../assets/icon9.png";
import icon10 from "../../../assets/icon10.png";
import icon13 from "../../../assets/icon13.png";
import icon1_hover from "../../../assets/icon1_hover.png";
import icon2_hover from "../../../assets/icon2_hover.png";
import icon3_hover from "../../../assets/icon3_hover.png";
import icon4_hover from "../../../assets/icon4_hover.png";
import icon5_hover from "../../../assets/icon5_hover.png";
import icon6_hover from "../../../assets/icon6_hover.png";
import icon7_hover from "../../../assets/icon7_hover.png";
import icon8_hover from "../../../assets/icon8_hover.png";
import icon9_hover from "../../../assets/icon9_hover.png";
import icon13_hover from "../../../assets/icon13_hover.png";
import axios from "axios";
import { Linking, Platform } from "react-native";

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data() {
    return {
      privacyPolicy: "",
      selectedItem: 0,
      listItems: [
        {
          id: 0,
          title: "Welkom",
          icon: home,
          activeIcon: home
        },
        {
          id: 1,
          title: "Nieuws",
          icon: icon1,
          activeIcon: icon1_hover
        },
        {
          id: 3,
          title: "Activiteiten & Ideeën",
          icon: icon3,
          activeIcon: icon3_hover
        },
        {
          id: 4,
          title: "Financiën",
          icon: icon4,
          activeIcon: icon4_hover
        },
        {
          id: 5,
          title: "Gezond leven",
          icon: icon5,
          activeIcon: icon5_hover
        },
        {
          id: 6,
          title: "Welzijn & ondersteuning",
          icon: icon6,
          activeIcon: icon6_hover
        },
        {
          id: 7,
          title: "Ontmoeten",
          icon: icon7,
          activeIcon: icon7_hover
        },
        {
          id: 8,
          title: "Opgroeien & opvoeding",
          icon: icon8,
          activeIcon: icon8_hover
        },
        {
          id: 9,
          title: "Hulp in huis",
          icon: icon9,
          activeIcon: icon9_hover
        },
        {
          id: 2,
          title: "Gids",
          icon: icon2,
          activeIcon: icon2_hover
        },
        {
          id: 10,
          title: "Privacyverklaring",
          icon: icon10,
          activeIcon: icon10
        },
        {
          id: 13,
          icon: icon13_hover,
          activeIcon: icon13,
          title: "Contact"
        }
      ]
    };
  },
  mounted() {
    axios({
      method: "GET",
      url:
        "https://wegwijs-in-zevenaar-platform-dev-pw24i.ondigitalocean.app/api/v1/general"
    }).then(
      result => {
        this.privacyPolicy = result.data?.privacy_statement_url ?? "";
      },
      error => {
        console.error(error);
      }
    );
  },
  methods: {
    handleListItemClick(id) {
      switch (id) {
        case 0:
          this.navigation.navigate("Welcome");
          break;
        case 1:
          this.navigation.navigate("NewsList");
          break;
        case 2:
          this.navigation.navigate("OrganizationsList");
          break;
        case 3:
          this.navigation.navigate("ActivityOrIdea");
          break;
        case 4:
          this.navigation.navigate("SubjectList", {
            subject: {
              id: "1",
              title: "Financiën",
              description: "Informatie over financiële zaken",
              post: {}
            }
          });
          break;
        case 5:
          this.navigation.navigate("SubjectList", {
            subject: {
              id: "4",
              title: "Gezond leven",
              description:
                "Informatie over verschillende onderwerpen die bij kunnen dragen op een gezond leven en persoonlijke gezondheid.",
              post: {}
            }
          });
          break;
        case 6:
          this.navigation.navigate("SubjectList", {
            subject: {
              id: "5",
              title: "Welzijn & Ondersteuning",
              description:
                "Informatie op het terrein van welzijn en persoonlijke ondersteuning",
              post: {}
            }
          });
          break;
        case 7:
          this.navigation.navigate("SubjectList", {
            subject: {
              id: "6",
              title: "Ontmoeten",
              description:
                "Informatie over items die in het kader van welzijn te maken hebben met elkaar ontmoeten.\n",
              post: {}
            }
          });
          break;
        case 8:
          this.navigation.navigate("SubjectList", {
            subject: {
              id: "2",
              title: "Opgroeien & Opvoeden",
              description:
                "Informatie dat kan helpen bij het opvoeden en groeiontwikkeling van kinderen",
              post: {}
            }
          });
          break;
        case 9:
          this.navigation.navigate("SubjectList", {
            subject: {
              id: "8",
              title: "Hulp in huis",
              description:
                "Informatie om zo lang als mogelijk zelfstandig thuis te kunnen wonen",
              post: {}
            }
          });
          break;
        case 10:
          Linking.openURL(this.privacyPolicy);
          return;
        case 13:
          this.navigation.navigate("Contact");
          break;
      }

      this.selectedItem = id;
      this.navigation.closeDrawer();
    }
  }
};
</script>

<style>
.sidebar-content-wrapper {
  flex: 1;
  background-color: #fff;
  padding-top: 0;
}
.drawer-cover {
  flex: 1;
  align-self: stretch;
  position: relative;
  margin-bottom: 10;
}
.selected {
  color: white;
  background-color: #494c23;
}
.list-item-badge-container {
  border-radius: 3;
  height: 25;
  width: 72;
}
.list-item-badge-text {
  /* font-weight: 400; // not-working  */
  /* font-weight: bold; // working */
  text-align: center;
}
</style>
