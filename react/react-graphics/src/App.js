import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
// import * as d3 from "d3";

// import ClayForm, {
// 	ClayInput, ClayRadio,
// 	ClayRadioGroup, ClaySelect
// } from '@clayui/form';
// import ClayButton from "@clayui/button";

// const spritemap = <img alt="" src="/o/estatisticas-portlet/images/download.svg" />;
// const spritalerta = <img alt="" src="/o/estatisticas-portlet/images/icon-alert.svg" />;

const App = () => {
  // const [showResultado, setShowResultado] = useState(false);
  // const data = [25, 30, 45, 60, 20];
  const [data, setData] = useState([
    {
      dataHora: 3,
      waterLevel: 12,
    },
    {
      dataHora: 14,
      waterLevel: 23,
    },
    {
      dataHora: 23,
      waterLevel: 34,
    },
    {
      dataHora: 36,
      waterLevel: 42,
    },
    {
      dataHora: 42,
      waterLevel: 50,
    },
  ]);

  const svgRef = useRef();

  const makeGraphic = () => {
    // console.log("que es data", data);

    const margin = { top: 20, right: 20, bottom: 50, left: 70 },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    var x = d3.scaleLinear().rangeRound([0, width]);

    var y = d3.scaleLinear().rangeRound([height, 0]);

    // var parseDate = d3.timeParse("%Y%m%d %H:%M"),
    //   bisectDate = d3.bisector(function (d) {
    //     return d.date;
    //   }).left,
    //   formatValue = d3.format(","),
    //   dateFormatter = d3.timeFormat("%d-%m-%y %H:%M");

    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // const dataset = [
    //   {
    //     dataHora: 3,
    //     waterLevel: 10,
    //   },
    //   {
    //     dataHora: 14,
    //     waterLevel: 20,
    //   },
    //   {
    //     dataHora: 23,
    //     waterLevel: 30,
    //   },
    //   {
    //     dataHora: 36,
    //     waterLevel: 40,
    //   },
    //   {
    //     dataHora: 42,
    //     waterLevel: 50,
    //   },
    // ];

    let line = d3
      .line()
      .x(function (d) {
        return x(d.dataHora);
      })
      .y(function (d) {
        return y(d.waterLevel);
      });

    data.forEach((d) => {
      d.dataHora = +d.dataHora;
      console.log("datahora each", d.dataHora);
      d.waterLevel = +d.waterLevel;
      console.log("waterlevel each", d.waterLevel);
    });

    x.domain(
      d3.extent(data, function (d) {
        return d.dataHora;
      })
    );
    y.domain([
      0,
      d3.max(data, function (d) {
        return d.waterLevel;
      }),
    ]);

    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    svg
      .append("text")
      .attr("transform", "translate("+ width + "," + (height + margin.bottom/2 )+ ")")
      .attr("fill", "red")
      .attr("text-anchor", "end")
      .text("Hours");

    svg.append("g").call(d3.axisLeft(y));

    svg
      .append("text")
      .attr("fill", "red")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Water levels");

    //this is what renders the line
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-linejoin", "round")
      .attr("d", line);

    // is to put width to the graphic line
    // .attr("stroke-width", "numero")
  };

  useEffect(() => {
    makeGraphic();
  }, []);

  /*
  useEffect(() => {
    console.log("que es data", data);

    const margin = { top: 80, right: 200, bottom: 60, left: 60 },
      width = 1000 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;
    // tooltip = { width: 130, height: 70, x: 10, y: -30 };

    // var x = d3.scaleTime().range([0, width]);

    // var y = d3.scaleLinear().range([height, 0]);

    var x = d3.scaleLinear().range([0, width]);

    var y = d3.scaleLinear().range([height, 0]);

    // var xAxis = d3.axisBottom(x).tickFormat(dateFormatter);

    // var yAxis = d3.axisLeft(y).tickFormat(d3.format(".2"));

    var parseDate = d3.timeParse("%Y%m%d %H:%M"),
      bisectDate = d3.bisector(function (d) {
        return d.date;
      }).left,
      formatValue = d3.format(","),
      dateFormatter = d3.timeFormat("%d-%m-%y %H:%M");

    // const svg = d3.select(svgRef.current).append("svg")
    // 	.attr("width", width + margin.left + margin.right)
    // 	.attr("height", height + margin.top + margin.bottom)
    // 	.append("g")
    // 	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("class", "line-chart");

    // var previsao = data.previsao;

    // if (previsao) {

    const dataset = [
      {
        dataHora: 3,
        waterLevel: 10,
      },
      {
        dataHora: 14,
        waterLevel: 20,
      },
      {
        dataHora: 23,
        waterLevel: 30,
      },
      {
        dataHora: 36,
        waterLevel: 40,
      },
      {
        dataHora: 42,
        waterLevel: 50,
      },
    ];

    // var myLine = d3.line()
    // 	.curve(d3.curveCardinal)
    // 	.x(function (d) {
    // 		console.log(d.dataHora)
    // 		return parseDate(d.dataHora)
    // 	})
    // 	.y(function (d) {
    // 		return d.waterLevel
    // 	});

    // youtube way
    // var myLine = d3.line()
    // 	.curve(d3.curveCardinal)
    // 	.x((value, index) => index * 50)
    // 	.y(value => 150 - value);

    // svg
    // 	// .append("path")
    // 	.selectAll("path")
    // 	.data([data])
    // 	.join("path")
    // 	.attr("class", "line")
    // 	.attr("d", value => myLine(value))
    // 	.attr("fill", "none")
    // 	.attr("stroke", "blue");

    // previsaoData.forEach(function (d) {
    // 	d.dataHora = parseDate(d.dataHora);
    // 	console.log("que es x en foreach", d.dataHora);
    // 	d.waterLevel = +d.waterLevel;
    // 	console.log("que es y en foreach", d.waterLevel);
    // });

    // previsaoData.sort(function (a, b) {
    // 	return a.date - b.date;
    // });

    // dataset.sort(function (a, b) {
    // 	return a.date - b.date;
    // });

    // var myLine = d3.line()
    // 	.curve(d3.curveCardinal)
    // 	.x((value, index) => {
    // 		//con parse da null
    // 		console.log("que es x", previsaoData[index].dataHora);
    // 		return previsaoData[index].dataHora
    // 	})
    // 	.y((value, index) => {
    // 		console.log("que es y", previsaoData[index].waterLevel);
    // 		return previsaoData[index].waterLevel
    // 	});

    var myLine = d3
      .line()
      .x(function (d) {
        return x(d.dataHora);
      })
      .y(function (d) {
        return y(d.waterLevel);
      });

    svg
      .data([data])
      .attr("d", myLine)
      .attr("fill", "none")
      .attr("stroke", "blue");

    // }
  }, [data]);

  */

  return (
    <React.Fragment>
      {/* graffic of point */}

      <svg ref={svgRef}></svg>
      <br />
      <button onClick={() => setData(data.map((value) => value + 5))}>
        Update data
      </button>
      <button onClick={() => setData(data.filter((value) => value <= 35))}>
        Filter data
      </button>
    </React.Fragment>
  );
};

// export default MaregrafoComponente;
export default App;
