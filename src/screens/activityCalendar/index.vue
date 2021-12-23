<template>
  <nb-container :style="{ backgroundColor: '#939751' }">
    <header :navigation="this.props.navigation" back="ActivityChoose" />
    <nb-content padder>
      <nb-h2 class="category-title">Activiteiten</nb-h2>
      <calendar
        :current="selectedDate"
        :markedDates="getMarkedDates(selectedDate)"
        :onDayPress="onChange"
        :firstDay="1"
      />
      <nb-text v-if="selectedDate" class="selected-date">{{
        selectedDate | formatDate
      }}</nb-text>
      <view v-if="activities">
        <template v-for="activity in activities">
          <touchable-opacity
            :key="`activity-${activity.attributes.id}`"
            :onPress="
              () =>
                navigation.navigate('ActivityDetail', {
                  activityItem: activity,
                  parent: 'ActivityCalendar'
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
                    >Van {{ activity.attributes.start_date | formatTime }} tot {{ activity.attributes.end_date | formatTime }}</nb-text
                  >
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
      <nb-card
        class="news-card"
        v-if="
          selectedDate &&
            selectedDate.length > 0 &&
            (!activities || activities.length === 0)
        "
      >
        <nb-card-item>
          <nb-body>
            <nb-text class="post-title">Geen activiteiten</nb-text>
          </nb-body>
        </nb-card-item>
      </nb-card>
      <nb-card
        class="news-card"
        v-if="!selectedDate || selectedDate.length === 0"
      >
        <nb-card-item>
          <nb-body>
            <nb-text class="post-title">Selecteer een datum</nb-text>
          </nb-body>
        </nb-card-item>
      </nb-card>
    </nb-content>
  </nb-container>
</template>

<script>
import Header from "../../components/header";
import { Calendar, LocaleConfig } from "react-native-calendars";
import axios from "axios";

export default {
  components: {
    Header,
    // DateTimePicker,
    Calendar
  },
  beforeMount() {
    LocaleConfig.locales.nl = {
      monthNames: [
        "Januari",
        "Februari",
        "Maart",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Augustus",
        "September",
        "Oktober",
        "November",
        "December"
      ],
      monthNamesShort: [
        "Jan",
        "Feb",
        "Mrt",
        "Apr",
        "Mei",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Dec"
      ],
      dayNames: [
        "Zondag",
        "Maandag",
        "Dinsdag",
        "Woensdag",
        "Donderdag",
        "Vrijdag",
        "Zaterdag"
      ],
      dayNamesShort: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"]
    };
    LocaleConfig.defaultLocale = "nl";
  },
  props: {
    navigation: Object
  },
  methods: {
    onChange(date) {
      this.selectedDate = date.dateString;

      axios({
        method: "GET",
        url:
          "https://wegwijs-in-zevenaar-platform-dev-pw24i.ondigitalocean.app/api/v1/activities?filter[date]=" +
          this.selectedDate
      }).then(
        result => {
          this.activities = result.data?.data ?? [];
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
    },
    getMarkedDates(date) {
      return { [date]: { selected: true, selectedColor: "blue" } };
    }
  },
  data() {
    return {
      selectedDate: null,
      item: null,
      activities: []
    };
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
.selected-date {
  width: 100%;
  margin-top: 10;
  margin-bottom: 20;
  border-radius: 15;
  overflow: hidden;
  background-color: #494c23;
  color: white;
  padding: 10;
  text-align: center;
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
