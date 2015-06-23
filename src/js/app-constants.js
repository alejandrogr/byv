var BUILDINGS = [
	{
		"name" : "Castillo",
		"desc" : "Mejora tus soldados y consigue oro",
		"img" : "castel.jpg",
		"levels" : [
			{
				"level" : 1,
				"cost" : ["3MA","3PI"],
				"profit" : ["3OR"],
				"action" : "Recluta un soldado por 10OR",
				"inAction" : ""
			},
			{
				"level" : 2,
				"cost" : ["3MA","3PI"],
				"profit" : ["4OR"],
				"action" : "Recluta un soldado por 10OR",
				"inAction" : ""
			},
			{
				"level" : 3,
				"cost" : ["5PI","3ME"],
				"profit" : ["5OR"],
				"action" : "Recluta un soldado por 9OR",
				"inAction" : "Coloca un soldado en el tablero de comercio"
			},
			{
				"level" : 4,
				"cost" : ["5PI","5ME"],
				"profit" : ["6OR"],
				"action" : "Recluta un soldado por 8OR",
				"inAction" : "Tus soldados obtienen +1 de área de influencia"
			}
		]
	},
	{
		"name" : "Aserradero",
		"desc" : "Consigue madera y oro",
		"img" : "lumbermill.png",
		"levels" : [
			{
				"level" : 1,
				"cost" : ["2MA","1PI"],
				"profit" : ["1MA","1OR"],
				"action" : "",
				"inAction" : ""
			},
			{
				"level" : 2,
				"cost" : ["4MA","2PI"],
				"profit" : ["2OR","1OR"],
				"action" : "",
				"inAction" : ""
			},
			{
				"level" : 3,
				"cost" : ["5MA","2PI","2ME"],
				"profit" : ["3MA","2OR"],
				"action" : "Avanza 1 una caravana del tablero por 2MA",
				"inAction" : "+1OR por cada MA que vendas o que compres"
			},
			{
				"level" : 4,
				"cost" : ["6MA","5ME","2PI"],
				"profit" : ["4MA","2OR"],
				"action" : "Avanza 1 una caravana del tablero por 2MA",
				"inAction" : "Puedes fijar el precio de la MA al que queiras"
			}
		]
	},
	{
		"name" : "Cantera",
		"desc" : "Consigue piedra y oro",
		"img" : "lumbermill.png",
		"levels" : [
			{
				"level" : 1,
				"cost" : ["2PI","1MA"],
				"profit" : ["1PI","1OR"],
				"action" : "",
				"inAction" : ""
			},
			{
				"level" : 2,
				"cost" : ["4PI","2MA"],
				"profit" : ["2PI","1OR"],
				"action" : "",
				"inAction" : ""
			},
			{
				"level" : 3,
				"cost" : ["5PI","2MA","2ME"],
				"profit" : ["3PI","2OR"],
				"action" : "",
				"inAction" : "+1OR por cada PI que vendas o que compres"
			},
			{
				"level" : 4,
				"cost" : ["6PI","5ME","2MA"],
				"profit" : ["4PI","2OR"],
				"action" : "Amplia cualquier edificio por 6x nivel en PI",
				"inAction" : "Puedes fijar el precio de la PI al que queiras"
			}
		]
	},
	{
		"name" : "Mina",
		"desc" : "Consigue metal y oro",
		"img" : "lumbermill.png",
		"levels" : [
			{
				"level" : 1,
				"cost" : ["2PI","1MA"],
				"profit" : ["1ME","1OR"],
				"action" : "",
				"inAction" : ""
			},
			{
				"level" : 2,
				"cost" : ["4PI","2MA"],
				"profit" : ["2ME","1OR"],
				"action" : "",
				"inAction" : ""
			},
			{
				"level" : 3,
				"cost" : ["5PI","2MA","2ME"],
				"profit" : ["3ME","2OR"],
				"action" : "",
				"inAction" : "+1OR por cada ME que vendas o que compres"
			},
			{
				"level" : 4,
				"cost" : ["6PI","5ME","2MA"],
				"profit" : ["4ME","2OR"],
				"action" : "",
				"inAction" : "Intercambia PI por ME cuando queiras"
			}
		]
	},
	{
		"name" : "Palacio",
		"desc" : "Consigue oro y emisarios",
		"img" : "lumbermill.png",
		"levels" : [
			{
				"level" : 1,
				"cost" : ["5PI"],
				"profit" : ["3OR"],
				"action" : "Recluta un emisario por 10OR",
				"inAction" : ""
			},
			{
				"level" : 2,
				"cost" : ["7PI"],
				"profit" : ["4OR"],
				"action" : "Recluta un emisario por 10OR",
				"inAction" : ""
			},
			{
				"level" : 3,
				"cost" : ["9PI","2ME",],
				"profit" : ["5OR"],
				"action" : "Recluta un emisario por 9OR",
				"inAction" : "Coloca un emisario en el tablero de comercio"
			},
			{
				"level" : 4,
				"cost" : ["10PI","5MA"],
				"profit" : ["6OR"],
				"action" : "Recluta un emisario por 5OR",
				"inAction" : "Tus emisarios te permiten modificar un segmento extra de precio"
			}
		]
	},
	{
		"name" : "Granja",
		"desc" : "Consigue alimentos, madera y salteadores",
		"img" : "lumbermill.png",
		"levels" : [
			{
				"level" : 1,
				"cost" : ["2MA","1AL"],
				"profit" : ["2AL","1MA"],
				"action" : "Recluta un salteador por 4AL",
				"inAction" : ""
			},
			{
				"level" : 2,
				"cost" : ["4MA","2AL"],
				"profit" : ["2AL","1MA"],
				"action" : "Recluta un salteador por 4AL",
				"inAction" : ""
			},
			{
				"level" : 3,
				"cost" : ["5MA","2AL","2PI"],
				"profit" : ["3AL","2MA"],
				"action" : "Recluta un salteador por 4AL",
				"inAction" : "+1OR por cada AL que vendas o que compre"
			},
			{
				"level" : 4,
				"cost" : ["7MA","7AL"],
				"profit" : ["4AL","2MA","1OR"],
				"action" : "Recluta un salteador por 4AL o Mueve un salteador una casilla por 1AL",
				"inAction" : "Puedes fijar el precio de los AL al que quieras"
			}
		]
	}
];
