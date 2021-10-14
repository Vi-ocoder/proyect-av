<template >

<v-speed-dial
      v-model="fab"
      :direction="direction"
      :transition="transition"
    >
      <template  v-slot:activator>
        <v-btn  class="v-speed-dial"  
          v-model="fab"
          color="blue darken-2"
          dark
          fab
        >
          <v-icon v-if="fab">
            mdi-close
          </v-icon>
          <v-icon v-else>
            mdi-account-circle
          </v-icon>
        </v-btn>
      </template>
      <v-btn class="v-speed-dial"
        fab
        dark
        small
        color="grey"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn class="v-speed-dial"
        fab
        dark
        small
        color="grey"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn class="v-speed-dial"
        fab
        dark
        small
        color="grey"
        to="/profile"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    <v-btn fab to="/profile" class="v-speed-dial">
      <v-avatar size="70" rounded="circle"  >
                <v-img  :src="user.photo" ></v-img>
              </v-avatar>
              </v-btn>
    </v-speed-dial>
    
</template>
<script>
import { getByEmail } from "../../../services/UsersService";
  export default {
      props:["email"],
    data: () => ({
        user:[],
      direction: 'left',
      fab: false,
      fling: false,
      tabs: null,
      transition: 'slide-x-reverse-transition',
    }),
    mounted(){
            getByEmail(this.email)
        .then((response) => {
        //const email = sessionStorage.getItem("email");
        const users=response.data 
        this.user = users.find(element => element.email == this.email)
        })
      .catch((err) => this.user= err);
    },
  };
</script>
<style>
.v-speed-dial {
    position: fixed;
    top: 5px;
    left: 6px;
}
</style>