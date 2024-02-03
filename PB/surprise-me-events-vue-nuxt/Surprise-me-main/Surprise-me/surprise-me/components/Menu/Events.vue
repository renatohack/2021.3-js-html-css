  <template>
  <b-nav-item-dropdown right>
    <template #button-content>
      <em>Evento</em>
    </template>
    <MenuEventsCreate/>
    <b-dropdown-item href="#">Próximos de você</b-dropdown-item>
    <b-dropdown-item href="#">Mais baratos</b-dropdown-item>
    <b-dropdown-item href="#">Filtrar eventos</b-dropdown-item>
    <b-dropdown-item href="#">Surprise-me!</b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
export default {};
</script>