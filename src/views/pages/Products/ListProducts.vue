<template>
  <div>
    <hero-bar>
      Products
    </hero-bar>
    <section class="section is-main-section">
      <card-component
        class="has-table has-mobile-sort-spaced"
        title="All Products"
        icon="radio"
      >
        <products-table checkable />
      </card-component>
    </section>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import ProductsTable from '@/components/datagrids/ProductsTable.vue'
import CardComponent from '@/components/BaseCardComponent.vue'
import HeroBar from '@/components/BaseHeroBar.vue'

export default defineComponent({
  name: 'Products',
  components: {
    HeroBar,
    CardComponent,
    ProductsTable
  },
  data () {
    return {
      titleStack: ['Products']
    }
  }
})
</script>
