<template>
  <nb-container :style="{ backgroundColor: '#939751' }">
    <nb-content padder>
      <nb-h2 class="category-title">{{ subject.title }}</nb-h2>
      <nb-text class="category-desc">{{ subject.description }}</nb-text>
      <template
        v-if="subject.post && subject.post.attributes && subject.post.attributes.children"
      >
        <template v-for="category in subject.post.attributes.children">
          <touchable-opacity
            :key="category.id"
            :onPress="
              () =>
                navigation.navigate('SubjectCategoryList', {
                  category: category,
                  subject: subject,
                })
            "
          >
            <nb-card class="news-card">
              <nb-card-item>
                <nb-body>
                  <nb-text class="post-title">{{ category.name }}</nb-text>
                </nb-body>
              </nb-card-item>
            </nb-card>
          </touchable-opacity>
        </template>
      </template>
    </nb-content>
  </nb-container>
</template>

<script>
import Header from '../../components/header'
import HTML from 'react-native-render-html'
import axios from 'axios'

export default {
  components: {
    Header,
    HTML,
  },
  props: {
    navigation: Object,
    subject: {
      type: Object,
      default() {
        return {
          id: '1',
          title: 'Onderwerp',
          description: 'Informatie over onderwep',
          post: {},
        }
      },
    },
  },
  data() {
    return {
      categories: [],
    }
  },
  mounted() {
    this.subject = this.navigation.state.params.subject ?? {
      id: '1',
      title: 'Onderwerp',
      description: 'Informatie over onderwep',
      post: {},
    }

    this.loadCategories()
  },
  watch: {
    'navigation.state.params': {
      deep: true,
      handler(newValue, oldValue) {
        this.subject = newValue.subject
        this.loadSubject()
      },
    },
  },
  methods: {
    loadCategories() {
      axios({
        method: 'GET',
        url: 'https://wegwijs-in-zevenaar-platform-dev-pw24i.ondigitalocean.app/api/v1/categories',
      }).then(
        (result) => {
          this.categories = result.data?.data ?? []
          this.loadSubject()
        },
        (error) => {
          console.error(error)
        }
      )
    },
    loadSubject() {
      if (this.categories.length === 0) {
        return
      }
      this.subject.post =
        this.categories.filter((category) => category.id == this.subject.id)[0] ?? {}
    },
    getSubString(string) {
      const LIMIT = 100
      if (string.length > LIMIT) return string.substring(0, LIMIT) + '...'
      else return string
    },
  },
}
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
