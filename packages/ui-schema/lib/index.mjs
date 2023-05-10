// src/base/Button/schema.ts
var ButtonSchema = {
  type: "Button",
  schema: [
    {
      fieldKey: "block",
      title: "\u6309\u94AE\u5BBD\u5EA6\u8C03\u4E3A\u7236\u7EA7\u5BBD\u5EA6",
      type: "boolean",
      ui: {
        type: "switch",
        theme: "antd"
      }
    },
    {
      fieldKey: "label",
      title: "\u6309\u94AE\u6587\u6848",
      type: "string",
      ui: {
        type: "text",
        theme: "antd"
      }
    },
    {
      fieldKey: "level",
      title: "\u6309\u94AE\u7C7B\u578B",
      type: "string",
      ui: {
        type: "radio",
        theme: "antd",
        buttonStyle: "solid",
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
        type: "radio",
        theme: "antd",
        buttonStyle: "solid",
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
      type: "boolean",
      ui: {
        type: "switch",
        theme: "antd"
      }
    },
    {
      fieldKey: "loadingOn",
      title: "\u663E\u793A\u6309\u94AE loading \u6548\u679C\u8868\u8FBE\u5F0F",
      type: "string",
      ui: {
        type: "text",
        theme: "antd"
      }
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
      width: "100%",
      height: "100px"
    },
    body: []
  }
};

// src/box/Page/schema.ts
var schema_default4 = {};

// src/base/Carousel/schema.ts
var CarouselSchema = {
  type: "Carousel",
  schema: [
    {
      fieldKey: "autoplay",
      title: "\u81EA\u52A8\u64AD\u653E",
      type: "boolean",
      ui: {
        type: "switch",
        theme: "antd"
      }
    },
    {
      fieldKey: "urls",
      title: "\u8F6E\u64AD\u56FE\u5730\u5740",
      type: "array",
      items: {
        type: "string",
        ui: {
          type: "text",
          theme: "antd"
        }
      }
    }
  ],
  default: {
    autoplay: true,
    urls: [],
    componentType: "base",
    type: "Carousel",
    layout: {}
  }
};
var schema_default5 = CarouselSchema;

// src/base/Calendar/schema.ts
var CalendarSchema = {
  type: "Carousel",
  schema: [
    {
      fieldKey: "fullscreen",
      title: "\u653E\u5927",
      type: "boolean",
      ui: {
        type: "switch",
        theme: "antd"
      }
    }
  ],
  default: {
    fullscreen: false,
    componentType: "base",
    type: "Calendar",
    layout: {}
  }
};
var schema_default6 = CalendarSchema;

// src/base/Checkbox/schema.ts
var CheckboxSchema = {
  type: "Checkbox",
  schema: [
    {
      fieldKey: "autoFocus",
      title: "\u81EA\u52A8\u805A\u7126",
      type: "boolean",
      ui: {
        type: "switch",
        theme: "antd"
      }
    },
    {
      fieldKey: "checked",
      title: "\u9009\u4E2D",
      type: "boolean",
      ui: {
        type: "switch",
        theme: "antd"
      }
    },
    {
      fieldKey: "defaultChecked",
      title: "\u9ED8\u8BA4\u9009\u4E2D",
      type: "boolean",
      ui: {
        type: "switch",
        theme: "antd"
      }
    },
    {
      fieldKey: "disabled",
      title: "\u7981\u7528",
      type: "boolean",
      ui: {
        type: "switch",
        theme: "antd"
      }
    },
    {
      fieldKey: "label",
      title: "\u6807\u7B7E",
      type: "string",
      ui: {
        type: "text",
        theme: "antd"
      }
    }
  ],
  default: {
    autoFocus: false,
    checked: false,
    defaultChecked: false,
    disabled: false,
    label: "Checkbox",
    componentType: "base",
    type: "Checkbox",
    layout: {}
  }
};
var schema_default7 = CheckboxSchema;

// src/base/Input/schema.ts
var InputSchema = {
  type: "Input",
  schema: [
    {
      fieldKey: "allowClear",
      title: "\u662F\u5426\u663E\u793A\u6E05\u7A7A",
      type: "boolean",
      ui: {
        type: "switch",
        theme: "antd"
      }
    },
    {
      fieldKey: "bordered",
      title: "\u8FB9\u6846",
      type: "boolean",
      ui: {
        type: "switch",
        theme: "antd"
      }
    },
    {
      fieldKey: "disabled",
      title: "\u7981\u7528",
      type: "boolean",
      ui: {
        type: "switch",
        theme: "antd"
      }
    },
    {
      fieldKey: "showCount",
      title: "\u663E\u793A\u5B57\u6570",
      type: "string",
      ui: {
        type: "text",
        theme: "antd"
      }
    },
    {
      fieldKey: "defaultValue",
      title: "\u9ED8\u8BA4\u503C",
      type: "string",
      ui: {
        type: "text",
        theme: "antd"
      }
    },
    {
      fieldKey: "maxLength",
      title: "\u9650\u5236\u5B57\u6570",
      type: "number",
      ui: {
        type: "number",
        theme: "antd"
      }
    },
    {
      fieldKey: "size",
      type: "string",
      title: "\u5C3A\u5BF8",
      ui: {
        type: "radio",
        theme: "antd",
        buttonStyle: "solid",
        options: [
          {
            label: "\u5927",
            value: "large"
          },
          {
            label: "\u4E2D",
            value: "middle"
          },
          {
            label: "\u5C0F",
            value: "small"
          }
        ]
      }
    }
  ],
  default: {
    componentType: "base",
    type: "Input",
    layout: {},
    allowClear: false,
    bordered: true,
    defaultValue: "",
    disabled: false,
    maxLength: 1e3,
    showCount: false,
    size: "middle"
  }
};
var schema_default8 = InputSchema;

// src/base/DatePicker/schema.ts
var DatePickerSchema = {
  type: "DatePicker",
  schema: [
    {
      fieldKey: "picker",
      title: "\u9009\u62E9\u7C7B\u578B",
      type: "string",
      ui: {
        type: "radio",
        theme: "antd",
        buttonStyle: "solid",
        options: [
          {
            label: "\u65E5",
            value: "date"
          },
          {
            label: "\u5468",
            value: "week"
          },
          {
            label: "\u6708",
            value: "month"
          },
          {
            label: "\u5B63",
            value: "quarter"
          },
          {
            label: "\u5E74",
            value: "year"
          }
        ]
      }
    }
  ],
  default: {
    componentType: "base",
    type: "DatePicker",
    layout: {},
    fullscreen: false
  }
};
var schema_default9 = DatePickerSchema;

// src/index.ts
var src_default = [
  schema_default,
  schema_default2,
  schema_default5,
  schema_default6,
  schema_default7,
  schema_default9,
  schema_default8,
  schema_default4,
  schema_default3
];
export {
  src_default as default
};
//# sourceMappingURL=index.mjs.map
