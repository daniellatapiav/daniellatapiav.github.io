/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'cutive, sans-serif': '<script src=\"http://use.edgefonts.net/cutive:n4:all.js\"></script>',
            'bebas-neue, sans-serif': '<script src=\"http://use.edgefonts.net/bebas-neue:n4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'chicago',
                            display: 'block',
                            type: 'image',
                            rect: ['0px', '0px', '100%', '563px', 'auto', 'auto'],
                            clip: 'rect(0px 900px 400px 0px)',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"chicago.jpg",'50%','50%','900px','562px', 'no-repeat'],
                            filter: [0.1, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],[],[],['1.3','1.3']]
                        },
                        {
                            id: 'Rectangle',
                            display: 'block',
                            type: 'rect',
                            rect: ['0px', '0px', '900px', '400px', 'auto', 'auto'],
                            opacity: '0.3',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'dprice',
                            display: 'block',
                            type: 'text',
                            rect: ['1206px', '303px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "$17.99",
                            font: ['cutive, sans-serif', [150, "%"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"],
                            textShadow: ["rgba(0,0,0,1.00)", 2, 2, 2]
                        },
                        {
                            id: 'iprice',
                            display: 'block',
                            type: 'text',
                            rect: ['518px', '303px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "$17.99",
                            font: ['cutive, sans-serif', [150, "%"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"],
                            textShadow: ["rgba(0,0,0,1.00)", 2, 2, 2]
                        },
                        {
                            id: 'aprice',
                            display: 'block',
                            type: 'text',
                            rect: ['716px', '303px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "$19.99",
                            font: ['cutive, sans-serif', [150, "%"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"],
                            textShadow: ["rgba(0,0,0,1.00)", 2, 2, 2]
                        },
                        {
                            id: 'divergent',
                            display: 'block',
                            type: 'image',
                            rect: ['1176px', '57px', '151px', '228px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"divergent.jpg",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,1.00)", 5, 5, 5]
                        },
                        {
                            id: 'insurgent',
                            display: 'block',
                            type: 'image',
                            rect: ['1376px', '57px', '151px', '228px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"insurgent.jpg",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,1.00)", 5, 5, 5]
                        },
                        {
                            id: 'allegiant',
                            display: 'block',
                            type: 'image',
                            rect: ['1574px', '57px', '151px', '228px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"allegiant.jpg",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,1.00)", 5, 5, 5]
                        },
                        {
                            id: 'get_one',
                            display: 'block',
                            type: 'text',
                            rect: ['24px', '57px', '228px', '228px', 'auto', 'auto'],
                            opacity: '0',
                            text: "Order any book from Roth's best-selling trilogy in hard cover now!",
                            align: "right",
                            font: ['bebas-neue, sans-serif', [268.75, "%"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", ""],
                            textShadow: ["rgba(0,0,0,1.00)", 2, 2, 2]
                        },
                        {
                            id: 'pack3',
                            display: 'block',
                            type: 'image',
                            rect: ['542px', '25px', '263px', '350px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"pack3.png",'0px','0px']
                        },
                        {
                            id: 'Text3',
                            display: 'block',
                            type: 'text',
                            rect: ['94px', '104px', '359px', '96px', 'auto', 'auto'],
                            text: "OR GET ALL THREE BOOKS FOR THE AMAZING PRICE OF",
                            align: "right",
                            font: ['bebas-neue, sans-serif', [268.75, "%"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"],
                            textShadow: ["rgba(0,0,0,1.00)", 2, 2, 2]
                        },
                        {
                            id: 'Text4',
                            display: 'block',
                            type: 'text',
                            rect: ['243px', '196px', '209px', '91px', 'auto', 'auto'],
                            text: "$55.99",
                            align: "right",
                            font: ['bebas-neue, sans-serif', [556.25, "%"], "rgba(255,255,255,1)", "400", "none solid rgb(255, 255, 255)", "normal", "break-word", "normal"],
                            textShadow: ["rgba(0,0,0,1.00)", 3, 3, 3]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '900px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 15000,
                    autoPlay: true,
                    labels: {
                        "Etiqueta 1": 4883,
                        "Etiqueta 2": 5383
                    },
                    data: [
                        [
                            "eid271",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'block'
                        ],
                        [
                            "eid115",
                            "textShadow.offsetH",
                            0,
                            0,
                            "linear",
                            "${get_one}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid31",
                            "left",
                            2000,
                            1000,
                            "linear",
                            "${allegiant}",
                            '-189px',
                            '685px'
                        ],
                        [
                            "eid220",
                            "left",
                            10000,
                            1000,
                            "linear",
                            "${allegiant}",
                            '685px',
                            '1574px'
                        ],
                        [
                            "eid114",
                            "scaleY",
                            4000,
                            1000,
                            "linear",
                            "${get_one}",
                            '0',
                            '1'
                        ],
                        [
                            "eid274",
                            "left",
                            5000,
                            5000,
                            "linear",
                            "${get_one}",
                            '24px',
                            '25px'
                        ],
                        [
                            "eid224",
                            "left",
                            10000,
                            1000,
                            "linear",
                            "${get_one}",
                            '25px',
                            '914px'
                        ],
                        [
                            "eid118",
                            "textShadow.color",
                            0,
                            0,
                            "linear",
                            "${get_one}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid261",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${Text4}",
                            'block',
                            'block'
                        ],
                        [
                            "eid265",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${allegiant}",
                            'block',
                            'block'
                        ],
                        [
                            "eid221",
                            "top",
                            10000,
                            1000,
                            "linear",
                            "${allegiant}",
                            '57px',
                            '58px'
                        ],
                        [
                            "eid87",
                            "opacity",
                            5000,
                            1000,
                            "linear",
                            "${aprice}",
                            '0',
                            '1'
                        ],
                        [
                            "eid113",
                            "scaleX",
                            4000,
                            1000,
                            "linear",
                            "${get_one}",
                            '0',
                            '1'
                        ],
                        [
                            "eid40",
                            "scaleX",
                            0,
                            1500,
                            "linear",
                            "${chicago}",
                            '1.3',
                            '1'
                        ],
                        [
                            "eid91",
                            "opacity",
                            5000,
                            1000,
                            "linear",
                            "${iprice}",
                            '0',
                            '1'
                        ],
                        [
                            "eid263",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${pack3}",
                            'block',
                            'block'
                        ],
                        [
                            "eid117",
                            "textShadow.blur",
                            0,
                            0,
                            "linear",
                            "${get_one}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid89",
                            "opacity",
                            5000,
                            1000,
                            "linear",
                            "${dprice}",
                            '0',
                            '1'
                        ],
                        [
                            "eid58",
                            "filter.grayscale",
                            0,
                            1500,
                            "linear",
                            "${chicago}",
                            '1',
                            '0'
                        ],
                        [
                            "eid241",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid269",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${iprice}",
                            'block',
                            'block'
                        ],
                        [
                            "eid229",
                            "top",
                            10000,
                            1000,
                            "linear",
                            "${divergent}",
                            '57px',
                            '58px'
                        ],
                        [
                            "eid260",
                            "height",
                            15000,
                            0,
                            "linear",
                            "${Text4}",
                            '91px',
                            '91px'
                        ],
                        [
                            "eid232",
                            "left",
                            10000,
                            1000,
                            "linear",
                            "${iprice}",
                            '518px',
                            '1407px'
                        ],
                        [
                            "eid270",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${dprice}",
                            'block',
                            'block'
                        ],
                        [
                            "eid226",
                            "left",
                            10000,
                            1000,
                            "linear",
                            "${dprice}",
                            '317px',
                            '1206px'
                        ],
                        [
                            "eid33",
                            "left",
                            3000,
                            1000,
                            "linear",
                            "${divergent}",
                            '-587px',
                            '287px'
                        ],
                        [
                            "eid228",
                            "left",
                            10000,
                            1000,
                            "linear",
                            "${divergent}",
                            '287px',
                            '1176px'
                        ],
                        [
                            "eid42",
                            "scaleY",
                            0,
                            1500,
                            "linear",
                            "${chicago}",
                            '1.3',
                            '1'
                        ],
                        [
                            "eid29",
                            "left",
                            2500,
                            1000,
                            "linear",
                            "${insurgent}",
                            '-388px',
                            '487px'
                        ],
                        [
                            "eid222",
                            "left",
                            10000,
                            1000,
                            "linear",
                            "${insurgent}",
                            '487px',
                            '1376px'
                        ],
                        [
                            "eid242",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            '-573px',
                            '-573px'
                        ],
                        [
                            "eid254",
                            "left",
                            10000,
                            1000,
                            "linear",
                            "${Text4}",
                            '-573px',
                            '243px'
                        ],
                        [
                            "eid257",
                            "left",
                            15000,
                            0,
                            "linear",
                            "${Text4}",
                            '243px',
                            '243px'
                        ],
                        [
                            "eid268",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${aprice}",
                            'block',
                            'block'
                        ],
                        [
                            "eid240",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            '-722px',
                            '-722px'
                        ],
                        [
                            "eid252",
                            "left",
                            10000,
                            1000,
                            "linear",
                            "${Text3}",
                            '-722px',
                            '94px'
                        ],
                        [
                            "eid273",
                            "left",
                            11000,
                            1123,
                            "linear",
                            "${Text3}",
                            '94px',
                            '91px'
                        ],
                        [
                            "eid264",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${get_one}",
                            'block',
                            'block'
                        ],
                        [
                            "eid267",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${divergent}",
                            'block',
                            'block'
                        ],
                        [
                            "eid116",
                            "textShadow.offsetV",
                            0,
                            0,
                            "linear",
                            "${get_one}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid259",
                            "width",
                            15000,
                            0,
                            "linear",
                            "${Text4}",
                            '209px',
                            '209px'
                        ],
                        [
                            "eid223",
                            "top",
                            10000,
                            1000,
                            "linear",
                            "${insurgent}",
                            '57px',
                            '58px'
                        ],
                        [
                            "eid262",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${Text3}",
                            'block',
                            'block'
                        ],
                        [
                            "eid272",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${chicago}",
                            'block',
                            'block'
                        ],
                        [
                            "eid225",
                            "top",
                            10000,
                            1000,
                            "linear",
                            "${get_one}",
                            '57px',
                            '58px'
                        ],
                        [
                            "eid227",
                            "top",
                            10000,
                            1000,
                            "linear",
                            "${dprice}",
                            '303px',
                            '304px'
                        ],
                        [
                            "eid245",
                            "top",
                            0,
                            0,
                            "linear",
                            "${pack3}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid266",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${insurgent}",
                            'block',
                            'block'
                        ],
                        [
                            "eid93",
                            "opacity",
                            4000,
                            1000,
                            "linear",
                            "${get_one}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid233",
                            "top",
                            10000,
                            1000,
                            "linear",
                            "${iprice}",
                            '303px',
                            '304px'
                        ],
                        [
                            "eid231",
                            "top",
                            10000,
                            1000,
                            "linear",
                            "${aprice}",
                            '303px',
                            '304px'
                        ],
                        [
                            "eid244",
                            "left",
                            0,
                            0,
                            "linear",
                            "${pack3}",
                            '-273px',
                            '-273px'
                        ],
                        [
                            "eid253",
                            "left",
                            10000,
                            1000,
                            "linear",
                            "${pack3}",
                            '-273px',
                            '542px'
                        ],
                        [
                            "eid230",
                            "left",
                            10000,
                            1000,
                            "linear",
                            "${aprice}",
                            '716px',
                            '1605px'
                        ],
                        [
                            "eid243",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Text4}",
                            '196px',
                            '196px'
                        ],
                        [
                            "eid258",
                            "top",
                            15000,
                            0,
                            "linear",
                            "${Text4}",
                            '196px',
                            '196px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("edge_edgeActions.js");
})("booksedge");
