<template>
  <div>
    <v-list
      v-for="item in menuTreeItem"
      :key="item.id"
      expand
      shaped
      class="vertical-nav-menu-items pr-5"
    >
      <nav-menu-link
        v-if="item.type=='item'"
        :title="item.title"
        :to="{ name: item.routes }"
        :icon="item.icon"
        :target="item.target"
      ></nav-menu-link>
      <nav-menu-section-title
        v-if="item.type=='section'"
        v-show="isFocusDrawer"
        :title="item.title"
      ></nav-menu-section-title>
      <v-icon
        v-if="item.type=='section'"
        v-show="!isFocusDrawer"
        class="section-icon"
      >
        {{ icons.mdiMinus }}
      </v-icon>
      <nav-menu-group
        v-if="item.type=='group'"
        :title="item.title"
        :icon="item.icon"
        :level="level"
      >
        <div
          v-show="isFocusDrawer"
        >
          <NavRecursiveMenu
            :is-drawer-open.sync="isDrawerOpen"
            :is-menu-icon-open.sync="isMenuIconOpen"
            :is-focus-drawer.sync="isFocusDrawer"
            :menu-tree-item.sync="item.children"
            :level="level + 1"
            @handleMenuIconOpen="() => $emit('handleMenuIconOpen')"
            @handleFocusDrawer="() => $emit('handleFocusDrawer')"
          ></NavRecursiveMenu>
        </div>
      </nav-menu-group>
    </v-list>
  </div>
</template>

<script>
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
  mdiClose,
  mdiCircleOutline,
} from '@mdi/js'
import NavMenuSectionTitle from './NavMenuSectionTitle.vue'
import NavMenuGroup from './NavMenuGroup.vue'
import NavMenuLink from './NavMenuLink.vue'

export default {
  name: 'NavRecursiveMenu',
  components: {
    NavMenuSectionTitle,
    NavMenuGroup,
    NavMenuLink,
  },
  props: {
    isDrawerOpen: {
      type: Boolean,
      default: null,
    },
    isMenuIconOpen: {
      type: Boolean,
      default: null,
    },
    isFocusDrawer: {
      type: Boolean,
      default: null,
    },
    menuTreeItem: {
      type: Array,
      default: null,
    },
    level: {
      type: Number,
      default: null,
    },
  },
  methods: {
    mouseLeaveDrawer() {
      if (this.isMenuIconOpen) {
        this.$emit('handleFocusDrawer', false)
      }
    },
    mouseOverDrawer() {
      if (this.isMenuIconOpen) {
        this.$emit('handleFocusDrawer', true)
      }
    },
    handleMenuIconOpen() {
      this.$emit('handleMenuIconOpen')
    },
  },
  setup() {
    return {
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
        mdiClose,
        mdiCircleOutline,
      },
    }
  },
}
</script>

<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css"/>

<style lang="scss" scoped>

.app-navigation-menu .v-list-item {
    padding-left: 22px;
    margin-top: 0.375rem;
    height: 44px;
    min-height: 44px;
}
.app-navigation-menu .v-list {
    padding: 0;
}
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
