<template>
  <t-hero
    :title="title"
    :description="description"
    :img="getLogo"
    is-fullheight
    is-dark
    linear
  >
    <template slot="action">
      <t-button
        href="http://www.thisvui.com"
        target="_blank"
        rel="noopener"
        icon="fas fa-file"
        is-success
        is-inline-flex
      >
        Docs
      </t-button>
      <t-button
        href="https://github.com/thisvui/thisvui"
        target="_blank"
        rel="noopener"
        icon="fab fa-github"
        is-dark
        is-inline-flex
      >
        GitHub
      </t-button>
    </template>
  </t-hero>
</template>
<script>
import logo from "../assets/logo.svg";

export default {
  name: "Home",
  data() {
    return {
      title: `Welcome!`,
      description: `Welcome to Your ThisVui App. Check the docs for a guide and recipes on how to build amazing UI.`
    };
  },
  computed: {
    getLogo() {
      return logo;
    }
  }
};
</script>
