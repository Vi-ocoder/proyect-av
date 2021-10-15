<template>
  <div>
    <v-col cols=12>
      <calendario />
    </v-col>
  </div>
</template>
<script>
import Calendario from '../Calendario.vue'
  export default {
  components: { Calendario,  },
    data () {
      return {
        dialogRes:false,
      }
    },
    methods:{
    },
  };
</script>