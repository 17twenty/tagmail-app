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
            <b-collapse :open="false" aria-id="contentIdForA11y1">
              <a slot="trigger" slot-scope="props" aria-controls="contentIdForA11y1">
                <small>
                  Edit
                  <i :class="['fa', handleIcon(props)]" aria-hidden="true"></i>
                </small>
              </a>
              <div class="card-content">
                <p class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                  Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec
                  rutrum justo nibh eu lectus. <br />
                  Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum
                  mattis neque.
                </p>
              </div>
            </b-collapse>
          </div>
        </div>
      </div>
      <div class="media-right">
        <button @click="emitUp" class="button is-small is-outline is-rounded">
          <i class="fa fa-arrow-up" aria-hidden="true"></i>
        </button>
        <button @click="emitDelete" class="button is-small is-outline is-rounded">
          <i class="fa fa-times" aria-hidden="true"></i>
        </button>
        <button @click="emitDown" class="button is-small is-outline is-rounded">
          <i class="fa fa-arrow-down" aria-hidden="true"></i>
        </button>
      </div>
    </article>
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
  computed: {
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
    handleIcon(props) {
      return props.open ? 'fa-angle-down' : 'fa-angle-right';
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
