module.exports = [
  {
    "type": "heading",
    "defaultValue": "Rings Setup"
  },
  {
    "type": "text",
    "defaultValue": "Configure the rings watchface how you like it."
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Colors"
      },
      {
        "type": "text",
        "defaultValue": "Toggle which colors you would like to use"
      },
      {
        "type": "color",
        "messageKey": "clr1",
        "defaultValue": "0x55FF55",
        "sunlight": false,
        "label": "Color 1 (Required)"
      },
      {
        "type": "toggle",
        "messageKey": "clr2On",
        "defaultValue": true,
        "label": "Enable color 2"
      },
      {
        "type": "color",
        "messageKey": "clr2",
        "defaultValue": "0xAAFF55",
        "sunlight": false,
        "label": "Color"
      },
      {
        "type": "toggle",
        "messageKey": "clr3On",
        "defaultValue": true,
        "label": "Enable color 3"
      },
      {
        "type": "color",
        "messageKey": "clr3",
        "defaultValue": "0xFFFF00",
        "sunlight": false,
        "label": "Color"
      },
      {
        "type": "toggle",
        "messageKey": "clr4On",
        "defaultValue": false,
        "label": "Enable color 4"
      },
      {
        "type": "color",
        "messageKey": "clr4",
        "defaultValue": "0x00000",
        "sunlight": false,
        "label": "Enable color"
      },
      {
        "type": "toggle",
        "messageKey": "clr5On",
        "defaultValue": false,
        "label": "Enable color 5"
      },
      {
        "type": "color",
        "messageKey": "clr5",
        "defaultValue": "0x00000",
        "sunlight": false,
        "label": "Color"
      },
      {
        "type": "toggle",
        "messageKey": "clr6On",
        "defaultValue": false,
        "label": "Enable color 6"
      },
      {
        "type": "color",
        "messageKey": "clr6",
        "defaultValue": "0x00000",
        "sunlight": false,
        "label": "Color"
      },
      {
        "type": "toggle",
        "messageKey": "clr7On",
        "defaultValue": false,
        "label": "Enable color 7"
      },
      {
        "type": "color",
        "messageKey": "clr7",
        "defaultValue": "0x00000",
        "sunlight": false,
        "label": "Color"
      },
      {
        "type": "toggle",
        "messageKey": "clr8On",
        "defaultValue": false,
        "label": "Enable color 8"
      },
      {
        "type": "color",
        "messageKey": "clr8",
        "defaultValue": "0x00000",
        "sunlight": false,
        "label": "Color"
      },
      {
        "type": "toggle",
        "messageKey": "clr9On",
        "defaultValue": false,
        "label": "Enable color 9"
      },
      {
        "type": "color",
        "messageKey": "clr9",
        "defaultValue": "0x00000",
        "sunlight": false,
        "label": "Color"
      },
      {
        "type": "toggle",
        "messageKey": "clr10On",
        "defaultValue": false,
        "label": "Enable color 10"
      },
      {
        "type": "color",
        "messageKey": "clr10",
        "defaultValue": "0x00000",
        "sunlight": false,
        "label": "Color"
      },
      {
        "type": "toggle",
        "messageKey": "clr11On",
        "defaultValue": false,
        "label": "Enable color 11"
      },
      {
        "type": "color",
        "messageKey": "clr11",
        "defaultValue": "0x00000",
        "sunlight": false,
        "label": "Color"
      },
      {
        "type": "toggle",
        "messageKey": "clr12On",
        "defaultValue": false,
        "label": "Enable color 12"
      },
      {
        "type": "color",
        "messageKey": "clr12",
        "defaultValue": "0x00000",
        "sunlight": false,
        "label": "Color"
      }
    ]
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "More Settings"
      },
      {
        "type": "color",
        "messageKey": "BackgroundColor",
        "defaultValue": "0x000000",
        "sunlight": false,
        "label": "Background Color"
      },
      {
        "type": "toggle",
        "messageKey": "startOutside",
        "label": "Start from outside (off to start fom the inside)",
        "defaultValue": false
      },
      {
        "type": "slider",
        "messageKey": "lineThickness",
        "label": "Width of lines",
        "min": 2,
        "max": 8,
        "defaultValue": 6
      },
      {
      "type": "slider",
        "messageKey": "gapThickness",
        "label": "Width of gaps",
        "min": 1,
        "max": 4,
        "defaultValue": 1
      }
    ]
  },
  {
    "type": "submit",
    "defaultValue": "Save Settings"
  }
];