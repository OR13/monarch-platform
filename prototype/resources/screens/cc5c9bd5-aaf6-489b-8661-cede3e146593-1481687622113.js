jQuery("#simulation")
  .on("click", ".s-cc5c9bd5-aaf6-489b-8661-cede3e146593 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_53")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-cc5c9bd5-aaf6-489b-8661-cede3e146593 #s-Label_53": {
                      "attributes": {
                        "background-color": "#C4C2C5",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-cc5c9bd5-aaf6-489b-8661-cede3e146593 #s-Label_53": {
                      "attributes-ie": {
                        "-pie-background": "#C4C2C5",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 100
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-cc5c9bd5-aaf6-489b-8661-cede3e146593 #s-Label_53": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-cc5c9bd5-aaf6-489b-8661-cede3e146593 #s-Label_53": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9fd39b74-4dfb-46b8-8597-df6e6e96b481"
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
    } else if(jFirer.is("#s-Label_54")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-cc5c9bd5-aaf6-489b-8661-cede3e146593 #s-Label_54": {
                      "attributes": {
                        "background-color": "#C4C2C5",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-cc5c9bd5-aaf6-489b-8661-cede3e146593 #s-Label_54": {
                      "attributes-ie": {
                        "-pie-background": "#C4C2C5",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 100
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-cc5c9bd5-aaf6-489b-8661-cede3e146593 #s-Label_54": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-cc5c9bd5-aaf6-489b-8661-cede3e146593 #s-Label_54": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/96a06720-ecb5-4bad-ab8e-1fcdb8e185bb"
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
    } else if(jFirer.is("#s-Label_55")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-cc5c9bd5-aaf6-489b-8661-cede3e146593 #s-Label_55": {
                      "attributes": {
                        "background-color": "#C4C2C5",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-cc5c9bd5-aaf6-489b-8661-cede3e146593 #s-Label_55": {
                      "attributes-ie": {
                        "-pie-background": "#C4C2C5",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 100
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-cc5c9bd5-aaf6-489b-8661-cede3e146593 #s-Label_55": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-cc5c9bd5-aaf6-489b-8661-cede3e146593 #s-Label_55": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb395869-46b5-48da-89c4-9668408feb7c"
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
  .on("pageload", ".s-cc5c9bd5-aaf6-489b-8661-cede3e146593 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_1",
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimSubstring",
                        "parameter": [ {
                          "action": "jimSystemTime"
                        },"0","5" ]
                      }," PM" ]
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
  });