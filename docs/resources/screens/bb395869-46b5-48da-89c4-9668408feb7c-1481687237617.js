jQuery("#simulation")
  .on("click", ".s-bb395869-46b5-48da-89c4-9668408feb7c .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bb395869-46b5-48da-89c4-9668408feb7c #s-Button_5": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-bb395869-46b5-48da-89c4-9668408feb7c #s-Button_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-bb395869-46b5-48da-89c4-9668408feb7c #s-Button_5 span": {
                      "attributes": {
                        "color": "#80B8F1",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bb395869-46b5-48da-89c4-9668408feb7c #s-Button_5": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-bb395869-46b5-48da-89c4-9668408feb7c #s-Button_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-bb395869-46b5-48da-89c4-9668408feb7c #s-Button_5 span": {
                      "attributes": {
                        "color": "#007DFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button-blue")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bb395869-46b5-48da-89c4-9668408feb7c #s-Button-blue": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#80B8F1",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#80B8F1",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#80B8F1",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#80B8F1",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "font-size": "11.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      },
                      "expressions": {
                        "width": "Math.max(73 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(35 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-bb395869-46b5-48da-89c4-9668408feb7c #s-Button-blue .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-bb395869-46b5-48da-89c4-9668408feb7c #s-Button-blue span": {
                      "attributes": {
                        "color": "#80B8F1",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  },{
                    "#s-bb395869-46b5-48da-89c4-9668408feb7c #s-Button-blue": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#80B8F1",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#80B8F1",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#80B8F1",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#80B8F1",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(73 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(35 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bb395869-46b5-48da-89c4-9668408feb7c #s-Button-blue": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#157EFB",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#157EFB",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#157EFB",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#157EFB",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "font-size": "11.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      },
                      "expressions": {
                        "width": "Math.max(73 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(35 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-bb395869-46b5-48da-89c4-9668408feb7c #s-Button-blue .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-bb395869-46b5-48da-89c4-9668408feb7c #s-Button-blue span": {
                      "attributes": {
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  },{
                    "#s-bb395869-46b5-48da-89c4-9668408feb7c #s-Button-blue": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#157EFB",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#157EFB",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#157EFB",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#157EFB",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(73 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(35 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button-blue_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bb395869-46b5-48da-89c4-9668408feb7c #s-Button-blue_1": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#80B8F1",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#80B8F1",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#80B8F1",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#80B8F1",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "font-size": "11.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      },
                      "expressions": {
                        "width": "Math.max(73 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(35 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-bb395869-46b5-48da-89c4-9668408feb7c #s-Button-blue_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-bb395869-46b5-48da-89c4-9668408feb7c #s-Button-blue_1 span": {
                      "attributes": {
                        "color": "#80B8F1",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  },{
                    "#s-bb395869-46b5-48da-89c4-9668408feb7c #s-Button-blue_1": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#80B8F1",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#80B8F1",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#80B8F1",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#80B8F1",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(73 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(35 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bb395869-46b5-48da-89c4-9668408feb7c #s-Button-blue_1": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#157EFB",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#157EFB",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#157EFB",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#157EFB",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "font-size": "11.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      },
                      "expressions": {
                        "width": "Math.max(73 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(35 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-bb395869-46b5-48da-89c4-9668408feb7c #s-Button-blue_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-bb395869-46b5-48da-89c4-9668408feb7c #s-Button-blue_1 span": {
                      "attributes": {
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  },{
                    "#s-bb395869-46b5-48da-89c4-9668408feb7c #s-Button-blue_1": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#157EFB",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#157EFB",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#157EFB",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#157EFB",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(73 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(35 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc5c9bd5-aaf6-489b-8661-cede3e146593",
                    "transition": "slideright"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-bb395869-46b5-48da-89c4-9668408feb7c .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Line_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Line_13",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 1000,
                      "direction": "left"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 1000
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_33",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-bb395869-46b5-48da-89c4-9668408feb7c .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bb395869-46b5-48da-89c4-9668408feb7c #s-Input_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-bb395869-46b5-48da-89c4-9668408feb7c #s-Input_11 input": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_11",
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-bb395869-46b5-48da-89c4-9668408feb7c .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bb395869-46b5-48da-89c4-9668408feb7c #s-Input_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-bb395869-46b5-48da-89c4-9668408feb7c #s-Input_11 input": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_11",
                    "value": "Search"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });