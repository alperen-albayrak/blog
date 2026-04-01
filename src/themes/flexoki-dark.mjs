import {
  BASE_5, BASE_7, BASE_9, BASE_A, BASE_B, BASE_C, BASE_D,
  RED_D, ORANGE_D, GREEN_D, CYAN_D, BLUE_D, PURPLE_D,
} from '../colors.mjs';

export const flexokiDark = {
  name: 'Flexoki Dark',
  type: 'dark',
  colors: {
    'editor.background':              BASE_D,
    'editor.foreground':              BASE_5,
    'editor.lineHighlightBackground': BASE_B,
    'editorLineNumber.foreground':    BASE_9,
    'editorLineNumber.activeForeground': BASE_7,
    'editor.selectionBackground':     BASE_A,
    'editor.inactiveSelectionBackground': BASE_B,
    'editorCursor.foreground':        BASE_5,
    'editorWidget.background':        BASE_D,
    'editorWidget.border':            BASE_C,
    'scrollbarSlider.background':     `${BASE_C}88`,
    'scrollbarSlider.hoverBackground': BASE_B,
  },
  tokenColors: [
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: BASE_9, fontStyle: 'italic' },
    },
    {
      scope: ['string', 'string.quoted', 'string.template'],
      settings: { foreground: ORANGE_D },
    },
    {
      scope: ['constant.numeric', 'constant.language.numeric'],
      settings: { foreground: RED_D },
    },
    {
      scope: ['constant.language', 'constant.language.boolean'],
      settings: { foreground: RED_D },
    },
    {
      scope: [
        'keyword',
        'keyword.control',
        'keyword.operator.new',
        'keyword.operator.expression',
        'storage.modifier',
      ],
      settings: { foreground: BLUE_D },
    },
    {
      scope: ['storage.type', 'keyword.declaration'],
      settings: { foreground: PURPLE_D },
    },
    {
      scope: [
        'entity.name.function',
        'meta.function-call entity.name.function',
        'support.function',
      ],
      settings: { foreground: CYAN_D },
    },
    {
      scope: ['entity.name.type', 'entity.name.class', 'support.class', 'entity.name.tag'],
      settings: { foreground: GREEN_D },
    },
    {
      scope: ['variable', 'variable.other', 'variable.parameter'],
      settings: { foreground: BASE_5 },
    },
    {
      scope: ['variable.language', 'variable.language.this'],
      settings: { foreground: RED_D },
    },
    {
      scope: ['keyword.operator', 'punctuation.separator', 'punctuation.terminator'],
      settings: { foreground: BASE_7 },
    },
    {
      scope: ['punctuation', 'meta.brace'],
      settings: { foreground: BASE_7 },
    },
    {
      scope: ['entity.other.attribute-name'],
      settings: { foreground: CYAN_D },
    },
    {
      scope: ['support.type.property-name', 'string.unquoted.label'],
      settings: { foreground: GREEN_D },
    },
    {
      scope: ['meta.import', 'keyword.control.import', 'keyword.control.from'],
      settings: { foreground: BLUE_D },
    },
    {
      scope: ['support.type', 'entity.name.type.primitive'],
      settings: { foreground: PURPLE_D },
    },
    {
      scope: ['markup.heading', 'entity.name.section'],
      settings: { foreground: BLUE_D, fontStyle: 'bold' },
    },
    {
      scope: ['markup.bold', 'strong'],
      settings: { fontStyle: 'bold' },
    },
    {
      scope: ['markup.italic', 'emphasis'],
      settings: { fontStyle: 'italic' },
    },
    {
      scope: ['markup.inline.raw', 'markup.raw'],
      settings: { foreground: ORANGE_D },
    },
  ],
};
