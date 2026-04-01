import {
  BASE_2, BASE_3, BASE_4, BASE_6, BASE_8,
  BLACK, RED, ORANGE, GREEN, CYAN, BLUE, PURPLE,
} from '../colors.mjs';

export const flexokiLight = {
  name: 'Flexoki Light',
  type: 'light',
  colors: {
    'editor.background':              BASE_2,
    'editor.foreground':              BLACK,
    'editor.lineHighlightBackground': BASE_3,
    'editorLineNumber.foreground':    BASE_6,
    'editorLineNumber.activeForeground': BASE_8,
    'editor.selectionBackground':     BASE_4,
    'editor.inactiveSelectionBackground': BASE_3,
    'editorCursor.foreground':        BLACK,
    'editorWidget.background':        BASE_2,
    'editorWidget.border':            BASE_4,
    'scrollbarSlider.background':     `${BASE_4}88`,
    'scrollbarSlider.hoverBackground': BASE_4,
  },
  tokenColors: [
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: BASE_6, fontStyle: 'italic' },
    },
    {
      scope: ['string', 'string.quoted', 'string.template'],
      settings: { foreground: ORANGE },
    },
    {
      scope: ['constant.numeric', 'constant.language.numeric'],
      settings: { foreground: RED },
    },
    {
      scope: ['constant.language', 'constant.language.boolean'],
      settings: { foreground: RED },
    },
    {
      scope: [
        'keyword',
        'keyword.control',
        'keyword.operator.new',
        'keyword.operator.expression',
        'storage.modifier',
      ],
      settings: { foreground: BLUE },
    },
    {
      scope: ['storage.type', 'keyword.declaration'],
      settings: { foreground: PURPLE },
    },
    {
      scope: [
        'entity.name.function',
        'meta.function-call entity.name.function',
        'support.function',
      ],
      settings: { foreground: CYAN },
    },
    {
      scope: ['entity.name.type', 'entity.name.class', 'support.class', 'entity.name.tag'],
      settings: { foreground: GREEN },
    },
    {
      scope: ['variable', 'variable.other', 'variable.parameter'],
      settings: { foreground: BLACK },
    },
    {
      scope: ['variable.language', 'variable.language.this'],
      settings: { foreground: RED },
    },
    {
      scope: ['keyword.operator', 'punctuation.separator', 'punctuation.terminator'],
      settings: { foreground: BASE_8 },
    },
    {
      scope: ['punctuation', 'meta.brace'],
      settings: { foreground: BASE_8 },
    },
    {
      scope: ['entity.other.attribute-name'],
      settings: { foreground: CYAN },
    },
    {
      scope: ['support.type.property-name', 'string.unquoted.label'],
      settings: { foreground: GREEN },
    },
    {
      scope: ['meta.import', 'keyword.control.import', 'keyword.control.from'],
      settings: { foreground: BLUE },
    },
    {
      scope: ['support.type', 'entity.name.type.primitive'],
      settings: { foreground: PURPLE },
    },
    {
      scope: ['markup.heading', 'entity.name.section'],
      settings: { foreground: BLUE, fontStyle: 'bold' },
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
      settings: { foreground: ORANGE },
    },
  ],
};
