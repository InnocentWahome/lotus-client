<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar>
      Products
      <router-link
        slot="right"
        to="/dashboard"
        class="button"
      >
        Dashboard
      </router-link>
    </hero-bar>
    <section class="section is-main-section">
      <notification class="is-info">
        <div>
          <b-icon
            icon="buffer"
            custom-size="default"
          />
          <b>Add to your organization better team members  </b>
        </div>
      </notification>

      <card-component
        class="has-table has-mobile-sort-spaced"
        title="All Users"
        icon="account-multiple"
      >
        <products-table checkable />
      </card-component>
    </section>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import Notification from '@/components/BaseNotification.vue'
import ProductsTable from '@/components/datagrids/ProductsTable.vue'
import CardComponent from '@/components/BaseCardComponent.vue'
import TitleBar from '@/components/BaseTitleBar.vue'
import HeroBar from '@/components/BaseHeroBar.vue'

export default defineComponent({
  name: 'Products',
  components: {
    HeroBar,
    TitleBar,
    CardComponent,
    ProductsTable,
    Notification
  },
  data () {
    return {
      titleStack: ['Products']
    }
  }
})
</script>
