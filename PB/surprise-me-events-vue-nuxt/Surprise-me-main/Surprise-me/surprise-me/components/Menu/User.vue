<template>
  <b-nav-item-dropdown right>
    <!-- Using 'button-content' slot -->
    <template #button-content>
      <em>Usuario</em>
    </template>
    <!-- <b-dropdown-item href="#">Logar</b-dropdown-item> -->
    <MenuUserLogin/>
    <MenuUserCreate/>
    <b-dropdown-item href="#">Minha conta</b-dropdown-item>
    <b-dropdown-item href="#">Meus eventos criados</b-dropdown-item>
    <b-dropdown-item href="#">Minha agenda</b-dropdown-item>
  </b-nav-item-dropdown>
  
</template>

<script>
export default {
methods: {
   create: function () {
      
   }
}
};
</script>