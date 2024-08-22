<template>
  <v-app>
    <router-view />
  </v-app>
</template>
<style>
main{
  font-family: "微軟正黑體"!important;
}

.v-card{
  border-radius: 20px!important;
  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.2)!important;
  background: white;
}

.v-container{
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;
  width: 100%;
  max-width: 1400px;
}

.v-autocomplete .v-field .v-text-field__prefix, .v-autocomplete .v-field .v-text-field__suffix, .v-autocomplete .v-field .v-field__input, .v-autocomplete .v-field.v-field {
    background: white;
    border-radius: 50px;
    box-shadow: 0px 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 2px 2px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 5px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
}

.v-input--density-default .v-field--variant-solo, .v-input--density-default .v-field--variant-solo-inverted, .v-input--density-default .v-field--variant-solo-filled, .v-input--density-default .v-field--variant-filled {
    --v-input-control-height: 20px;
}

.v-input--density-default .v-field--variant-solo, .v-input--density-default .v-field--variant-solo-inverted, .v-input--density-default .v-field--variant-solo-filled, .v-input--density-default .v-field--variant-filled{
  background: white!important;
  border-radius: 30px;
  box-shadow: 0px 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 2px 2px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 5px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
}

.v-img__img--contain {
    object-fit: cover;
}

/* 手機版情況下減少上下距離 */
@media (max-width: 600px) {
  .my-16 {
    margin-top: 32px!important;  /* 調整手機版的上距 */
    margin-bottom: 32px!important;  /* 調整手機版的下距 */
  }
}
</style>
