export function button() {
  return {
    type: 'button',
    data: {
      text: 'Button',
      uri: '',
      position: 'center',
    },
  };
}

export function table() {
  return {
    type: 'table',
    data: {
      rows: [
        { key: 'Title', value: 'Description' },
      ],
      leftheader: '',
      rightheader: '',
    },
  };
}

export function separator() {
  return {
    type: 'separator',
    data: {},
  };
}

export function image() {
  return {
    type: 'image',
    data: {
      imageURI: 'https://via.placeholder.com/1200x400?text={ImageText}',
      targetURI: '',
      altText: 'Visiting one',
    },
  };
}

export function text() {
  return {
    type: 'text',
    data: {
      text: '_You_ can use **Markdown** and tags here {PersonName}',
      weight: 'defaultText',
      position: 'left',
    },
  };
}

export function list() {
  return {
    type: 'list',
    data: {
      items: ['First', 'Second', 'Third'],
    },
  };
}
