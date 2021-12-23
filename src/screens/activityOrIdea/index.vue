<template>
  <nb-container :style="{ backgroundColor: '#939751' }">
    <header :navigation="this.props.navigation" back="Home" />
    <nb-content padder>
      <view class="item-grid">
        <category-item
          v-for="item in listItems"
          :key="item.id"
          :data="item"
          :navigation="this.props.navigation"
          :bigger-buttons="true"
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
          id: "14",
          title: "ACTIVITEITEN",
          icon: icon3,
          activeIcon: icon3_hover
        },
        {
          id: "11",
          title: "IDEEËN",
          icon: icon11,
          activeIcon: icon11_hover
        }
      ]
    };
  }
};
</script>

<style>
.body-icon-color {
  color: #999;
}
.item-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
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
