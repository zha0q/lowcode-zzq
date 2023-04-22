// src/base/Button/schema.ts
var ButtonSchema = {
  type: "Button",
  schema: [
    {
      fieldKey: "block",
      title: "\u6309\u94AE\u5BBD\u5EA6\u8C03\u4E3A\u7236\u7EA7\u5BBD\u5EA6",
      type: "boolean"
    },
    {
      fieldKey: "label",
      title: "\u6309\u94AE\u6587\u6848",
      type: "string"
    },
    {
      fieldKey: "type",
      title: "\u6309\u94AE\u7C7B\u578B",
      type: "string",
      ui: {
        type: "select",
        theme: "antd",
        options: [
          {
            label: "default",
            value: "default"
          },
          {
            label: "primary",
            value: "primary"
          },
          {
            label: "ghost",
            value: "ghost"
          },
          {
            label: "dashed",
            value: "dashed"
          },
          {
            label: "link",
            value: "link"
          },
          {
            label: "text",
            value: "text"
          }
        ]
      }
    },
    {
      fieldKey: "size",
      title: "\u6309\u94AE\u5927\u5C0F",
      type: "string",
      ui: {
        type: "select",
        theme: "antd",
        options: [
          {
            label: "large",
            value: "large"
          },
          {
            label: "middle",
            value: "middle"
          },
          {
            label: "small",
            value: "small"
          }
        ]
      }
    },
    {
      fieldKey: "loading",
      title: "\u663E\u793A\u6309\u94AE loading \u6548\u679C",
      type: "boolean"
    },
    {
      fieldKey: "loadingOn",
      title: "\u663E\u793A\u6309\u94AE loading \u6548\u679C\u8868\u8FBE\u5F0F",
      type: "string"
    }
  ],
  default: {
    componentType: "base",
    type: "Button",
    id: "button_0c45",
    path: "node_1234/node_22/button_0c45",
    label: "\u6309\u94AE",
    layout: {}
  }
};
var schema_default = ButtonSchema;

// src/base/Text/schema.ts
var TextSchema = {
  type: "Text",
  schema: [
    {
      fieldKey: "text",
      title: "\u6587\u5B57",
      type: "string"
    },
    {
      fieldKey: "color",
      title: "\u989C\u8272",
      type: "color"
    },
    {
      fieldKey: "fontSize",
      title: "\u5B57\u4F53\u5927\u5C0F",
      type: "number"
    },
    {
      fieldKey: "align",
      title: "\u5BF9\u9F50\u65B9\u5F0F",
      type: "string",
      ui: {
        type: "select",
        theme: "antd",
        options: [
          {
            label: "\u5DE6\u5BF9\u9F50",
            value: "left"
          },
          {
            label: "\u5C45\u4E2D\u5BF9\u9F50",
            value: "center"
          },
          {
            label: "\u53F3\u5BF9\u9F50",
            value: "right"
          }
        ]
      }
    },
    {
      fieldKey: "lineHeight",
      title: "\u884C\u9AD8",
      type: "number"
    }
  ]
};
var schema_default2 = TextSchema;

// src/box/Div/schema.ts
var schema_default3 = {
  type: "Div",
  default: {
    componentType: "box",
    type: "Div",
    id: "div_0c45",
    path: "node_1234/node_22/div_oc45",
    layout: {
      w: 100,
      h: 100
    },
    body: []
  }
};

// src/box/Page/schema.ts
var schema_default4 = {};

// src/index.ts
var src_default = [
  schema_default,
  schema_default2,
  schema_default4,
  schema_default3
];
export {
  src_default as default
};
//# sourceMappingURL=index.mjs.map
