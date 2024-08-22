<template>
  <v-col cols="12" sm="12" class="my-16">
    <v-row class="content-row">
      <!-- Left Column for Content -->
      <v-col cols="12" sm="9" class="content-column">
        <v-row>
          <!-- Display paginated cards -->
          <v-col
            v-for="(card, index) in paginatedCards"
            :key="index"
            cols="12"
            sm="12"
            class="mb-4"
          >
            <v-card color="white">
              <v-row no-gutters>
                <v-col cols="12" sm="7">
                  <v-img :src="card.image" class="img-style"></v-img>
                </v-col>
                <v-col cols="12" sm="5">
                  <v-card-title class="text-h5 text-black">
                    {{ card.title }}
                  </v-card-title>
                  <v-card-subtitle class="text-black">
                    {{ card.subtitle }}
                  </v-card-subtitle>
                  <v-card-actions>
                    <v-btn
                      class="ms-2"
                      size="small"
                      text="START RADIO"
                      variant="outlined"
                    ></v-btn>
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <!-- Pagination Controls -->
        <v-row class="mt-4" justify="center">
          <v-col cols="12" sm="12" class="d-flex justify-center">
            <v-pagination
              v-model="currentPage"
              :length="totalPages"
              :total-visible="5"
            ></v-pagination>
          </v-col>
        </v-row>
      </v-col>

      <!-- Right Column to maintain layout -->
      <v-col cols="12" sm="3" id="newsct">
        <v-row>
          <v-col>
            <v-col cols="12">
  <v-autocomplete
    :items="items"
    class="mx-auto"
    density="comfortable"
    menu-icon=""
    placeholder="搜尋"
    prepend-inner-icon="mdi-magnify"
    style="max-width: 100%;"
    theme="light"
    variant="solo"
    auto-select-first
    item-props
    rounded
  ></v-autocomplete>
</v-col>

          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    cards: [
      { title: 'Enjoy The Beauty Place in Greece City', subtitle: 'Explore now', image: 'image/1.png' },
      { title: 'Enjoy The Beauty Place in Maldives Beach', subtitle: 'Explore now', image: 'image/2.png' },
      { title: 'Enjoy The Beauty Place in Bhutan City', subtitle: 'Explore now', image: 'image/3.png' },
      { title: 'Enjoy The Beauty Place in Paris City', subtitle: 'Explore now', image: 'image/4.png' },
      { title: 'Enjoy The Beauty Place in Rome City', subtitle: 'Explore now', image: 'image/1.png' },
      { title: 'Enjoy The Beauty Place in Tokyo City', subtitle: 'Explore now', image: 'image/2.png' },
      { title: 'Enjoy The Beauty Place in Greece City', subtitle: 'Explore now', image: 'image/1.png' },
      { title: 'Enjoy The Beauty Place in Maldives Beach', subtitle: 'Explore now', image: 'image/2.png' },
      { title: 'Enjoy The Beauty Place in Bhutan City', subtitle: 'Explore now', image: 'image/3.png' },
      { title: 'Enjoy The Beauty Place in Paris City', subtitle: 'Explore now', image: 'image/4.png' },
      { title: 'Enjoy The Beauty Place in Rome City', subtitle: 'Explore now', image: 'image/1.png' },
      { title: 'Enjoy The Beauty Place in Tokyo City', subtitle: 'Explore now', image: 'image/2.png' },
      { title: 'Enjoy The Beauty Place in Greece City', subtitle: 'Explore now', image: 'image/1.png' },
      { title: 'Enjoy The Beauty Place in Maldives Beach', subtitle: 'Explore now', image: 'image/2.png' },
      { title: 'Enjoy The Beauty Place in Bhutan City', subtitle: 'Explore now', image: 'image/3.png' },
      { title: 'Enjoy The Beauty Place in Paris City', subtitle: 'Explore now', image: 'image/4.png' },
      { title: 'Enjoy The Beauty Place in Rome City', subtitle: 'Explore now', image: 'image/1.png' },
      { title: 'Enjoy The Beauty Place in Tokyo City', subtitle: 'Explore now', image: 'image/2.png' }
    ],
    itemsPerPage: 4, // Adjusted for 3 pages with 6 items
    currentPage: 1
  }),
  computed: {
    totalPages () {
      return Math.ceil(this.cards.length / this.itemsPerPage)
    },
    paginatedCards () {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.cards.slice(start, end)
    }
  }
}
</script>

<style scoped>
.img-style {
  width: 100%;
  height: auto;
  box-sizing: border-box;
}

.v-pagination {
  margin-top: 20px;
}

.v-pagination .v-pagination__item {
  cursor: pointer;
}

.v-pagination .v-pagination__item--active {
  background-color: #e34e41;
  color: yellow;
}

.content-row {
  display: flex;
  align-items: stretch;
}

.content-column {
  padding-right: 20px;
}

#newsct {
  background-color: white; /* Set background color */
  border-radius: 20px; /* Rounded corners */
  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.2); /* Shadow */
  padding: 12px; /* Add padding if needed */
  /* height: 100%; */
}
</style>
