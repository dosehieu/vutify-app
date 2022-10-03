<template>
  <v-navigation-drawer
    :value="isDrawerOpen"
    app
    floating
    :width="260"
    :class="`app-navigation-menu ${isIconMenuOpen ? 'icon-menu-open' : '' }`"
    :right="$vuetify.rtl"
    @input="val => $emit('update:is-drawer-open', val)"
  >
    <div
      class="h-full"
      @mouseleave="mouseLeaveDrawer"
      @mouseenter="mouseOverDrawer"
    >
      <!-- Navigation Header -->
      <div
        class="vertical-nav-header d-flex justify-space-between items-center ps-6 pe-5 pt-5 pb-2"
      >
        <router-link
          to="/"
          class="d-flex align-center text-decoration-none"
        >
          <v-img
            :src="require('@/assets/images/logos/logo.svg')"
            max-height="30px"
            max-width="30px"
            alt="logo"
            contain
            eager
            class="app-logo me-3"
          ></v-img>
          <v-slide-x-transition>
            <h2
              v-show="focusDrawer"
              class="app-title text--primary"
            >
              MATERIO
            </h2>
          </v-slide-x-transition>
        </router-link>
        <v-btn
          icon
          :class="`d-none d-lg-block ms-3 icon-scale ${isIconMenuOpen ? 'icon-reverse' : ''}`"
          @click="handleIconMenuOpen"
        >
          <v-icon>
            {{ icons.mdiChevronDoubleRight }}
          </v-icon>
        </v-btn>
      </div>
      <perfect-scrollbar>
        <!-- Navigation Items -->
        <v-list
          expand
          shaped
          class="vertical-nav-menu-items pr-5"
        >
          <nav-menu-link
            title="Dashboard"
            :to="{ name: 'dashboard' }"
            :icon="icons.mdiHomeOutline"
          ></nav-menu-link>
          <nav-menu-link
            title="Account Settings"
            :to="{ name: 'pages-account-settings'}"
            :icon="icons.mdiAccountCogOutline"
          ></nav-menu-link>
          <nav-menu-group
            title="Pages"
            :icon="icons.mdiFileOutline"
            class="group-level-1"
          >
            <div
              v-show="focusDrawer"
            >
              <nav-menu-link
                title="Login"
                :to="{ name: 'pages-login' }"
                target="_blank"
              ></nav-menu-link>
              <nav-menu-link
                title="Register"
                :to="{ name: 'pages-register' }"
                target="_blank"
              ></nav-menu-link>
              <nav-menu-link
                title="Error"
                :to="{ name: 'error-404' }"
                target="_blank"
              ></nav-menu-link>
              <nav-menu-group
                title="Pages"
                :icon="icons.mdiFileOutline"
                class="group-level-2"
              >
                <div
                  v-show="focusDrawer"
                >
                  <nav-menu-link
                    title="Login"
                    :to="{ name: 'pages-login' }"
                    target="_blank"
                  ></nav-menu-link>
                  <nav-menu-link
                    title="Register"
                    :to="{ name: 'pages-register' }"
                    target="_blank"
                  ></nav-menu-link>
                  <nav-menu-link
                    title="Error"
                    :to="{ name: 'error-404' }"
                    target="_blank"
                  ></nav-menu-link>
                </div>
              </nav-menu-group>
            </div>
          </nav-menu-group>
          <nav-menu-section-title
            v-show="focusDrawer"
            title="USER INTERFACE"
          ></nav-menu-section-title>
          <v-icon
            v-show="!focusDrawer"
            class="section-icon"
          >
            {{ icons.mdiMinus }}
          </v-icon>
          <nav-menu-link
            title="Typography"
            :to="{ name: 'typography' }"
            :icon="icons.mdiAlphaTBoxOutline"
          ></nav-menu-link>
          <nav-menu-link
            title="Icons"
            :to="{ name: 'icons' }"
            :icon="icons.mdiEyeOutline"
          ></nav-menu-link>
          <nav-menu-link
            title="Cards"
            :to="{ name: 'cards' }"
            :icon="icons.mdiCreditCardOutline"
          ></nav-menu-link>
          <nav-menu-link
            title="Tables"
            :to="{ name: 'simple-table' }"
            :icon="icons.mdiTable"
          ></nav-menu-link>
          <nav-menu-link
            title="Form Layouts"
            :to="{ name: 'form-layouts' }"
            :icon="icons.mdiFormSelect"
          ></nav-menu-link>
          <nav-menu-link
            title="Typography"
            :to="{ name: 'typography' }"
            :icon="icons.mdiAlphaTBoxOutline"
          ></nav-menu-link>
          <nav-menu-link
            title="Icons"
            :to="{ name: 'icons' }"
            :icon="icons.mdiEyeOutline"
          ></nav-menu-link>
          <nav-menu-link
            title="Cards"
            :to="{ name: 'cards' }"
            :icon="icons.mdiCreditCardOutline"
          ></nav-menu-link>
          <nav-menu-link
            title="Tables"
            :to="{ name: 'simple-table' }"
            :icon="icons.mdiTable"
          ></nav-menu-link>
          <nav-menu-link
            title="Form Layouts"
            :to="{ name: 'form-layouts' }"
            :icon="icons.mdiFormSelect"
          ></nav-menu-link>
          <nav-menu-link
            title="Typography"
            :to="{ name: 'typography' }"
            :icon="icons.mdiAlphaTBoxOutline"
          ></nav-menu-link>
          <nav-menu-link
            title="Icons"
            :to="{ name: 'icons' }"
            :icon="icons.mdiEyeOutline"
          ></nav-menu-link>
          <nav-menu-link
            title="Cards"
            :to="{ name: 'cards' }"
            :icon="icons.mdiCreditCardOutline"
          ></nav-menu-link>
          <nav-menu-link
            title="Tables"
            :to="{ name: 'simple-table' }"
            :icon="icons.mdiTable"
          ></nav-menu-link>
          <nav-menu-link
            title="Form Layouts"
            :to="{ name: 'form-layouts' }"
            :icon="icons.mdiFormSelect"
          ></nav-menu-link>
          <nav-menu-link
            title="Form Layouts"
            :to="{ name: 'form-layouts' }"
            :icon="icons.mdiFormSelect"
          ></nav-menu-link>
          <nav-menu-link
            title="Form Layouts"
            :to="{ name: 'form-layouts' }"
            :icon="icons.mdiFormSelect"
          ></nav-menu-link>
        </v-list>
      </perfect-scrollbar>
    </div>
  </v-navigation-drawer>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { ref } from '@vue/composition-api'
