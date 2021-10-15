<template>
  
      <user-views :user="user" :root="outRoot"/>

</template>

<script>
import { getAllUsers } from "../../services/UsersService"; //trae los datos desde la BD
import UserViews from '../../components/Profile/UserViews.vue';
export default {
  components: {
    UserViews,
  },
  data: () => ({
    outRoot:"profile",//envia este dato a los componentes
    user: [],
  }),
  watch: {},
  mounted() {
    //este mounted trae los datos de cada usuario desde una base de datos en mongo
    getAllUsers()
      .then((response) => {
        const email = sessionStorage.getItem("email");
        const users=response.data 
        this.user = users.find(element => element.email == email)
        })
      .catch((err) => console.error(err));
  },
  methods: {
  },
};
</script>
<style>
</style>