<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <b-avatar
          src="..\static\surpriselogo.svg"
          class="d-inline-block align-top"
          alt="Kitten"
          style="background-color: #fff"
          to="/"
        ></b-avatar>
      </b-navbar-brand>
      <b-navbar-brand to="/">Surprise-me</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Meus Eventos</b-nav-item>
          <b-nav-item href="#">Minha Agenda</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <MenuEvents />
          <MenuUser />
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>