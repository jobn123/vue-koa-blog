<template>

  <div id="editor" class="markdown-body">
    <h1>
      Write Your World !
    </h1>
    <textarea :value="input" @input="update"></textarea>
    <div v-html="compiledMarkdown" id="editorHtml"></div>
  </div>

</template>

<script>
import _ from 'lodash'
import marked from 'marked'
require('github-markdown-css')
// import VueMarkdown from 'vue-markdown'

export default {
  name: 'write',
  data() {
    return {
      input: '# hello'
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true })
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 300)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  textarea, #editor div {
    display: inline-block;
    width: 49%;
    height: 9.375rem;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 20px;
    overflow: scroll;
  }

  textarea {
    border: none;
    border-right: 1px solid #ccc;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
    padding: 20px;
  }
  h1 {
    text-align: center;
  }

  #editorHtml {
    /*font-size: 0.2rem;*/
  }
</style>
