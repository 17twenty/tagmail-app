<template>
  <div class="editor-container">
    <div class="left">
      <div class="centered">
        <Element
          :type="item.type"
          v-for="(item, index) in items"
          :key="index"
          @delete="removeElement(index)"
          @up="move(index,index-1)"
          @down="move(index,index+1)"
          @update="elementUpdate(index)"
        />
      <p v-if="items.length < 1">
        Add an item to get started...
      </p>
        <Palette @create="addItem"></Palette>
      </div>
    </div>

    <div class="right">
      <button @click="createElement('list')" class="button is-outline is-rounded">
          <i class="fas fa-desktop"></i>
        </button>
        <button class="button is-outline is-rounded">
          <i class="fas fa-mobile-alt"></i>
        </button>
      <iframe
        src="http://localhost:9001/app/template"
        id="preview"
        width="100%"
        height="100%"
        style="border:none;"
      >
      </iframe>
    </div>
  </div>
</template>

<script>
import api from '@/api';
import Element from '@/components/Element.vue';
import Palette from '@/components/Palette.vue';

export default {
  components: { Element, Palette },
  data() {
    return {
      items: [
      ],
    };
  },
  methods: {
    updatePreview() {
      const payload = this.items;
      api.postPreview(payload).then((res) => {
        this.items = res.data;
        this.reloadIframe();
      }).catch(() => {
      }).finally(() => {
      });
    },
    addItem(element) {
      this.items.push(element);
      this.updatePreview();
    },
    removeElement(index) {
      this.items.splice(index, 1);
      this.updatePreview();
    },
    move(oldIndex, newIndex) {
      while (oldIndex < 0) {
        // eslint-disable-next-line no-param-reassign
        oldIndex += this.items.length;
      }
      while (newIndex < 0) {
        // eslint-disable-next-line no-param-reassign
        newIndex += this.items.length;
      }
      this.items.splice(newIndex, 0, this.items.splice(oldIndex, 1)[0]);
      this.updatePreview();
      return this.items; // for testing purposes
    },
    reloadIframe() {
      const iframe = document.getElementById('preview');
      // eslint-disable-next-line no-self-assign
      iframe.src = iframe.src;
    },
  },
};
</script>

<style scoped>
.editor-container {
  height: 90vh;
  display: flex;
  left: 0;
  right: 0;
}
/* Control the left side */
.left {
  left: 0;
  flex: 1;
  min-width: 30vw;
  max-width: 30vw;
}

/* Control the right side */
.right {
  overflow: hidden;
  max-width: 70vw;
  margin-left: 1em;
  -moz-box-shadow: 3px 3px 5px 6px #eee;
  -webkit-box-shadow: 3px 3px 5px 6px #eee;
  box-shadow: 3px 3px 5px 6px #eee;
  margin-right: 0;
  padding-right: 0;
  margin-right: 0;
  background-color: #fcfcfc;
  position: relative;
  flex: 1;
}
</style>
