<template>
  <router-link to="/form"><button>+</button></router-link>
    <div class="contact" v-for="contact in contacts" :key="contact.name">
      <CarteContact :contact="contact" @click="DateCall(contact.name, contact.numero)"/>
    </div>
</template>
<script>
import CarteContact from '@/components/CarteContact.vue'
export default {
  name: 'ContactView',
  components: {
    CarteContact
  },
  computed: {
    contacts() {
            return this.$store.state.contact
        }
  },
  data() {
    return {
      phoneCall: {
                numero: '',
                date: '',
                name: ''
            }
    }
  },
  methods: {
    DateCall(name, numero) {
        const current = new Date();
        this.date = `le ${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} à${current.toLocaleString().slice(10,16).replace(':','h')}`

        this.phoneCall.name = name
        this.phoneCall.numero = numero
        this.phoneCall.date = this.date

        this.$store.commit('phoneCall', this.phoneCall)
    } 
  }
}
</script>
<style scoped>
  button {
    background-color: #171717;
    border: 1px white solid;
    border-radius: 100%;
    color: white;
    font-size: 24px;
  }

</style>
