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
        "defaultValue": "Use up to 12 colors. The watchface will cycle through however many you choose."
      },
      {
        "type": "color",
        "messageKey": "BackgroundColor",
        "defaultValue": "0x000000",
        "label": "Background Color"
      },
      {
        "type": "color",
        "messageKey": "clr1",
        "defaultValue": "0x55FF55",
        "label": "Color 1"
      },
      {
        "type": "toggle",
        "messageKey": "clr2On",
        "defaultValue": true,
        "label": "Color 2"
      },
      {
        "type": "color",
        "messageKey": "clr2",
        "defaultValue": "0xAAFF55",
        "label": "Color"
      },
      {
        "type": "toggle",
        "messageKey": "clr3On",
        "defaultValue": true,
        "label": "Color 3"
      },
      {
        "type": "color",
        "messageKey": "clr3",
        "defaultValue": "0xFFFF00",
        "label": "Color"
      },
      {
        "type": "toggle",
        "messageKey": "clr4On",
        "defaultValue": false,
        "label": "Color 4"
      },
      {
        "type": "color",
        "messageKey": "clr4",
        "defaultValue": "0x00000",
        "label": "Color"
      },
      {
        "type": "toggle",
        "messageKey": "clr5On",
        "defaultValue": false,
        "label": "Color 5"
      },
      {
        "type": "color",
        "messageKey": "clr5",
        "defaultValue": "0x00000",
        "label": "Color"
      },
      {
        "type": "toggle",
        "messageKey": "clr6On",
        "defaultValue": false,
        "label": "Color 6"
      },
      {
        "type": "color",
        "messageKey": "clr6",
        "defaultValue": "0x00000",
        "label": "Color"
      },
      {
        "type": "toggle",
        "messageKey": "clr7On",
        "defaultValue": false,
        "label": "Color 7"
      },
      {
        "type": "color",
        "messageKey": "clr7",
        "defaultValue": "0x00000",
        "label": "Color"
      },
      {
        "type": "toggle",
        "messageKey": "clr8On",
        "defaultValue": false,
        "label": "Color 8"
      },
      {
        "type": "color",
        "messageKey": "clr8",
        "defaultValue": "0x00000",
        "label": "Color"
      },
      {
        "type": "toggle",
        "messageKey": "clr9On",
        "defaultValue": false,
        "label": "Color 9"
      },
      {
        "type": "color",
        "messageKey": "clr9",
        "defaultValue": "0x00000",
        "label": "Color"
      },
      {
        "type": "toggle",
        "messageKey": "clr10On",
        "defaultValue": false,
        "label": "Color 10"
      },
      {
        "type": "color",
        "messageKey": "clr10",
        "defaultValue": "0x00000",
        "label": "Color"
      },
      {
        "type": "toggle",
        "messageKey": "clr11On",
        "defaultValue": false,
        "label": "Color 11"
      },
      {
        "type": "color",
        "messageKey": "clr11",
        "defaultValue": "0x00000",
        "label": "Color"
      },
      {
        "type": "toggle",
        "messageKey": "clr12On",
        "defaultValue": false,
        "label": "Color 12"
      },
      {
        "type": "color",
        "messageKey": "clr12",
        "defaultValue": "0x00000",
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
        "type": "toggle",
        "messageKey": "startOutside",
        "label": "Start from outside (off to start fom the inside)",
        "defaultValue": true
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