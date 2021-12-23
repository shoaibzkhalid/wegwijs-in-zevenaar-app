<template>
  <nb-container :style="{ backgroundColor: '#939751' }">
    <header :navigation="this.props.navigation" back="ActivityChoose" />
    <nb-content padder>
      <nb-h2 class="category-title">{{ item.title }}</nb-h2>
      <nb-text class="category-desc">{{ item.description }}</nb-text>
      <nb-card class="news-card" v-if="!activities || activities.length === 0">
        <nb-card-item>
          <nb-body>
            <nb-text class="post-title">Geen activiteiten</nb-text>
          </nb-body>
        </nb-card-item>
      </nb-card>
      <view v-if="activities">
        <template v-for="activity in activities">
          <touchable-opacity
            :key="activity.attributes.id"
            :onPress="
              () =>
                navigation.navigate('ActivityDetail', {
                  activityItem: activity,
                  parent: 'ActivityList'
                })
            "
          >
            <nb-card class="news-card">
              <nb-card-item>
                <nb-body>
                  <nb-text class="post-title">{{
                    activity.attributes.name
                  }}</nb-text>
                  <nb-text class="published-date"
                    >Op {{ activity.attributes.start_date | formatDate }} van {{ activity.attributes.start_date | formatTime }} tot {{ activity.attributes.end_date | formatTime }}</nb-text
                  >
                    <nb-text class="published-date"
                    >Adres: {{ activity.attributes.street }} {{ activity.attributes.house_number }}, {{ activity.attributes.city }}</nb-text>
                </nb-body>
              </nb-card-item>
              <nb-card-item>
                <nb-body>
                  <nb-text class="post-desc">{{
                    getSubString(activity.attributes.short_description)
                  }}</nb-text>
                </nb-body>
              </nb-card-item>
            </nb-card>
          </touchable-opacity>
        </template>
      </view>
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
    },
    getActivities() {
      axios({
        method: "GET",
        url:
          "https://wegwijs-in-zevenaar-platform-dev-pw24i.ondigitalocean.app/api/v1/activities?filter[target_group]=" +
          (this.targetGroup ?? "")
      }).then(
        result => {
          this.activities = result.data?.data ?? [];
        },
        error => {
          console.error(error);
        }
      );
    }
  },
  props: {
    navigation: Object
  },
  data() {
    return {
      item: {
        id: "1",
        title: "Activiteiten",
        description: ""
      },
      targetGroup: null,
      activities: []
    };
  },
  watch: {
    "navigation.state.params": {
      deep: true,
      handler(newValue, oldValue) {
        this.targetGroup = newValue.targetGroup;
        this.item.description = newValue.targetGroupText;
        this.getActivities();
      }
    }
  },
  mounted() {
    this.targetGroup = this.navigation.getParam("targetGroup");
    this.item.description = this.navigation.getParam("targetGroupText");
    this.getActivities();
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
