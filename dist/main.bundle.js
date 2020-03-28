webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sw-table-wrapper {\r\n    display: block;\r\n    margin-bottom: 100px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Aktieöversikt 2020-03-28</h1>\r\n\r\n<a routerLink=\"/Table\">Tables</a>\r\n<a routerLink=\"/Chart\">Charts</a>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stocks_service__ = __webpack_require__("../../../../../src/app/stocks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chart_component_chart_component_component__ = __webpack_require__("../../../../../src/app/chart-component/chart-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_highcharts__ = __webpack_require__("../../../../angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_4_data_table_src_index__ = __webpack_require__("../../../../angular-4-data-table/src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__table_table_component__ = __webpack_require__("../../../../../src/app/table/table.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__chart_component_chart_component_component__["a" /* ChartComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_8__table_table_component__["a" /* TableComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular_highcharts__["b" /* ChartModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular_4_data_table_src_index__["a" /* DataTableModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */].forRoot([
                { path: 'Table', component: __WEBPACK_IMPORTED_MODULE_8__table_table_component__["a" /* TableComponent */] },
                { path: 'Chart', component: __WEBPACK_IMPORTED_MODULE_4__chart_component_chart_component_component__["a" /* ChartComponentComponent */] },
                { path: '', component: __WEBPACK_IMPORTED_MODULE_8__table_table_component__["a" /* TableComponent */] }
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_2__stocks_service__["a" /* StocksService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chart-component/chart-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chart-container {\r\n    margin: 10px 0px 10px 0px;\r\n    border: 1px solid #DDD;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chart-component/chart-component.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <img (click)=\"clickEvent($event)\" width=\"100%\" src={{chartOne}}>\r\n<img width=\"100%\" src={{chartTwo}}> -->\r\n<h2>Diagram</h2>\r\n  \r\n<div class=\"row\">\r\n    <div class=\"col-lg-6 col-xs-12\">\r\n      <button (click)=\"sortTotalCostStock()\" id=\"totalCostStockSortButton\">Sort</button>\r\n      <div class=\"chart-container box\" [chart]=\"totalCostChart\"></div>\r\n    </div>\r\n    <div class=\"col-lg-6 col-xs-12\">\r\n      <button (click)=\"sortTotalValueStock()\" id=\"totalValueStockSortButton\">Sort</button>\r\n      <div class=\"chart-container box\" [chart]=\"totalValueChart\"></div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-xs-12\">\r\n      <button (click)=\"sortTotalCostIndustry()\" id=\"totalCostIndustrySortButton\">Sort</button>\r\n      <div class=\"chart-container box\" [chart]=\"totalCostPerIndustryChart\"></div>\r\n    </div>\r\n    <div class=\"col-lg-6 col-xs-12\">\r\n        <button (click)=\"sortTotalValueIndustry()\" id=\"totalValueIndustrySortButton\">Sort</button>\r\n      <div class=\"chart-container box\" [chart]=\"totalValuePerIndustryChart\"></div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-xs-12\">\r\n      <div class=\"chart-container box\" [chart]=\"totalCostPerStockMarket\"></div>\r\n    </div>\r\n    <div class=\"col-lg-6 col-xs-12\">\r\n      <div class=\"chart-container box\" [chart]=\"totalValuePerStockMarket\"></div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-xs-12\">\r\n      <div class=\"chart-container box\" [chart]=\"dividendPercentageChartByCode\"></div>\r\n    </div>\r\n    <div class=\"col-lg-6 col-xs-12\">\r\n      <div class=\"chart-container box\" [chart]=\"yearlyDividendSumShare\"></div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/chart-component/chart-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_highcharts__ = __webpack_require__("../../../../angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stocks_service__ = __webpack_require__("../../../../../src/app/stocks.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChartComponentComponent = (function () {
    function ChartComponentComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.chartBackgroundColor = "#c2c3c4";
        this.sortedByNameStockCost = true;
        this.sortedByNameStockValue = true;
        this.sortedByNameIndustryCost = true;
        this.sortedByNameIndustryValue = true;
        this.totalCostStockData = [];
        this.totalValueStockData = [];
        this.totalCostIndustryData = [];
        this.totalValueIndustryData = [];
        this.totalCostMarketData = [];
        this.totalValueMarketData = [];
        this.yearlyDividendSumShareData = [];
        /*
        *
        *
        *
        * TOTALKOSTNAD PER AKTIE
        *
        *
        */
        this.totalCostChart = new __WEBPACK_IMPORTED_MODULE_1_angular_highcharts__["a" /* Chart */]({
            chart: {
                type: 'pie',
                backgroundColor: this.chartBackgroundColor
            },
            title: {
                text: 'Totalkostnad per aktie'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: 'black'
                        }
                    },
                    tooltip: {
                        pointFormat: '{point.y:.2f} kr'
                    }
                }
            },
            series: []
        });
        /*
        *
        *
        *
        * TOTALVÄRDE PER AKTIE
        *
        *
        */
        this.totalValueChart = new __WEBPACK_IMPORTED_MODULE_1_angular_highcharts__["a" /* Chart */]({
            chart: {
                type: 'pie',
                backgroundColor: this.chartBackgroundColor
            },
            title: {
                text: 'Totalvärde per aktie'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: 'black'
                        }
                    },
                    tooltip: {
                        pointFormat: '{point.y:.2f} kr'
                    }
                }
            },
            series: []
        });
        /*
        *
        *
        *
        * TOTALKOSTNAD PER BRANSCH
        *
        *
        */
        this.totalCostPerIndustryChart = new __WEBPACK_IMPORTED_MODULE_1_angular_highcharts__["a" /* Chart */]({
            chart: {
                type: 'pie',
                backgroundColor: this.chartBackgroundColor
            },
            title: {
                text: 'Totalkostnad per bransch'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: 'black'
                        }
                    },
                    tooltip: {
                        pointFormat: '{point.y:.2f} kr'
                    }
                }
            },
            series: []
        });
        /*
        *
        *
        *
        * TOTALVÄRDE PER BRANSCH
        *
        *
        */
        this.totalValuePerIndustryChart = new __WEBPACK_IMPORTED_MODULE_1_angular_highcharts__["a" /* Chart */]({
            chart: {
                type: 'pie',
                backgroundColor: this.chartBackgroundColor
            },
            title: {
                text: 'Totalvärde per bransch'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: 'black'
                        }
                    },
                    tooltip: {
                        pointFormat: '{point.y:.2f} kr'
                    }
                }
            },
            series: []
        });
        /*
      *
      *
      *
      * Andel nuvarande värde som ger utdelning (uträknat genom kod)
      *
      *
      */
        this.dividendPercentageChartByCode = new __WEBPACK_IMPORTED_MODULE_1_angular_highcharts__["a" /* Chart */]({
            chart: {
                type: 'pie',
                backgroundColor: this.chartBackgroundColor
            },
            title: {
                text: 'Andel nuvarande värde som ger utdelning'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: 'black'
                        }
                    },
                    tooltip: {
                        pointFormat: '{point.y:.2f} kr'
                    }
                }
            },
            series: [{
                    data: [{
                            name: 'Ger inte utdelning',
                            y: (this.dataService.totalValueNonDividendStocks)
                        }, {
                            name: 'Ger utdelning',
                            y: (this.dataService.totalValueDividendStocks)
                        }
                    ]
                }]
        });
        /*
          *
          *
          *
          * TOTALVÄRDE PER BÖRS
          *
          *
          */
        this.totalValuePerStockMarket = new __WEBPACK_IMPORTED_MODULE_1_angular_highcharts__["a" /* Chart */]({
            chart: {
                type: 'pie',
                backgroundColor: this.chartBackgroundColor
            },
            title: {
                text: 'Totalvärde per börs'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: 'black'
                        }
                    },
                    tooltip: {
                        pointFormat: '{point.y:.2f} kr'
                    }
                }
            },
            series: []
        });
        /*
          *
          *
          *
          * TOTALKOSTNAD PER BÖRS
          *
          *
          */
        this.totalCostPerStockMarket = new __WEBPACK_IMPORTED_MODULE_1_angular_highcharts__["a" /* Chart */]({
            chart: {
                type: 'pie',
                backgroundColor: this.chartBackgroundColor
            },
            title: {
                text: 'Totalkostnad per börs'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: 'black'
                        }
                    },
                    tooltip: {
                        pointFormat: '{point.y:.2f} kr'
                    }
                }
            },
            series: []
        });
        /*
          *
          *
          *
          * ANDEL AV TOTAL ÅRLIG UTDELNING
          *
          *
          */
        this.yearlyDividendSumShare = new __WEBPACK_IMPORTED_MODULE_1_angular_highcharts__["a" /* Chart */]({
            chart: {
                type: 'pie',
                backgroundColor: this.chartBackgroundColor
            },
            title: {
                text: 'Förväntad årlig utdelning per aktie'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: 'black'
                        }
                    },
                    tooltip: {
                        pointFormat: '{point.y:.2f} kr'
                    }
                }
            },
            series: []
        });
        this.dataService.stocks.sort(function (a, b) { return a.name < b.name ? -1 : a.name > b.name ? 1 : 0; });
        this.dataService.industries.sort(function (a, b) { return a.name < b.name ? -1 : a.name > b.name ? 1 : 0; });
        //TotalCostStock
        this.dataService.stocks.forEach(function (element) {
            var tempObject = { name: element.name, y: element.boughtFor * element.amount };
            _this.totalCostStockData.push(tempObject);
        });
        this.totalCostChart.addSerie({
            data: this.totalCostStockData
        });
        //TotalValueStock
        this.dataService.stocks.forEach(function (element) {
            var tempObject = { name: element.name, y: element.currentPrice * element.amount };
            _this.totalValueStockData.push(tempObject);
        });
        this.totalValueChart.addSerie({
            data: this.totalValueStockData
        });
        //TotalCostIndustry
        this.dataService.industries.forEach(function (element) {
            var tempObject = { name: element.name, y: element.totalCost };
            _this.totalCostIndustryData.push(tempObject);
        });
        this.totalCostPerIndustryChart.addSerie({
            data: this.totalCostIndustryData
        });
        //TotalValueIndustry
        this.dataService.industries.forEach(function (element) {
            var tempObject = { name: element.name, y: element.totalValue };
            _this.totalValueIndustryData.push(tempObject);
        });
        this.totalValuePerIndustryChart.addSerie({
            data: this.totalValueIndustryData
        });
        //TotalCostMarket
        this.dataService.stockMarkets.forEach(function (element) {
            var tempObject = { name: element.name, y: element.totalCost };
            _this.totalCostMarketData.push(tempObject);
        });
        this.totalCostPerStockMarket.addSerie({
            data: this.totalCostMarketData
        });
        //TotalValueMarket
        this.dataService.stockMarkets.forEach(function (element) {
            var tempObject = { name: element.name, y: element.totalValue };
            _this.totalValueMarketData.push(tempObject);
        });
        this.totalValuePerStockMarket.addSerie({
            data: this.totalValueMarketData
        });
        //YearlyDividendSumShare
        this.dataService.stocks.forEach(function (element) {
            if (element.dividendYearlySum != 0) {
                var tempObject = { name: element.name, y: element.dividendYearlySum };
                _this.yearlyDividendSumShareData.push(tempObject);
            }
        });
        this.yearlyDividendSumShareData.sort(function (a, b) { return a.y < b.y ? -1 : a.y > b.y ? 1 : 0; });
        this.yearlyDividendSumShare.addSerie({
            data: this.yearlyDividendSumShareData
        });
    }
    ChartComponentComponent.prototype.ngOnInit = function () {
    };
    ChartComponentComponent.prototype.sortByValue = function (list) {
        if (list === void 0) { list = this.totalCostStockData; }
        list.sort(function (a, b) { return a.y < b.y ? -1 : a.y > b.y ? 1 : 0; });
        return list;
    };
    ChartComponentComponent.prototype.sortByName = function (list) {
        if (list === void 0) { list = this.totalCostStockData; }
        list.sort(function (a, b) { return a.name < b.name ? -1 : a.name > b.name ? 1 : 0; });
        return list;
    };
    ChartComponentComponent.prototype.sortTotalCostStock = function () {
        if (this.sortedByNameStockCost) {
            this.totalCostStockData = this.sortByValue(this.totalCostStockData);
        }
        else if (!this.sortedByNameStockCost) {
            this.totalCostStockData = this.sortByName(this.totalCostStockData);
        }
        this.totalCostChart.removeSerie(0);
        this.totalCostChart.addSerie({
            data: this.totalCostStockData
        });
        this.sortedByNameStockCost = !this.sortedByNameStockCost;
    };
    ChartComponentComponent.prototype.sortTotalValueStock = function () {
        if (this.sortedByNameStockValue) {
            this.totalValueStockData = this.sortByValue(this.totalValueStockData);
        }
        else if (!this.sortedByNameStockValue) {
            this.totalValueStockData = this.sortByName(this.totalValueStockData);
        }
        this.totalValueChart.removeSerie(0);
        this.totalValueChart.addSerie({
            data: this.totalValueStockData
        });
        this.sortedByNameStockValue = !this.sortedByNameStockValue;
    };
    ChartComponentComponent.prototype.sortTotalCostIndustry = function () {
        if (this.sortedByNameIndustryCost) {
            this.totalCostIndustryData = this.sortByValue(this.totalCostIndustryData);
        }
        else if (!this.sortedByNameIndustryCost) {
            this.totalCostIndustryData = this.sortByName(this.totalCostIndustryData);
        }
        this.totalCostPerIndustryChart.removeSerie(0);
        this.totalCostPerIndustryChart.addSerie({
            data: this.totalCostIndustryData
        });
        this.sortedByNameIndustryCost = !this.sortedByNameIndustryCost;
    };
    ChartComponentComponent.prototype.sortTotalValueIndustry = function () {
        if (this.sortedByNameIndustryValue) {
            this.totalValueIndustryData = this.sortByValue(this.totalValueIndustryData);
        }
        else if (!this.sortedByNameIndustryValue) {
            this.totalValueIndustryData = this.sortByName(this.totalValueIndustryData);
        }
        this.totalValuePerIndustryChart.removeSerie(0);
        this.totalValuePerIndustryChart.addSerie({
            data: this.totalValueIndustryData
        });
        this.sortedByNameIndustryValue = !this.sortedByNameIndustryValue;
    };
    return ChartComponentComponent;
}());
ChartComponentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-chart-component',
        template: __webpack_require__("../../../../../src/app/chart-component/chart-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chart-component/chart-component.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__stocks_service__["a" /* StocksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__stocks_service__["a" /* StocksService */]) === "function" && _a || Object])
], ChartComponentComponent);

