<template>

    <form class="form-contact" @submit.prevent="ajoutContact">
        <input type="text" placeholder="Name..." v-model="formContact.name">
        <input type="text" placeholder="Numero..." v-model="formContact.numero" @keypress="formNumero()" maxlength="14">
        <button type="submit">Ajouter</button>
    </form>
</template>
<script>
export default {
    name: 'FormContactView',
    data() {
        return {
            formContact: {
                name: '',
                numero: ''
            }
        }
    },
    computed: {
        ContactExist() {
      let Exist = this.$store.state.contact.find(contact => contact.numero == this.formContact.numero)
      if (Exist) {
        return false
      } else {
        return true
      }
    }
    },
    methods: {
        ajoutContact() {
            if (this.ContactExist) {
                if (this.formContact.name == '' || this.formContact.numero.length != 14) return
            this.$store.commit('ajoutContact', this.formContact)
            this.formContact = {
                name: '',
                numero: ''
            }
            }
        },

        formNumero() {
            if (this.formContact.numero.length == 2 ||  this.formContact.numero.length == 5 || this.formContact.numero.length == 8 || this.formContact.numero.length == 11) {
                this.formContact.numero += ' '
            }
        }
    }
}
</script>
<style scoped>
    .form-contact {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1em;
    }

    input {
        background-color: black;
        color: white;
        border: none;
        padding: 10px;
    }

    button {
        background-color: #474747;
        color: white;
        border: none;
        padding: 10px;
    }
</style>