import {
  mdiHomeOutline,
  mdiAlphaTBoxOutline,
  mdiEyeOutline,
  mdiCreditCardOutline,
  mdiTable,
  mdiFileOutline,
  mdiFormSelect,
  mdiAccountCogOutline,
  mdiChevronDoubleRight,
  mdiChevronDoubleLeft,
  mdiMinus,
} from '@mdi/js'
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import NavMenuSectionTitle from './components/NavMenuSectionTitle.vue'
import NavMenuGroup from './components/NavMenuGroup.vue'
import NavMenuLink from './components/NavMenuLink.vue'

export default {
  components: {
    NavMenuSectionTitle,
    NavMenuGroup,
    NavMenuLink,
    PerfectScrollbar,
  },
  props: {
    isDrawerOpen: {
      type: Boolean,
      default: null,
    },
    isIconMenuOpen: {
      type: Boolean,
      default: null,
    },
  },
  methods: {
    mouseLeaveDrawer() {
      if (this.isIconMenuOpen) {
        this.focusDrawer = false
      }
    },
    mouseOverDrawer() {
      if (this.isIconMenuOpen) {
        this.focusDrawer = true
      }
    },
    handleIconMenuOpen() {
      this.$emit('handleIconMenuOpen')
    },
  },
  setup() {
    const focusDrawer = ref(true)

    return {
      focusDrawer,
      icons: {
        mdiHomeOutline,
        mdiAlphaTBoxOutline,
        mdiEyeOutline,
        mdiCreditCardOutline,
        mdiTable,
        mdiFileOutline,
        mdiFormSelect,
        mdiAccountCogOutline,
        mdiChevronDoubleRight,
        mdiChevronDoubleLeft,
        mdiMinus,
      },
    }
  },
}
</script>

<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css"/>

<style lang="scss" scoped>
.icon-menu-open {
  width: 85px !important;
}
.icon-menu-open:hover {
  width: 260px !important;
}
.app-navigation-menu .group-level-1 .v-list-item {
  padding-left: 40px;
}
.app-navigation-menu .group-level-2{
  padding-left: 20px;
}
.app-navigation-menu .group-level-2 .v-list-item {
  padding-left: 45px;
}
.app-title {
  font-size: 1.25rem;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.3px;
}
.ps {
  height: 92%;
}
.section-icon{
  padding-left: 22px;
  padding-top: 32px;
  padding-bottom: 10px;
  color: #bdb4c9ad;
}
.icon-reverse{
  transform: rotate(-180deg);
}
// ? Adjust this `translateX` value to keep logo in center when vertical nav menu is collapsed (Value depends on your logo)
.app-logo {
  transition: all 0.18s ease-in-out;
  .v-navigation-drawer--mini-variant & {
    transform: translateX(-4px);
  }
}
.v-navigation-drawer {
  border-right: 1px dashed rgba(94, 86, 105, 0.14);
}
.v-navigation-drawer--is-mobile{
  border-right: none;
}

@include theme(app-navigation-menu) using ($material) {
  background-color: map-deep-get($material, 'background');
}

.app-navigation-menu {
  .v-list-item {
    &.vertical-nav-menu-link {
      ::v-deep .v-list-item__icon {
        .v-icon {
          transition: none !important;
        }
      }
    }
  }
}

// You can remove below style
// Upgrade Banner
.app-navigation-menu {
  .upgrade-banner {
    position: absolute;
    bottom: 13px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