var _a;
//# sourceMappingURL=chart-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/stocks.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StocksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StocksService = (function () {
    function StocksService() {
        var _this = this;
        this.APIKey = "0DTMFM8K821YG008";
        this.totalCost = 0;
        this.totalValue = 0;
        this.totalDividend = 0;
        this.totalDividendSum = 0;
        this.totalDividendCost = 0;
        this.totalDividendValue = 0;
        this.totalValueDividendStocks = 0;
        this.totalValueNonDividendStocks = 0;
        this.annualDividend = 0;
        //Old stocks
        this.Actic = {
            name: "Actic Group",
            ticker: "ATIC",
            industry: "Dagligvaror",
            boughtFor: 52.62,
            amount: 17,
            currentPrice: 40.5,
            stockMarket: "Stockholmsbörsen (Small Cap)",
            dividend: 0.5,
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            dividendCost: 0,
            dividendValue: 0,
            dividendYearlySum: 0,
            totalDividend: 8.5,
            url: "https://www.avanza.se/aktier/om-aktien.html/742358/actic-group"
        };
        this.ClasOhlson = {
            name: "Clas Ohlson AB B",
            ticker: "CLAS B",
            industry: "Dagligvaror",
            boughtFor: 140.25,
            amount: 6,
            currentPrice: 89.0,
            stockMarket: "Stockholmsbörsen (Mid Cap)",
            dividend: 6.25,
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            dividendCost: 0,
            dividendValue: 0,
            dividendYearlySum: 0,
            totalDividend: 75,
            url: "https://www.avanza.se/aktier/om-aktien.html/5457/clas-ohlson-b"
        };
        this.Tesla = {
            name: "Tesla",
            ticker: "TSLA",
            industry: "Industrivaror & Tjänster",
            boughtFor: 1740.52,
            amount: 1,
            currentPrice: 8968,
            stockMarket: "NASDAQ",
            dividend: 0,
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            dividendCost: 0,
            dividendValue: 0,
            dividendYearlySum: 0,
            totalDividend: 0,
            url: "https://www.avanza.se/aktier/om-aktien.html/238449/tesla-inc"
        };
        //Currently own
        this.Acconeer = {
            name: "Acconeer",
            ticker: "ACCON",
            industry: "Informationsteknik",
            boughtFor: 19.528,
            amount: 270,
            currentPrice: 14.14,
            stockMarket: "First North Stockholm",
            dividend: 0.0,
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            dividendCost: 0,
            dividendValue: 0,
            dividendYearlySum: 0,
            totalDividend: 0,
            url: "https://www.avanza.se/aktier/om-aktien.html/808452/acconeer"
        };
        this.Alibaba = {
            name: "Alibaba Group Holding Ltd",
            ticker: "BABA",
            industry: "Övrigt",
            boughtFor: 1292.155,
            amount: 2,
            currentPrice: 1868.0,
            stockMarket: "NYSE",
            dividend: 0,
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            dividendCost: 0,
            dividendValue: 0,
            dividendYearlySum: 0,
            totalDividend: 0,
            url: "https://www.avanza.se/aktier/om-aktien.html/506278/alibaba-group-holding-ltd"
        };
        this.Amazon = {
            name: "Amazon",
            ticker: "AMZN",
            industry: "Övrigt",
            boughtFor: 8756.88,
            amount: 1,
            currentPrice: 18818,
            stockMarket: "NASDAQ",
            dividend: 0,
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            dividendCost: 0,
            dividendValue: 0,
            dividendYearlySum: 0,
            totalDividend: 0,
            url: "https://www.avanza.se/aktier/om-aktien.html/3986/amazon-com-inc"
        };
        this.AtlasCopco = {
            name: "Atlas Copco B",
            ticker: "ATCO B",
            industry: "Industrivaror & Tjänster",
            boughtFor: 212.54,
            amount: 17,
            currentPrice: 272.8,
            stockMarket: "Stockholmsbörsen (Large Cap)",
            dividend: 7,
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            dividendCost: 0,
            dividendValue: 0,
            dividendYearlySum: 0,
            totalDividend: 196.1,
            url: "https://www.avanza.se/aktier/om-aktien.html/5235/atlas-copco-b"
        };
        this.Avanza = {
            name: "Avanza ",
            ticker: "AZA",
            industry: "Finans & Fastighet",
            boughtFor: 69.91,
            amount: 58,
            currentPrice: 80.0,
            stockMarket: "Stockholmsbörsen (Large Cap)",
            dividend: 2.1,
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            dividendCost: 0,
            dividendValue: 0,
            dividendYearlySum: 0,
            totalDividend: 304,
            url: "https://www.avanza.se/aktier/om-aktien.html/5361/avanza-bank-holding"
        };
        this.Bahnhof = {
            name: "Bahnhof B",
            ticker: "BAHN B",
            industry: "Telekomoperatörer",
            boughtFor: 22.84,
            amount: 140,
            currentPrice: 22.45,
            stockMarket: "Aktietorget",
            dividend: 0.6,
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            dividendCost: 0,
            dividendValue: 0,
            dividendYearlySum: 0,
            totalDividend: 104,
            url: "https://www.avanza.se/aktier/om-aktien.html/106733/bahnhof-b"
        };
        this.BillerudKorsnas = {
            name: "BillerudKorsnäs",
            ticker: "BILL",
            industry: "Material",
            boughtFor: 121.48,
            amount: 41,
            currentPrice: 103.2,
            stockMarket: "Stockholmsbörsen (Large Cap)",
            dividend: 4.3,
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            dividendCost: 0,
            dividendValue: 0,
            dividendYearlySum: 0,
            totalDividend: 284.55,
            url: "https://www.avanza.se/aktier/om-aktien.html/5556/billerudkorsnas"
        };
        this.Cloetta = {
            name: "Cloetta",
            ticker: "CLA B",
            industry: "Sällanköpvaror & Tjänster",
            boughtFor: 28,
            amount: 15,
            currentPrice: 22.3,
            stockMarket: "Stockholmsbörsen (Large Cap)",
            dividend: 0.75,
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            dividendCost: 0,
            dividendValue: 0,
            dividendYearlySum: 0,
            totalDividend: 37.5,
            url: "https://www.avanza.se/aktier/om-aktien.html/163148/cloetta-b"
        };
        this.Epiroc = {
            name: "Epiroc",
            ticker: "EPI B",
            industry: "Industrivaror & Tjänster",
            boughtFor: 85.42,
            amount: 55,
            currentPrice: 93.54,
            stockMarket: "Stockholmsbörsen (Large Cap)",
            dividend: 2.4,
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            dividendCost: 0,
            dividendValue: 0,
            dividendYearlySum: 0,
            totalDividend: 67.2,
            url: "https://www.avanza.se/aktier/om-aktien.html/861431/epiroc-b"
        };
        this.Handelsbanken = {
            name: "Handelsbanken",
            ticker: "SHB B",
            industry: "Finans & Fastighet",
            boughtFor: 97.86,
            amount: 56,
            currentPrice: 82.94,
            stockMarket: "Stockholmsbörsen (Large Cap)",
            dividend: 5.5,
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            dividendCost: 0,
            dividendValue: 0,
            dividendYearlySum: 0,
            totalDividend: 308.5,
            url: "https://www.avanza.se/aktier/om-aktien.html/5265/handelsbanken-b"
        };
        this.Hovding = {
            name: "Hövding Sverige",
            ticker: "HOVD",
            industry: "Sällanköpvaror & Tjänster",
            boughtFor: 12.69,
            amount: 105,
            currentPrice: 15.7,
            stockMarket: "First North Stockholm",
            dividend: 0,
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            dividendCost: 0,
            dividendValue: 0,
            dividendYearlySum: 0,
            totalDividend: 0,
            url: "https://www.avanza.se/aktier/om-aktien.html/572376/hovding-sverige"
        };
        this.ICA = {
            name: "ICA Gruppen",
            ticker: "ICA",
            industry: "Dagligvaror",
            boughtFor: 298.19,
            amount: 11,
            currentPrice: 403.8,
            stockMarket: "Stockholmsbörsen (Large Cap)",
            dividend: 11.5,
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            dividendCost: 0,
            dividendValue: 0,
            dividendYearlySum: 0,
            totalDividend: 203.5,
            url: "https://www.avanza.se/aktier/om-aktien.html/31607/ica-gruppen"
        };
        this.JNJ = {
            name: "Johnson & Johnson",
            ticker: "JNJ",
            industry: "Hälsa",
            boughtFor: 1172.5,
            amount: 2,
            currentPrice: 1221.0,
            stockMarket: "NYSE",
            dividend: 49.53,
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            dividendCost: 0,
            dividendValue: 0,
            dividendYearlySum: 0,
            totalDividend: 69.9,
            url: "https://www.avanza.se/aktier/om-aktien.html/3666/johnson---johnson"
        };
        this.Kopparbergs = {
            name: "Kopparbergs",
            ticker: "KOBR MTF B",
            industry: "Dagligvaror",
            boughtFor: 233.15,
            amount: 10,
            currentPrice: 115.0,
            stockMarket: "Nordic MTF",
            dividend: 5.9,
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            dividendCost: 0,
            dividendValue: 0,
            dividendYearlySum: 0,
            totalDividend: 150,
            url: "https://www.avanza.se/aktier/om-aktien.html/13477/kopparbergs-b"
        };
        this.Match = {
            name: "Match Group Inc",
            ticker: "MTCH",
            industry: "Övrigt",
            boughtFor: 714.0,
            amount: 5,
            currentPrice: 618.7,
            stockMarket: "NASDAQ",
            dividend: 0,
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            dividendCost: 0,
            dividendValue: 0,
            dividendYearlySum: 0,
            totalDividend: 0,
            url: "https://www.avanza.se/aktier/om-aktien.html/608456/match-group-inc"
        };
        /*MTG = {
          name: 'Modern Times Group',
          ticker: 'MTG B',
          industry: 'Dagligvaror',
          boughtFor: 306.93,
          amount: 14,
          currentPrice: 334.6,
          stockMarket: 'Stockholmsbörsen (Large Cap)',
          dividend: 6.5,
          totalCost: 0,
          totalValue: 0,
          yield: 0,
          dividendCost: 0,
          dividendValue: 0,
          dividendYearlySum: 0,
          totalDividend: 12,
          url: "https://www.avanza.se/aktier/om-aktien.html/5438/modern-times-group-b"
        }*/
        this.MTG = {
            name: "Modern Times Group",
            ticker: "MTG B",
            industry: "Dagligvaror",
            boughtFor: 95.2,
            amount: 67,
            currentPrice: 71.2,
            stockMarket: "Stockholmsbörsen (Large Cap)",
            dividend: 0,
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            dividendCost: 0,
            dividendValue: 0,
            dividendYearlySum: 0,
            totalDividend: 12,
            url: "https://www.avanza.se/aktier/om-aktien.html/5438/modern-times-group-b"
        };
        this.Mycronic = {
            name: "Mycronic",
            ticker: "MYCR",
            industry: "Industrivaror & Tjänster",
            boughtFor: 93.04,
            amount: 27,
            currentPrice: 115.1,
            stockMarket: "Stockholmsbörsen (Mid Cap)",
            dividend: 3,
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            dividendCost: 0,
            dividendValue: 0,
            dividendYearlySum: 0,
            totalDividend: 138.5,
            url: "https://www.avanza.se/aktier/om-aktien.html/5466/mycronic"
        };
        this.NVIDIA = {
            name: "NVIDIA Corp",
            ticker: "NVDA",
            industry: "Informationsteknik",
            boughtFor: 1101.83,
            amount: 2,
            currentPrice: 2503.0,
            stockMarket: "NASDAQ",
            dividend: 5.79,
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            dividendCost: 0,
            dividendValue: 0,
            dividendYearlySum: 0,
            totalDividend: 23.87,
            url: "https://www.avanza.se/aktier/om-aktien.html/4478/nvidia-corp"
        };
        this.Peab = {
            name: "Peab B",
            ticker: "PEAB B",
            industry: "Industrivaror & Tjänster",
            boughtFor: 74.25,
            amount: 78,
            currentPrice: 68.15,
            stockMarket: "Stockholmsbörsen (Large Cap)",
            dividend: 4.2,
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            dividendCost: 0,
            dividendValue: 0,
            dividendYearlySum: 0,
            totalDividend: 356.4,
            url: "https://www.avanza.se/aktier/om-aktien.html/5330/peab-b"
        };
        this.Starbreeze = {
            name: "Starbreeze B",
            ticker: "STAR B",
            industry: "Informationsteknik",
            boughtFor: 7.75,
            amount: 200,
            currentPrice: 1.303,
            stockMarket: "First North Stockholm",
            dividend: 0,
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            dividendCost: 0,
            dividendValue: 0,
            dividendYearlySum: 0,
            totalDividend: 0,
            url: "https://www.avanza.se/aktier/om-aktien.html/5528/starbreeze-b"
        };
        this.Tesla2 = {
            name: "Tesla",
            ticker: "TSLA",
            industry: "Industrivaror & Tjänster",
            boughtFor: 5922.0,
            amount: 1,
            currentPrice: 5094,
            stockMarket: "NASDAQ",
            dividend: 0,
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            dividendCost: 0,
            dividendValue: 0,
            dividendYearlySum: 0,
            totalDividend: 0,
            url: "https://www.avanza.se/aktier/om-aktien.html/238449/tesla-inc"
        };
        this.Tobii = {
            name: "Tobii",
            ticker: "TOBII",
            industry: "Informationsteknik",
            boughtFor: 35.6,
            amount: 141,
            currentPrice: 23.74,
            stockMarket: "Stockholmsbörsen (Mid Cap)",
            dividend: 0,
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            dividendCost: 0,
            dividendValue: 0,
            dividendYearlySum: 0,
            totalDividend: 0,
            url: "https://www.avanza.se/aktier/om-aktien.html/556803/tobii"
        };
        this.stocks = [
            this.Acconeer,
            this.Alibaba,
            this.Amazon,
            this.AtlasCopco,
            this.Avanza,
            this.Bahnhof,
            this.BillerudKorsnas,
            this.Cloetta,
            this.Epiroc,
            this.Handelsbanken,
            this.Hovding,
            this.ICA,
            this.JNJ,
            this.Kopparbergs,
            this.Match,
            this.MTG,
            this.Mycronic,
            this.NVIDIA,
            this.Peab,
            this.Starbreeze,
            this.Tesla2,
            this.Tobii
        ];
        this.oldStocks = [this.Actic, this.ClasOhlson, this.Tesla];
        /* Branscher */
        this.Dagligvaror = {
            name: "Dagligvaror",
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            amount: 0,
            portion: 0
        };
        this.Industrivaror = {
            name: "Industrivaror & Tjänster",
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            amount: 0,
            portion: 0
        };
        this.Informationsteknik = {
            name: "Informationsteknik",
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            amount: 0,
            portion: 0
        };
        this.Material = {
            name: "Material",
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            amount: 0,
            portion: 0
        };
        this.Sallankop = {
            name: "Sällanköpvaror & Tjänster",
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            amount: 0,
            portion: 0
        };
        this.FinansFastighet = {
            name: "Finans & Fastighet",
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            amount: 0,
            portion: 0
        };
        this.Telekom = {
            name: "Telekomoperatörer",
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            amount: 0,
            portion: 0
        };
        this.Energi = {
            name: "Energi",
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            amount: 0,
            portion: 0
        };
        this.Halsa = {
            name: "Hälsa",
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            amount: 0,
            portion: 0
        };
        this.Ovrigt = {
            name: "Övrigt",
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            amount: 0,
            portion: 0
        };
        this.industries = [
            this.Dagligvaror,
            this.Industrivaror,
            this.Informationsteknik,
            this.Material,
            this.Sallankop,
            this.FinansFastighet,
            this.Telekom,
            this.Energi,
            this.Halsa,
            this.Ovrigt
        ];
        /* Börser */
        this.Aktietorget = {
            name: "Aktietorget",
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            amount: 0,
            portion: 0
        };
        this.FirstNorth = {
            name: "First North Stockholm",
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            amount: 0,
            portion: 0
        };
        this.NASDAQ = {
            name: "NASDAQ",
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            amount: 0,
            portion: 0
        };
        this.NordicMTF = {
            name: "Nordic MTF",
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            amount: 0,
            portion: 0
        };
        this.NYSE = {
            name: "NYSE",
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            amount: 0,
            portion: 0
        };
        this.StockholmLarge = {
            name: "Stockholmsbörsen (Large Cap)",
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            amount: 0,
            portion: 0
        };
        this.StockholmMid = {
            name: "Stockholmsbörsen (Mid Cap)",
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            amount: 0,
            portion: 0
        };
        this.StockholmSmall = {
            name: "Stockholmsbörsen (Small Cap)",
            totalCost: 0,
            totalValue: 0,
            yield: 0,
            amount: 0,
            portion: 0
        };
        this.stockMarkets = [
            this.Aktietorget,
            this.FirstNorth,
            this.NASDAQ,
            this.NordicMTF,
            this.NYSE,
            this.StockholmLarge,
            this.StockholmMid,
            this.StockholmSmall
        ];
        this.DagligvarorTotalCost = this.Actic.boughtFor * this.Actic.amount +
            this.ClasOhlson.boughtFor * this.ClasOhlson.amount +
            this.ICA.boughtFor * this.ICA.amount +
            this.Kopparbergs.boughtFor * this.Kopparbergs.amount +
            this.MTG.boughtFor * this.MTG.amount;
        this.IndustrivarorTotalCost = this.AtlasCopco.boughtFor * this.AtlasCopco.amount +
            this.Mycronic.boughtFor * this.Mycronic.amount +
            this.Peab.boughtFor * this.Peab.amount;
        this.InformationsteknikTotalCost = this.Starbreeze.boughtFor * this.Starbreeze.amount +
            this.Tobii.boughtFor * this.Tobii.amount +
            this.Acconeer.boughtFor * this.Acconeer.amount;
        this.MaterialTotalCost = this.BillerudKorsnas.boughtFor * this.BillerudKorsnas.amount;
        this.SallankopTotalCost = this.Cloetta.boughtFor * this.Cloetta.amount +
            this.Hovding.boughtFor * this.Hovding.amount;
        this.FinansFastighetTotalCost = this.Avanza.boughtFor * this.Avanza.amount +
            this.Handelsbanken.boughtFor * this.Handelsbanken.amount;
        this.TelekomTotalCost = this.Bahnhof.boughtFor * this.Bahnhof.amount;
        this.EnergiTotalCost = 0;
        this.HalsaTotalCost = 0;
        this.OvrigtToalCost = this.Alibaba.boughtFor * this.Alibaba.amount +
            this.Amazon.boughtFor * this.Amazon.amount +
            this.NVIDIA.boughtFor * this.NVIDIA.amount +
            this.Tesla2.boughtFor * this.Tesla2.amount;
        this.DagligvarorTotalValue = this.Actic.currentPrice * this.Actic.amount +
            this.ClasOhlson.currentPrice * this.ClasOhlson.amount +
            this.ICA.currentPrice * this.ICA.amount +
            this.Kopparbergs.currentPrice * this.Kopparbergs.amount +
            this.MTG.currentPrice * this.MTG.amount;
        this.IndustrivarorTotalValue = this.AtlasCopco.currentPrice * this.AtlasCopco.amount +
            this.Mycronic.currentPrice * this.Mycronic.amount +
            this.Peab.currentPrice * this.Peab.amount;
        this.InformationsteknikTotalValue = this.Starbreeze.currentPrice * this.Starbreeze.amount +
            this.Tobii.currentPrice * this.Tobii.amount +
            this.Acconeer.currentPrice * this.Acconeer.amount;
        this.MaterialTotalValue = this.BillerudKorsnas.currentPrice * this.BillerudKorsnas.amount;
        this.SallankopTotalValue = this.Cloetta.currentPrice * this.Cloetta.amount +
            this.Hovding.currentPrice * this.Hovding.amount;
        this.FinansFastighetTotalValue = this.Avanza.currentPrice * this.Avanza.amount +
            this.Handelsbanken.currentPrice * this.Handelsbanken.amount;
        this.TelekomTotalValue = this.Bahnhof.currentPrice * this.Bahnhof.amount;
        this.EnergiTotalValue = 0;
        this.HalsaTotalValue = 0;
        this.OvrigtTotalValue = this.Alibaba.currentPrice * this.Alibaba.amount +
            this.Amazon.currentPrice * this.Amazon.amount +
            this.NVIDIA.currentPrice * this.NVIDIA.amount +
            this.Tesla2.currentPrice * this.Tesla2.amount;
        this.stocks.forEach(function (element) {
            element.totalCost = element.boughtFor * element.amount;
            element.totalValue = element.currentPrice * element.amount;
            element.yield =
                (element.currentPrice * element.amount) /
                    (element.boughtFor * element.amount) -
                    1;
            element.dividendCost = element.dividend / element.boughtFor;
            element.dividendValue = element.dividend / element.currentPrice;
            element.dividendYearlySum = element.dividend * element.amount;
            _this.totalCost += element.totalCost;
            _this.totalValue += element.totalValue;
            _this.totalDividend += element.dividend * element.amount;
            _this.totalDividendSum += element.totalDividend;
            if (element.dividend === 0) {
                _this.totalValueNonDividendStocks += element.totalValue;
            }
            else {
                _this.totalValueDividendStocks += element.totalValue;
            }
            _this.industries.forEach(function (industry) {
                if (element.industry === industry.name) {
                    industry.totalCost += element.totalCost;
                    industry.totalValue += element.totalValue;
                    industry.amount++;
                }
            });
            _this.stockMarkets.forEach(function (market) {
                if (element.stockMarket === market.name) {
                    market.totalCost += element.totalCost;
                    market.totalValue += element.totalValue;
                    market.amount++;
                }
            });
        });
        this.oldStocks.forEach(function (element) {
            element.totalCost = element.boughtFor * element.amount;
            element.totalValue = element.currentPrice * element.amount;
            element.yield =
                (element.currentPrice * element.amount) /
                    (element.boughtFor * element.amount) -
                    1;
            element.dividendCost = element.dividend / element.boughtFor;
            element.dividendValue = element.dividend / element.currentPrice;
            element.dividendYearlySum = element.dividend * element.amount;
        });
        this.industries.forEach(function (industry) {
            industry.yield = industry.totalValue / industry.totalCost - 1;
            industry.portion = industry.totalValue / _this.totalValue;
        });
        this.stockMarkets.forEach(function (market) {
            market.yield = market.totalValue / market.totalCost - 1;
            market.portion = market.totalValue / _this.totalValue;
        });
        this.totalDividendCost = this.totalDividend / this.totalCost;
        this.totalDividendValue = this.totalDividend / this.totalValue;
    }
    StocksService.prototype.stockToBuy = function () {
        return "The one with the best potential growth!";
    };
    return StocksService;
}());
StocksService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], StocksService);

