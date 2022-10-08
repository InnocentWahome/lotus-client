<template>
  <div>
    <hero-bar>
      Deliveries
    </hero-bar>
    <section class="section is-main-section">
      <card-component
        class="has-table has-mobile-sort-spaced"
        title="All Deliveries"
      >
        <deliveries-table checkable />
      </card-component>
      <hr>
    </section>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import DeliveriesTable from '@/components/datagrids/DeliveriesTable.vue'
import CardComponent from '@/components/BaseCardComponent.vue'
import HeroBar from '@/components/BaseHeroBar.vue'

export default defineComponent({
  name: 'Deliveries',
  components: {
    HeroBar,
    CardComponent,
    DeliveriesTable
  },
  data () {
    return {
      userRole: this.$store.state.authentication.role,
      titleStack: ['Deliveries']
    }
  }
})
</script>
