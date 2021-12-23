<template>
  <nb-container :style="{ backgroundColor: '#939751' }">
    <header :navigation="this.props.navigation" back="ActivityOrIdea" />
    <nb-content padder>
      <nb-h2 class="category-title">Activiteiten</nb-h2>
      <nb-text class="category-desc">Organisaties in de gemeente Zevenaar organiseren verschillende activiteiten op gebied van dagbesteding, sport en recreatie voor jong en oud. Onder Activiteiten staan de mogelijkheden die worden georganiseerd. Met de “Kalender” kan op datum de activiteiten worden gevonden. Ook is het mogelijk op leeftijdscategorie, 0 - 25 jaar; 25 - 55 jaar en 55 jaar en ouder) activiteiten te zoeken.</nb-text>
      <view class="item-grid">
        <category-item
          v-for="item in listItems"
          :key="item.id"
          :data="item"
          :navigation="this.props.navigation"
          :bigger-buttons="false"
        />
      </view>
    </nb-content>
  </nb-container>
</template>

<script>
import Header from "../../components/header";
import Footer from "../../components/footer";
import CategoryItem from "../../components/item";

// Load item images
import icon3 from "../../../assets/icon3.png";
import icon3_hover from "../../../assets/icon3_hover.png";
import icon11 from "../../../assets/icon11.png";
import icon11_hover from "../../../assets/icon11_hover.png";

export default {
  components: {
    Header,
    Footer,
    CategoryItem
  },
  data() {
    return {
      listItems: [
        {
          id: "15",
          title: "Kalender",
          icon: icon3,
          activeIcon: icon3_hover
        },
        {
          id: "16",
          title: "Alle leeftijden",
          icon: icon3,
          activeIcon: icon3_hover
        },
        {
          id: "17",
          title: "0-25 jaar",
          icon: icon3,
          activeIcon: icon3_hover
        },
        {
          id: "18",
          title: "25-55 jaar",
          icon: icon3,
          activeIcon: icon3_hover
        },
        {
          id: "19",
          title: "55 jaar en ouder",
          icon: icon3,
          activeIcon: icon3_hover
        }
      ]
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
    margin-bottom: 0;
}

.body-icon-color {
  color: #999;
}
.item-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-top: 20;
  padding-bottom: 30;
}
.item-wrapper {
  height: 160;
  width: 120;
  margin: 5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