//# sourceMappingURL=stocks.service.js.map

/***/ }),

/***/ "../../../../../src/app/table/table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<data-table id=\"stock-grid\"\r\n  headerTitle=\"Aktier\"\r\n  [items]=\"items\"\r\n  [itemCount]=\"itemCount\"\r\n  (reload)=\"reloadItems($event)\"\r\n\r\n  [limit]=\"itemCount\"\r\n  [indexColumn]=\"false\"\r\n\r\n  (rowClick)=\"rowClick($event)\"\r\n  (rowDoubleClick)=\"rowDoubleClick($event)\"\r\n  class=\"sw-table-wrapper\">\r\n\r\n  <data-table-column\r\n    [property]=\"'name'\"\r\n    [header]=\"'Namn'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'ticker'\"\r\n    [header]=\"'Ticker'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'industry'\"\r\n    [header]=\"'Bransch'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'boughtFor'\"\r\n    [header]=\"'Handlades för'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <div class=\"table-cell--right\"> {{item.boughtFor | number}} kr </div>\r\n    </ng-template>\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'amount'\"\r\n    [header]=\"'Antal'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <div class=\"table-cell--right\"> {{item.amount | number}} </div>\r\n    </ng-template>\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'totalCost'\"\r\n    [header]=\"'Totalkostnad'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <div class=\"table-cell--right\"> {{item.totalCost | number}} kr </div>\r\n    </ng-template>\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'currentPrice'\"\r\n    [header]=\"'Nuvarande pris'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <div class=\"table-cell--right\"> {{item.currentPrice | number}} kr </div>\r\n    </ng-template>\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'totalValue'\"\r\n    [header]=\"'Totalvärde'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <div class=\"table-cell--right\"> {{item.totalValue | number}} kr </div>\r\n    </ng-template>\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'yield'\"\r\n    [header]=\"'Avkastning'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <div class=\"table-cell--right\"> {{item.yield | percent}} </div>\r\n    </ng-template>\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'stockMarket'\"\r\n    [header]=\"'Börs'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'dividendCost'\"\r\n    [header]=\"'Utdelning (inköp)'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <div class=\"table-cell--right\"> {{item.dividendCost | percent}} </div>\r\n    </ng-template>\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'dividendValue'\"\r\n    [header]=\"'Utdelning (aktuellt)'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <div class=\"table-cell--right\"> {{item.dividendValue | percent}} </div>\r\n    </ng-template>\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'totalDividend'\"\r\n    [header]=\"'Total utdelning'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <div class=\"table-cell--right\"> {{item.totalDividend | number}} kr </div>\r\n    </ng-template>\r\n  </data-table-column>\r\n</data-table>\r\n\r\n<!-- OLD STOCKS -->\r\n<data-table id=\"old-stock-grid\"\r\n  headerTitle=\"Tidigare ägda aktier\"\r\n  [items]=\"oldItems\"\r\n  [itemCount]=\"oldItemCount\"\r\n  (reload)=\"reloadOldItems($event)\"\r\n\r\n  [limit]=\"oldItemCount\"\r\n  [indexColumn]=\"false\"\r\n\r\n  (rowClick)=\"rowClick($event)\"\r\n  (rowDoubleClick)=\"rowDoubleClick($event)\"\r\n  class=\"sw-table-wrapper\">\r\n\r\n  <data-table-column\r\n    [property]=\"'name'\"\r\n    [header]=\"'Namn'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'ticker'\"\r\n    [header]=\"'Ticker'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'industry'\"\r\n    [header]=\"'Bransch'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'boughtFor'\"\r\n    [header]=\"'Handlades för'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <div class=\"table-cell--right\"> {{item.boughtFor | number}} kr </div>\r\n    </ng-template>\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'amount'\"\r\n    [header]=\"'Antal'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <div class=\"table-cell--right\"> {{item.amount | number}} </div>\r\n    </ng-template>\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'totalCost'\"\r\n    [header]=\"'Totalkostnad'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <div class=\"table-cell--right\"> {{item.totalCost | number}} kr </div>\r\n    </ng-template>\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'currentPrice'\"\r\n    [header]=\"'Såldes för'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <div class=\"table-cell--right\"> {{item.currentPrice | number}} kr </div>\r\n    </ng-template>\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'totalValue'\"\r\n    [header]=\"'Totalvärde'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <div class=\"table-cell--right\"> {{item.totalValue | number}} kr </div>\r\n    </ng-template>\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'yield'\"\r\n    [header]=\"'Avkastning'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <div class=\"table-cell--right\"> {{item.yield | percent}} </div>\r\n    </ng-template>\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'stockMarket'\"\r\n    [header]=\"'Börs'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'dividendCost'\"\r\n    [header]=\"'Utdelning (inköp)'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <div class=\"table-cell--right\"> {{item.dividendCost | percent}} </div>\r\n    </ng-template>\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'dividendValue'\"\r\n    [header]=\"'Utdelning (aktuellt)'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <div class=\"table-cell--right\"> {{item.dividendValue | percent}} </div>\r\n    </ng-template>\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'totalDividend'\"\r\n    [header]=\"'Total utdelning'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <div class=\"table-cell--right\"> {{item.totalDividend | number}} kr </div>\r\n    </ng-template>\r\n  </data-table-column>\r\n</data-table>\r\n\r\n<data-table id=\"industry-grid\"\r\n  headerTitle=\"Branschöversikt\"\r\n  [items]=\"industryitems\"\r\n  [itemCount]=\"industryCount\"\r\n  (reload)=\"reloadIndustries($event)\"\r\n\r\n  [limit]=\"industryCount\"\r\n  [indexColumn]=\"false\"\r\n\r\n  (rowClick)=\"rowClickIndustry($event)\"\r\n  (rowDoubleClick)=\"rowDoubleClickIndustry($event)\"\r\n  class=\"sw-table-wrapper\">\r\n\r\n  <data-table-column\r\n    [property]=\"'name'\"\r\n    [header]=\"'Namn'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'totalCost'\"\r\n    [header]=\"'Totalkostnad'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <div class=\"table-cell--right\"> {{item.totalCost | number}} kr</div>\r\n    </ng-template>\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'totalValue'\"\r\n    [header]=\"'Nuvarande värde'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <div class=\"table-cell--right\"> {{item.totalValue | number}} kr </div>\r\n    </ng-template>\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'yield'\"\r\n    [header]=\"'Avkastning'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <div class=\"table-cell--right\"> {{item.yield | percent}} </div>\r\n    </ng-template>\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'amount'\"\r\n    [header]=\"'Antal bolag'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <div class=\"table-cell--right\"> {{item.amount | number}} </div>\r\n    </ng-template>\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'portion'\"\r\n    [header]=\"'Andel nuvarande värde'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <div class=\"table-cell--right\"> {{item.portion | percent}} </div>\r\n    </ng-template>\r\n  </data-table-column>\r\n</data-table>\r\n\r\n<data-table id=\"industry-grid\"\r\n  headerTitle=\"Börsöversikt\"\r\n  [items]=\"marketitems\"\r\n  [itemCount]=\"marketCount\"\r\n  (reload)=\"reloadMarkets($event)\"\r\n\r\n  [limit]=\"marketCount\"\r\n  [indexColumn]=\"false\"\r\n\r\n  (rowClick)=\"rowClickMarket($event)\"\r\n  (rowDoubleClick)=\"rowDoubleClickMarket($event)\"\r\n  class=\"sw-table-wrapper\">\r\n\r\n  <data-table-column\r\n    [property]=\"'name'\"\r\n    [header]=\"'Namn'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'totalCost'\"\r\n    [header]=\"'Totalkostnad'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <div class=\"table-cell--right\"> {{item.totalCost | number}} kr</div>\r\n    </ng-template>\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'totalValue'\"\r\n    [header]=\"'Nuvarande värde'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <div class=\"table-cell--right\"> {{item.totalValue | number}} kr </div>\r\n    </ng-template>\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'yield'\"\r\n    [header]=\"'Avkastning'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <div class=\"table-cell--right\"> {{item.yield | percent}} </div>\r\n    </ng-template>\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'amount'\"\r\n    [header]=\"'Antal bolag'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <div class=\"table-cell--right\"> {{item.amount | number}} </div>\r\n    </ng-template>\r\n  </data-table-column>\r\n  <data-table-column\r\n    [property]=\"'portion'\"\r\n    [header]=\"'Andel nuvarande värde'\"\r\n    [sortable]=\"true\"\r\n    [resizable]=\"true\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <div class=\"table-cell--right\"> {{item.portion | percent}} </div>\r\n    </ng-template>\r\n  </data-table-column>\r\n</data-table>\r\n\r\n<section class=\"row\">\r\n  <div class=\"col-sm-8 col-xs-12\">\r\n    <div class=\"box\">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"table-cell--right\">Totalkostnad</th>\r\n            <th class=\"table-cell--right\">Totalvärde</th>\r\n            <th class=\"table-cell--right\">Avkastning</th>\r\n            <th class=\"table-cell--right\">Utdelning (inköp)</th>\r\n            <th class=\"table-cell--right\">Utdelning (aktuellt)</th>\r\n            <th class=\"table-cell--right\">Förväntad årlig utdelning</th>     \r\n            <th class=\"table-cell--right\">Total utdelning</th>       \r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td class=\"table-cell--right white-text\">{{totalCost | number}} kr</td>\r\n            <td class=\"table-cell--right white-text\">{{totalValue | number}} kr</td>\r\n            <td class=\"table-cell--right white-text\">{{yield | percent}}</td>\r\n            <td class=\"table-cell--right white-text\">{{totalDividendCost | percent}}</td>\r\n            <td class=\"table-cell--right white-text\">{{totalDividendValue | percent}}</td>\r\n            <td class=\"table-cell--right white-text\">{{totalDividend | number}} kr</td>\r\n            <td class=\"table-cell--right white-text\">{{totalDividendSum | number}} kr</td>          \r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-4 col-xs-12 graybox\">\r\n    <div class=\"box\">\r\n      <h3>Regler</h3>\r\n      <ul>\r\n        <li>10-20 % utländska bolag</li>\r\n        <li>80 % av värdet ska ge direktavkastning</li>\r\n        <li>Undvik onödigt courtage. Handla t.ex. inte små poster på Nordic MTF</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stocks_service__ = __webpack_require__("../../../../../src/app/stocks.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_4_data_table__ = __webpack_require__("../../../../angular-4-data-table/src/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TableComponent = (function () {
    function TableComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.itemCount = 0;
        this.items = [];
        this.tablestocks = new __WEBPACK_IMPORTED_MODULE_2_angular_4_data_table__["b" /* DataTableResource */](this.dataService.stocks);
        this.oldItemCount = 0;
        this.oldItems = [];
        this.oldTablestocks = new __WEBPACK_IMPORTED_MODULE_2_angular_4_data_table__["b" /* DataTableResource */](this.dataService.oldStocks);
        this.industryCount = 0;
        this.industryitems = [];
        this.industries = new __WEBPACK_IMPORTED_MODULE_2_angular_4_data_table__["b" /* DataTableResource */](this.dataService.industries);
        this.marketCount = 0;
        this.marketitems = [];
        this.markets = new __WEBPACK_IMPORTED_MODULE_2_angular_4_data_table__["b" /* DataTableResource */](this.dataService.stockMarkets);
        this.title = 'app';
        this.stockToBuy = "";
        this.stocks = this.dataService.stocks;
        this.totalCost = this.dataService.totalCost;
        this.totalValue = this.dataService.totalValue;
        this.yield = this.totalValue / this.totalCost - 1;
        this.totalDividend = this.dataService.totalDividend;
        this.totalDividendSum = this.dataService.totalDividendSum;
        this.totalDividendCost = this.dataService.totalDividendCost;
        this.totalDividendValue = this.dataService.totalDividendValue;
        this.tablestocks.count().then(function (count) { return _this.itemCount = count; });
        this.oldTablestocks.count().then(function (count) { return _this.oldItemCount = count; });
        this.industries.count().then(function (industrycount) { return _this.industryCount = industrycount; });
        this.markets.count().then(function (marketcount) { return _this.marketCount = marketcount; });
    }
    TableComponent.prototype.reloadItems = function (params) {
        var _this = this;
        this.tablestocks.query(params).then(function (items) { return _this.items = items; });
    };
    TableComponent.prototype.reloadOldItems = function (params) {
        var _this = this;
        this.oldTablestocks.query(params).then(function (items) { return _this.oldItems = items; });
    };
    TableComponent.prototype.rowClick = function (rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    };
    TableComponent.prototype.rowDoubleClick = function (rowEvent) {
        //alert('Double clicked: ' + rowEvent.row.item.url);
        window.open(rowEvent.row.item.url, "_blank");
    };
    //Branscher
    TableComponent.prototype.reloadIndustries = function (params) {
        var _this = this;
        this.industries.query(params).then(function (industryitems) { return _this.industryitems = industryitems; });
    };
    TableComponent.prototype.rowClickIndustry = function (rowEvent) {
        console.log('clicked: ' + rowEvent.row.item.name);
    };
    TableComponent.prototype.rowDoubleClickIndustry = function (rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    };
    //Börser
    TableComponent.prototype.reloadMarkets = function (params) {
        var _this = this;
        this.markets.query(params).then(function (marketitems) { return _this.marketitems = marketitems; });
    };
    TableComponent.prototype.rowClickMarket = function (rowEvent) {
    };
    TableComponent.prototype.rowDoubleClickMarket = function (rowEvent) {
    };
    TableComponent.prototype.ngOnInit = function () {
    };
    return TableComponent;
}());
TableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-table',
        template: __webpack_require__("../../../../../src/app/table/table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/table/table.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__stocks_service__["a" /* StocksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__stocks_service__["a" /* StocksService */]) === "function" && _a || Object])
], TableComponent);

var _a;
//# sourceMappingURL=table.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map