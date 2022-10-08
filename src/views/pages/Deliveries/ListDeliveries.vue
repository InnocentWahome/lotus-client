<template>
  <div>
    <title-bar
      :title-stack="titleStack"
    />
    <hero-bar>
      Deliveries
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
          <b>Hurray! </b> Anyone can now assign a delivery to themselves!
        </div>
      </notification>

      <card-component
        class="has-table has-mobile-sort-spaced"
        title="All Available Deliveries"
        icon="account-multiple"
      >
        <deliveries-table checkable />
      </card-component>
      <hr>
    </section>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import Notification from '@/components/BaseNotification.vue'
import DeliveriesTable from '@/components/datagrids/DeliveriesTable.vue'
import CardComponent from '@/components/BaseCardComponent.vue'
import TitleBar from '@/components/BaseTitleBar.vue'
import HeroBar from '@/components/BaseHeroBar.vue'

export default defineComponent({
  name: 'Deliveries',
  components: {
    HeroBar,
    TitleBar,
    CardComponent,
    DeliveriesTable,
    Notification
  },
  data () {
    return {
      userRole: this.$store.state.authentication.role,
      titleStack: ['Deliveries']
    }
  }
})
</script>
