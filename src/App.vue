<template>
  <t-layout row>
    <t-aside :is-open="isOpen" :width="350" :padding-top="30" is-dark>
      <t-flex is-centered is-column>
        <t-image :src="getLogo" size="is-128x128"></t-image>
      </t-flex>
    </t-aside>
    <t-layout class="content">
      <t-header is-link>
        <t-navbar is-primary transparent :max-height="52">
          <t-navbar-items end>
            <t-navbar-burger
                    :active="isOpen"
                    @click="toggleAside"
            ></t-navbar-burger>
          </t-navbar-items>
        </t-navbar>
      </t-header>
      <t-content>
        <Home></Home>
      </t-content>
    </t-layout>
  </t-layout>
</template>
<script>
  import logo from "./assets/logo.svg";
  import Home from "@/components/Home";

  export default {
    components: { Home },
    data() {
      return {
        isOpen: false
      };
    },
    computed: {
      getLogo() {
        return logo;
      }
    },
    methods: {
      toggleAside() {
        this.isOpen = !this.isOpen;
      }
    }
  };
</script>
