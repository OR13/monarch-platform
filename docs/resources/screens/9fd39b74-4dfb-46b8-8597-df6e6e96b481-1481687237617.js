jQuery("#simulation")
  .on("click", ".s-9fd39b74-4dfb-46b8-8597-df6e6e96b481 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_map_1")) {
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
    } else if(jFirer.is("#s-cover")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fd39b74-4dfb-46b8-8597-df6e6e96b481 #s-cover > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-9fd39b74-4dfb-46b8-8597-df6e6e96b481 #s-cover": {
                      "attributes": {
                        "opacity": "0.75"
                      }
                    }
                  },{
                    "#s-9fd39b74-4dfb-46b8-8597-df6e6e96b481 #s-cover": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=75)",
                        "filter": "alpha(opacity=75)"
                      }
                    }
                  },{
                    "#s-9fd39b74-4dfb-46b8-8597-df6e6e96b481 #s-cover": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=75)",
                        "filter": "alpha(opacity=75)"
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
                    "#s-9fd39b74-4dfb-46b8-8597-df6e6e96b481 #s-cover > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-9fd39b74-4dfb-46b8-8597-df6e6e96b481 #s-cover": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-9fd39b74-4dfb-46b8-8597-df6e6e96b481 #s-cover": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-9fd39b74-4dfb-46b8-8597-df6e6e96b481 #s-cover": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
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
    } else if(jFirer.is("#s-cover_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fd39b74-4dfb-46b8-8597-df6e6e96b481 #s-cover_1 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-9fd39b74-4dfb-46b8-8597-df6e6e96b481 #s-cover_1": {
                      "attributes": {
                        "opacity": "0.75"
                      }
                    }
                  },{
                    "#s-9fd39b74-4dfb-46b8-8597-df6e6e96b481 #s-cover_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=75)",
                        "filter": "alpha(opacity=75)"
                      }
                    }
                  },{
                    "#s-9fd39b74-4dfb-46b8-8597-df6e6e96b481 #s-cover_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=75)",
                        "filter": "alpha(opacity=75)"
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
                    "#s-9fd39b74-4dfb-46b8-8597-df6e6e96b481 #s-cover_1 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-9fd39b74-4dfb-46b8-8597-df6e6e96b481 #s-cover_1": {
                      "attributes": {
                        "opacity": "1.0"
                      }
                    }
                  },{
                    "#s-9fd39b74-4dfb-46b8-8597-df6e6e96b481 #s-cover_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
                      }
                    }
                  },{
                    "#s-9fd39b74-4dfb-46b8-8597-df6e6e96b481 #s-cover_1": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        "filter": "alpha(opacity=100)"
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
    }
  });