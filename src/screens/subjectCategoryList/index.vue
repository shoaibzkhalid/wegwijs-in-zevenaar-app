<template>
  <nb-container :style="{ backgroundColor: '#939751' }">
    <header
      :navigation="navigation"
      back="SubjectList"
      :back-params="{ subject: subject }"
    />
    <nb-content padder>
      <template>
        <nb-h2 class="category-title">{{ subject.title }} - {{ category.name }}</nb-h2>
        <nb-text class="category-desc" v-if="category.short_description">{{ category.short_description }}</nb-text>
      </template>
      <template v-if="category.children.length > 0">
        <nb-grid style="margin-bottom: 15;">
          <nb-row v-for="chunk in chunkedTags">
            <nb-col v-for="tag in chunk" :key="tag.id">
              <touchable-opacity
                :onPress="
                  () =>
                    navigation.navigate('SubjectCategoryTagList', {
                      category: category,
                      subject: subject,
                      tag: tag
                    })
                "
              >
                <nb-card class="tag-card">
                  <nb-card-item>
                    <nb-body>
                      <nb-text class="post-title">{{ tag.name }}</nb-text>
                    </nb-body>
                  </nb-card-item>
                </nb-card>
              </touchable-opacity>
            </nb-col>
          </nb-row>
        </nb-grid>
      </template>
      <template>
        <nb-h3 class="category-title">
          Organisaties
        </nb-h3>
      </template>
      <template v-if="organizations.length > 0">
        <touchable-opacity
          v-for="organization in organizations"
          :key="organization.id"
          :onPress="
            () =>
              navigation.navigate('OrganizationDetail', {
                parentScreen: 'SubjectCategoryList',
                parent: {
                  category: category,
                  subject: subject
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
import Header from "../../components/header";
import HTML from "react-native-render-html";
import axios from "axios";

export default {
  components: {
    Header,
    HTML
  },
  props: {
    navigation: Object,
    subject: {
      type: Object,
      default() {
        return {
          id: "1",
          title: "Onderwerp",
          description: "Informatie over onderwep",
          post: {}
        };
      }
    },
    category: {
      type: Object,
      default() {
        return {
          id: "1",
          title: "Onderwerp",
          description: "Informatie over onderwep",
          children: []
        };
      }
    },
    chunkedTags: Array
  },
  data() {
    return {
      organizations: []
    };
  },
  mounted() {
    this.subject = this.navigation.state.params.subject ?? {
      id: "1",
      title: "Onderwerp",
      description: "Informatie over onderwep",
      post: {}
    };
    this.category = this.navigation.state.params.category ?? {
      id: "1",
      title: "Onderwerp",
      description: "Informatie over onderwep",
      children: []
    };
    this.chunkedTags = this.chunkArray(this.category.children ?? [], 2);
    this.loadOrganizations();
  },
  watch: {
    "navigation.state.params": {
      deep: true,
      handler(newValue, oldValue) {
        this.category = newValue.category;
        this.chunkedTags = this.chunkArray(this.category.children ?? [], 2);
        this.subject = newValue.subject;
        this.loadOrganizations();
      }
    }
  },
  methods: {
    chunkArray(arr, size) {
      return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
      );
    },
    loadOrganizations() {
      axios({
        method: "GET",
        url:
          "https://wegwijs-in-zevenaar-platform-dev-pw24i.ondigitalocean.app/api/v1/organizations?filter[category]=" +
          this.category.id
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
