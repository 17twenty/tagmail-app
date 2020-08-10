<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <span class="element-icon">
            <i :class="icon"></i>
          </span>
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <strong>{{ elementType }}</strong>
          <div v-if="isEditable">
            <a @click="handleCollapse" aria-controls="contentIdForA11y1">
              <small>
                Edit
                <i :class="['fa', handleIcon]" aria-hidden="true"></i>
              </small>
            </a>
          </div>
        </div>
      </div>
      <div class="media-right">
        <button @click="emitUp" class="palette-btn">
          <i class="fa fa-arrow-up" aria-hidden="true"></i>
        </button>
        <button @click="emitDelete" class="palette-btn">
          <i class="fa fa-times" aria-hidden="true"></i>
        </button>
        <button @click="emitDown" class="palette-btn">
          <i class="fa fa-arrow-down" aria-hidden="true"></i>
        </button>
      </div>
    </article>
    <b-collapse :open.sync="isOpen" aria-id="contentIdForA11y1">
      <div class="">
        <slot name="element-properties" />
      </div>
    </b-collapse>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    properties: {
      type: Array,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    handleIcon() {
      return this.isOpen ? 'fa-angle-down' : 'fa-angle-right';
    },
    elementType() {
      switch (this.type) {
        case 'button':
          return 'Button / Link';
        case 'image':
          return 'Image';
        case 'text':
          return 'Text / Markdown';
        case 'separator':
          return 'Separator';
        case 'list':
          return 'List';
        case 'table':
          return 'Table';
        default:
          return '';
      }
    },
    isEditable() {
      switch (this.type) {
        case 'button':
        case 'image':
        case 'text':
        case 'list':
        case 'table':
          return true;
        default:
          return false;
      }
    },
    icon() {
      switch (this.type) {
        case 'button':
          return 'fa fa-hand-pointer';
        case 'image':
          return 'fas fa-image';
        case 'text':
          return 'fas fa-font';
        case 'separator':
          return 'fas fa-grip-lines';
        case 'list':
          return 'fas fa-list-ul';
        case 'table':
          return 'fas fa-columns';
        default:
          return '';
      }
    },
  },
  methods: {
    emitUp() {
      this.$emit('up');
    },
    emitDown() {
      this.$emit('down');
    },
    emitUpdate() {
      this.$emit('update', {});
    },
    emitDelete() {
      this.$emit('delete');
    },
    handleCollapse() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.box {
  transition: background-color 0.5s ease !important;
  padding: 12px;
  margin-bottom: 12px !important;
}
.element-icon {
  font-size: 2em;
  color: $primary;
}
</style>
