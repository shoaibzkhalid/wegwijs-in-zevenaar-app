<template>
  <nb-container :style="{ backgroundColor: '#939751' }">
    <header
      :navigation="navigation"
      back="SubjectCategoryList"
      :back-params="{ subject: subject, category: category }"
    />
    <nb-content padder>
      <template>
        <nb-h2 class="category-title">{{ subject.title }} - {{ category.name }} - {{ tag.name }}</nb-h2>
      </template>
      <template v-if="organizations.length > 0">
        <touchable-opacity
          v-for="organization in organizations"
          :key="organization.id"
          :onPress="
            () =>
              navigation.navigate('OrganizationDetail', {
                parentScreen: 'SubjectCategoryTagList',
                parent: {
                  category: category,
                  subject: subject,
                  tag: tag
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
    tag: {
      type: Object,
      default() {
        return {
          id: "1",
          title: "Onderwerp",
          description: "Informatie over onderwep",
          children: []
        };
      }
    }
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
    this.tag = this.navigation.state.params.tag ?? {
      id: "1",
      title: "Onderwerp",
      description: "Informatie over onderwep",
      children: []
    };
    this.loadOrganizations();
  },
  watch: {
    "navigation.state.params": {
      deep: true,
      handler(newValue, oldValue) {
        this.category = newValue.category;
        this.subject = newValue.subject;
        this.tag = newValue.tag;
        this.loadOrganizations();
      }
    }
  },
  methods: {
    loadOrganizations() {
      axios({
        method: "GET",
        url:
          "https://wegwijs-in-zevenaar-platform-dev-pw24i.ondigitalocean.app/api/v1/organizations?filter[category]=" +
          this.tag.id
      }).then(
        result => {
          this.organizations = result.data?.data ?? [];
        },
        error => {
          console.error(error);
        }
      );
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
