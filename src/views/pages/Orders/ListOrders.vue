<template>
  <div>
    <title-bar
      :title-stack="titleStack"
    />
    <hero-bar>
      Orders
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
          <b>Done with an order?</b> You can now mark it as Complete or Terminated if you're completely done with it
        </div>
      </notification>

      <card-component
        class="has-table has-mobile-sort-spaced"
        title="All Orders"
        icon="account-multiple"
      >
        <orders-table checkable />
      </card-component>
    </section>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import Notification from '@/components/BaseNotification.vue'
import OrdersTable from '@/components/datagrids/OrdersTable.vue'
import CardComponent from '@/components/BaseCardComponent.vue'
import TitleBar from '@/components/BaseTitleBar.vue'
import HeroBar from '@/components/BaseHeroBar.vue'

export default defineComponent({
  name: 'Orders',
  components: {
    HeroBar,
    TitleBar,
    CardComponent,
    OrdersTable,
    Notification
  },
  data () {
    return {
      userRole: this.$store.state.authentication.role,
      titleStack: ['Orders']
    }
  }
})
</script>
