<template>
  <div class="flex-div">
    <div class="flex-journal" v-for="call in calls" :key="call.date">
      <h2>
      <span class="numero" v-if="call.name == 'inconnu'">{{ call.numero }}</span>
      <span class="numero" v-else>{{ call.name }}</span>
      </h2>
      <h2 class="date">{{ call.date }}</h2>
      <Phone @click="DateCall(call.name, call.numero)"/>
    </div>
  </div>
</template>
<script>
import Phone from '../components/Phone.vue'
export default {
  name: 'JournalView',
  components: {
    Phone
  },
  props: [
      'call'
  ],
  computed: {
  calls() {
        return this.$store.state.call
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
<style>
  .date {
    color: white;
    font-weight: 100;
    font-size: 20px;
  }

  .numero {
    color: gray;
    font-weight: 100;
  }

  .flex-journal {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    border-bottom: 1px solid black;
    margin-bottom: 13px;
    gap: 10em;
    padding-left: 1em;
    padding-right: 1em;
  }

  img {
    height: 20px;
    width: 20px;
  }

  .flex-div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>
