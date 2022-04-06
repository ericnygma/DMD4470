const { required, maxLength, email } = validators
const validationMixin = vuelidate.validationMixin

Vue.use(vuelidate.default)

new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  mixins: [validationMixin],

  validations: {
    fristName: { required, maxLength: maxLength(20) },
    lastName: { required, maxLength: maxLength(20) },
    phoneNumber: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
  },

  data: () => ({
          firstName: '',
          lastName: '',
          phoneNumber: '',
          email: '',
          notes: '',
          select: null,
          groups: [
            'Personal',
            'Business',
        ],
    
  }),

  computed: {
    selectErrors () {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Item is required')
      return errors
    },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
  },

  methods: {
    submit () {
      this.$v.$touch()
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    },
  },
})