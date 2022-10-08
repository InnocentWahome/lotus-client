//eslint-disable vue/this-in-template
<template>
  <div>
    <modal-box
      :is-active="isModalActive"
      :trash-object-name="trashObject ? trashObject.name : null "
      @confirm="trashConfirm"
      @cancel="trashCancel"
    />
    <!-- {{ projects }} -->
    <b-table
      :checked-rows.sync="checkedRows"
      :paginated="paginated"
      :per-page="perPage"
      :data="products"
      default-sort="name"
      striped
      hoverable
    >
      <b-table-column
        v-slot="props"
        cell-class="has-no-head-mobile is-image-cell"
      >
        <div class="image">
          <img
            :src="props.row.image"
            class="is-rounded"
          >
        </div>
      </b-table-column>
      <b-table-column
        v-slot="props"
        label="Name"
        field="name"
        sortable
      >
        {{ props.row.name }}
      </b-table-column>
      <b-table-column
        v-slot="props"
        label="Description"
        field="description"
        sortable
      >
        {{ props.row.description }}
      </b-table-column>
      <b-table-column
        v-slot="props"
        label="Quantity"
        field="quantity"
        sortable
      >
        {{ props.row.quantity }}
      </b-table-column>
      <b-table-column
        v-slot="props"
        label="Price"
        field="price"
        sortable
      >
        {{ props.row.price }}
      </b-table-column>
      <section
        slot="empty"
        class="section"
      >
        <div class="content has-text-grey has-text-centered">
          <p>
            <b-icon
              icon="emoticon-sad"
              size="is-large"
            />
          </p>
          <p>Nothing's here&hellip;</p>
        </div>
      </section>
    </b-table>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mapState } from 'vuex'
import ModalBox from '@/components/BaseModalBox.vue'

export default defineComponent({
  name: 'TasksTable',
  components: { ModalBox },
  props: {
    checkable: Boolean,
    isEmpty: Boolean,
    perPage: {
      type: Number,
      default: 10
    }
  },
  data () {
    return {
      userRole: this.$store.state.authentication.role,
      checkedRows: [],
      isModalActive: false,
      trashObject: null
    }
  },

  computed: {
    paginated () {
      return this.$store.state.products.products.length > this.perPage
    },

    ...mapState({
      products: state => state.products.products
    })

  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts () {
      this.$store.dispatch('products/getAllProducts')
        .then((response) => {
          console.log(response)
        })
    },
    trashModalOpen (obj) {
      this.isModalActive = true
      this.trashObject = obj
      this.trashConfirm(obj._id)
    },
    trashConfirm (id) {
      console.log(id)
      this.$store.dispatch('products/deleteProduct', id)
      this.$buefy.snackbar.open({
        message: 'Deleted Project',
        queue: true
      })
      this.isModalActive = false
    },
    deleteItem (obj) {
      this.$store.dispatch('products/deleteProduct', obj._id)
      this.$buefy.snackbar.open({
        message: 'Deleted Project ' + obj.name,
        queue: true
      })
      this.getProducts()
    },
    trashCancel () {
      this.isModalActive = false
    }
  }
})
</script>
