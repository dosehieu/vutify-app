<template>
  <v-app>
    <vertical-nav-menu
      :is-drawer-open.sync="isDrawerOpen"
      :is-menu-icon-open.sync="isMenuIconOpen"
      :is-focus-drawer.sync="isFocusDrawer"
      :menu-tree-item.sync="menuTreeItem"
      @handleMenuIconOpen="isMenuIconOpen = !isMenuIconOpen"
      @handleFocusDrawer="(val) => { isFocusDrawer = val}"
    ></vertical-nav-menu>

    <v-app-bar
      app
      flat
      absolute
      color="transparent"
      :class="isMenuIconOpen ? 'app-bar-icon-menu-open' : ''"
    >
      <div class="boxed-container w-full">
        <div class="d-flex align-center mx-6">
          <!-- Left Content -->
          <v-app-bar-nav-icon
            class="d-block d-lg-none me-2"
            @click="isDrawerOpen = !isDrawerOpen"
          ></v-app-bar-nav-icon>
          <v-text-field
            rounded
            dense
            outlined
            :prepend-inner-icon="icons.mdiMagnify"
            class="app-bar-search flex-grow-0"
            hide-details
          ></v-text-field>

          <v-spacer></v-spacer>

          <!-- Right Content -->
          <a
            href="https://github.com/themeselection/materio-vuetify-vuejs-admin-template-free"
            target="_blank"
            rel="nofollow"
            class="icon-scale"
          >
            <v-icon class="ms-6 me-4">
              {{ icons.mdiGithub }}
            </v-icon>
          </a>
          <theme-switcher class="icon-scale"></theme-switcher>
          <v-btn
            icon
            small
            class="ms-3 icon-scale"
          >
            <v-icon>
              {{ icons.mdiBellOutline }}
            </v-icon>
          </v-btn>
          <app-bar-user-menu></app-bar-user-menu>
        </div>
      </div>
    </v-app-bar>

    <v-main :class="isMenuIconOpen ? 'main-icon-menu-open' : ''">
      <div class="app-content-container boxed-container pa-6">
        <v-breadcrumbs
          :items="items"
          class="pt-0"
        ></v-breadcrumbs>
        <slot></slot>
      </div>
    </v-main>

    <v-footer
      app
      inset
      color="transparent"
      absolute
      height="56"
      class="px-0"
    >
      <div class="boxed-container w-full">
        <div class="mx-6 d-flex justify-space-between">
          <span>
            &copy; 2021 <a
              href="https://themeselection.com"
              class="text-decoration-none"
              target="_blank"
            >ThemeSelection</a></span>
          <span class="d-sm-inline d-none">
            <a
              href="https://themeselection.com/products/category/download-free-admin-templates/"
              target="_blank"
              class="me-6 text--secondary text-decoration-none"
            >Freebies</a>
            <a
              href="https://themeselection.com/blog/"
              target="_blank"
              class="me-6 text--secondary text-decoration-none"
            >Blog</a>
            <a
              href="https://github.com/themeselection/materio-vuetify-vuejs-admin-template-free/blob/main/LICENSE"
              target="_blank"
              class="text--secondary text-decoration-none"
            >MIT Licence</a>
          </span>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiMagnify, mdiBellOutline, mdiGithub } from '@mdi/js'
import VerticalNavMenu from './components/vertical-nav-menu/VerticalNavMenu.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import AppBarUserMenu from './components/AppBarUserMenu.vue'
import menuTree from './menuTree'

export default {
  components: {
    VerticalNavMenu,
    ThemeSwitcher,
    AppBarUserMenu,
  },
  data: () => ({
    items: [
      {
        text: 'Home',
        disabled: false,
        href: 'dashboard',
      },
      {
        text: 'Typography',
        disabled: true,
        href: 'typography',
      },
    ],
  }),
  setup() {
    const isDrawerOpen = ref(null)
    const isMenuIconOpen = ref(null)
    const isFocusDrawer = ref(true)
    const largeScreen = ref(1263)
    const menuTreeItem = ref(menuTree)

    return {
      isDrawerOpen,
      isMenuIconOpen,
      largeScreen,
      isFocusDrawer,
      menuTreeItem,

      // Icons
      icons: {
        mdiMagnify,
        mdiBellOutline,
        mdiGithub,
      },
    }
  },
  created() {
    window.addEventListener('resize', this.myEventHandler)
  },
  destroyed() {
    window.removeEventListener('resize', this.myEventHandler)
  },
  methods: {
    myEventHandler() {
      if (window.innerWidth < this.largeScreen) {
        this.isMenuIconOpen = false
        this.isFocusDrawer = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.v-app-bar ::v-deep {
  .v-toolbar__content {
    padding: 0;

    .app-bar-search {
      .v-input__slot {
        padding-left: 18px;
      }
    }
  }
  backdrop-filter: blur(6px);
  position: fixed !important;
  height: 80px !important;
  margin-top: 15px !important;
}

@include theme(v-app-bar) using ($material){
  background-color: map-deep-get($material, 'backdrop');
}
.v-app-bar--is-scrolled{
  height: 64px !important;
  margin-top: 0px !important;
  transition: 200ms;
}
.app-content-container{
  padding-top: 32px !important;
}

.boxed-container {
  margin-left: auto;
  margin-right: auto;
}
.main-icon-menu-open{
  padding: 64px 0px 56px 85px !important;
}
.app-bar-icon-menu-open{
  left: 85px !important
;
}
</style>
