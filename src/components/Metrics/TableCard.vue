<template>
  <div id="table-container" class="bi-flex-column" v-if="getDataByColumns(data).length > 0">
    <div class="table-header-container bi-flex-row">
      <div class="bi-flex-row st-container st-background-light">
        <div v-for="column in this.columns" style="text-align: center; width: 100%;" :key="column.key">
          <div>{{ column.value }}</div>
        </div>
      </div>
    </div>
    <div class="table-body-container" @scroll="scrollEventHandler">
      <div class="table-body bi-flex-column" ref="table-scroll">
        <div class="table-row bi-flex-row" v-for="row in data" :key="row" style="gap:10px; width: 100%;">
          <div class="table-column" v-for="col in this.columns" :key="col">
            <span>{{ row[col.key] }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="table-null-container" v-else>
    <span>{{ notFoundTitle || "Данных по данному запросу не было найдено" }}</span>
  </div>
</template>

<script>
export default {
  name: 'DataTable',
  emits: ['scrollOnBottom'],
  props: {
    columns: Array,
    notFoundTitle: String,
    data: Object
  },
  methods: {

    scrollEventHandler(event) {
      let container = event.target.getBoundingClientRect()
      let currentTable = this.$refs['table-scroll'].getBoundingClientRect()
      if (currentTable.bottom - container.bottom < 1) {
        this.$emit('scrollOnBottom')
      }
    },
    getDataByColumns(items) {
      let result = []
      for (let item of items) {
        let itemArray = []
        for (let element in item) {
          if (this.getIdsFromColumns.includes(element)) {
            let index = this.getIdsFromColumns.indexOf(element)
            itemArray.splice(index, 0, item[element])
          }
        }
        result.push(itemArray)
      }
      return result
    }
  },
  computed: {
    getIdsFromColumns() {
      let result = []
      for (let item of this.columns) {
        result.push(item.key)
      }
      return result
    }
  }
}
</script>

<style scoped>
@import url(/src/assets/styles/index.css);
@import url(/src/assets/styles/forms.css);

.table-body-container {
  overflow: auto;
  border-radius: 10px;
  height: 100%;
}

.header-column {
  max-height: 400px;
  overflow: hidden;
}

.table-body-container::-webkit-scrollbar {
  display: none;
}

#table-container {
  width: 100%;
  height: 100%;
  gap: 10px;
}

.table-body {
  width: 100%;
  overflow: overlay;
}

.table-header-container {
  width: 100%;
}

.table-header-container div {
  width: 100%;
  border-radius: 10px;
}

.table-column {
  display: flex;
  flex: auto;
  justify-content: center;
  padding: 10px;
  align-items: center;
  word-break: break-all;
  width: 100%;
  border-radius: 10px;
  background-color: var(--st-dark);
}

#table-container::-webkit-scrollbar {
  background: none;
  width: 10px;
}


#table-null-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>

<style>
.dark {
  background-color: #000000c0;
  border: 1px solid #fff;
  backdrop-filter: blur(1px)
}
</style>