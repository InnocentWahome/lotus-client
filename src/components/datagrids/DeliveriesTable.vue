<template>
  <div>
    <modal-box
      :is-active="isModalActive"
      :trash-object-name="trashObject ? trashObject.name : null "
      @confirm="trashConfirm"
      @cancel="trashCancel"
    />
    <!-- :checkable="checkable" -->
    <b-table
      :checked-rows.sync="checkedRows"
      :paginated="paginated"
      :per-page="perPage"
      :data="deliveries"
      default-sort="name"
      striped
      hoverable
    >
      <b-table-column
        v-slot="props"
        label="ID"
        field="id"
        sortable
      >
        {{ props.row.id }}
      </b-table-column>
      <b-table-column
        v-slot="props"
        label="Order ID"
        field="order_id"
        sortable
      >
        {{ props.row.order_id }}
      </b-table-column>
      <b-table-column
        v-slot="props"
        label="User ID"
        field="user_id"
        sortable
      >
        {{ props.row.user_id }}
      </b-table-column>
      <b-table-column
        v-slot="props"
        label="Payment Status"
        field="payment_status"
        sortable
      >
        {{ props.row.payment_status > 0 ? " Paid" : "Not Paid" }}
      </b-table-column>
      <b-table-column
        v-slot="props"
        label="Dispatch Status"
        field="dispatch_status"
        sortable
      >
        {{ props.row.dispatch_status > 0 ? " Dispatched" : "Not Dispatched" }}
      </b-table-column>
      <b-table-column
        v-slot="props"
        label="Delivery Status"
        field="delivery_status"
        sortable
      >
        {{ props.row.delivery_status > 0 ? " Delivered" : "Not Delivered" }}
      </b-table-column>
      <b-table-column
        v-slot="props"
        custom-key="actions"
        cell-class="is-actions-cell"
      >
        <div
          v-if="userRole == 'Super-Admin' || userRole == 'Seller'"
          class="buttons is-right no-wrap"
        >
          <router-link
            :to="{name:'admin-deliveries.edit', params: {id: props.row._id}}"
            class="button is-small is-info"
          >
            <b-icon
              icon="account-edit"
              size="is-small"
            />
          </router-link>
          <b-button
            type="is-danger"
            size="is-small"
            @click="deleteItem(props.row)"
          >
            <b-icon
              icon="trash-can"
              size="is-small"
            />
          </b-button>
        </div>
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
  name: 'DeliveriesTable',
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
      checkedRows: [],
      isModalActive: false,
      trashObject: null
    }
  },

  computed: {
    paginated () {
      return this.$store.state.deliveries.deliveries.length > this.perPage
    },

    ...mapState({
      deliveries: state => state.deliveries.deliveries
    })

  },
  created () {
    this.getDeliveries()
  },
  methods: {
    getDeliveries () {
      this.$store.dispatch('deliveries/getAllDeliveries')
    },
    trashModalOpen (obj) {
      this.trashObject = obj
      this.isModalActive = true
    },
    trashConfirm () {
      this.isModalActive = false

      this.$buefy.snackbar.open({
        message: 'Confirmed',
        queue: false
      })
    },
    trashCancel () {
      this.isModalActive = false
    },
    deleteItem (obj) {
      this.$store.dispatch('deliveries/deleteDelivery', obj._id)
      this.$buefy.snackbar.open({
        message: 'Deleted Deliveries ' + obj.firstName,
        queue: true
      })
      this.$store.dispatch('deliveries/getAllDeliveries')
      this.getDeliveries()
    }
  }
})
</script>
