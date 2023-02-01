<template>
    <div class="clavier-numero">
        <span>{{ numero }}</span>
    </div>
    <div class="clavier-name">
        <h2>{{ findContact }}</h2>
    </div>
    <div class="grid-center">
        <div class="clavier">
                <button @click="btnAddChiffre('1')">1</button>
                <button @click="btnAddChiffre('2')">2</button>
                <button @click="btnAddChiffre('3')">3</button>
                <button @click="btnAddChiffre('4')">4</button>
                <button @click="btnAddChiffre('5')">5</button>
                <button @click="btnAddChiffre('6')">6</button>
                <button @click="btnAddChiffre('7')">7</button>
                <button @click="btnAddChiffre('8')">8</button>
                <button @click="btnAddChiffre('9')">9</button>
                <button @click="btnAddChiffre('*')">*</button>
                <button @click="btnAddChiffre('0')">0</button>
                <button @click="btnAddChiffre('#')">#</button>
        </div>
    </div>
    <Phone @click="DateCall"/>
</template>
<script>
import Phone from '@/components/Phone.vue'
export default {
    name: 'ClavierView',
    data() {
        return {
            numero: '',
            date: '',
            phoneCall: {
                numero: '',
                date: '',
                name: ''
            }
        }
    },
    components: {
        Phone
    },
    computed: {
        findContact() {
            let check = this.$store.state.contact.find(contact => contact.numero == this.numero)
            return check?check.name: "inconnu"
        }

    },
    methods: {

        btnAddChiffre(nombre) {
            if (this.numero.length == 14) return
            this.numero += nombre
            if (this.numero.length == 2 ||  this.numero.length == 5 || this.numero.length == 8 || this.numero.length == 11) {
                this.numero += ' '
            }
        },

        DateCall() {
        const current = new Date();
        this.date = `le ${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()} à${current.toLocaleString().slice(10,16).replace(':','h')}`

        this.phoneCall.numero = this.numero
        this.phoneCall.name = this.findContact
        this.phoneCall.date = this.date

        this.$store.commit('phoneCall', this.phoneCall)
    } 


    }
}
</script>
<style scoped>

    .clavier-numero {
        padding: 2em;
        margin-top: 2em;
        margin-bottom: 2em;
        border: solid 2px #f97316;
        text-align: center;
        margin-left: 38em;
        margin-right: 38em;
    }

    .clavier-name {
        border-bottom: 2px solid #f97316;
        margin-left: 38em;
        margin-right: 38em;
        margin-bottom: 2em;
        margin-top: 2em;
    }
    .clavier{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1em;
    }
    
    .clavier button {
        padding: 2em;
        background-color: #333333;
        color: white;
    }

    .grid-center {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 2em;
    }

    span {
        color: white;
        font-size: 18px;
    }

</style>