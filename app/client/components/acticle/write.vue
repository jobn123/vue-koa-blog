<template>
  <div>
    <div class="" style="width:100%">
      <div class="" style="float: left; width:60%">
        <div class="" style="float: left">
          <span>title</span><input type="text" name="title" value="">
        </div>
        <div class="" style="float: right">
          <span>tag</span><input type="text" name="tag" value="">
        </div>
      </div>
      <div class="" style="float: right; width: 25%" v-on:click=" postAction">post</div>
    </div>
    <div id="editor" class="markdown-body">
      <textarea :value="input" @input="update"></textarea>
      <div v-html="compiledMarkdown" id="editorHtml"></div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import marked from 'marked'
import 'whatwg-fetch'
require('github-markdown-css')

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
    }, 300),
    postAction: function() {
      fetch('http://localhost:5000/articles',{
        // method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        cache: 'default',
        mode:'cors'
      }).then(function(data){
        debugger
      })
    }
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
    background-color: aliceblue
    /*font-size: 0.2rem;*/
  }
</style>
