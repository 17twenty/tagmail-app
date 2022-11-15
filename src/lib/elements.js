export function button() {
  return {
    type: 'button',
    data: {
      text: 'Button',
      uri: 'https://www.tagmail.io',
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
      leftheader: 'Left',
      rightheader: 'Right',
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
      imageURI: 'https://picsum.photos/seed/dog/600',
      targetURI: '',
      altText: 'Sitting Person',
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
