(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{178:function(t,a,e){"use strict";e.r(a);var r=e(0),s=Object(r.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("支持从本地开发阶段，到集成测试阶段，以及上线前验证阶段的一系列数据环境需求，研发与测试工程师只需面向 DataHub 管理数据即可。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("采用去中心化设计，本地研发阶段每项实例都拥有一份独立的数据，数据为明文，可随当前项目版本管理工具进行版本化归档，使得项目数据能做到随开随用，支持离线开发。")]),t._v(" "),e("p",[t._v("另外，每份数据都可向远端服务推送并同步，满足中心化协同的需要。")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("采用单向数据流动的原则，使当前项目下的数据状态及时变更。")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),e("p",[t._v("DataHub 将 Mock 数据与字段描述整合处理，自动生成接口文档。使得文档能够与交互字段随时保持一致。")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),e("p",[t._v("DataHub 采用多场景设计，能够根据场景名称进行数据分组，同时提供了场景数据的增、删、改，可以通过 DataHub 的面板界面进行操作。")]),t._v(" "),e("p",[t._v("Datahub 可以定义动态路径，底层使用的是 "),e("a",{attrs:{href:"https://github.com/pillarjs/path-to-regexp",target:"_blank",rel:"noopener noreferrer"}},[t._v("path-to-regexp"),e("OutboundLink")],1),t._v(" 。")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),e("p",[t._v("DataHub 兼备代理功能，会将最近请求的实时响应保存下来，便于归档。也就是说你可以通过已归档的快照随时复现当时的场景。")]),t._v(" "),t._m(13)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"设计理念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计理念","aria-hidden":"true"}},[this._v("#")]),this._v(" 设计理念")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"多环节覆盖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多环节覆盖","aria-hidden":"true"}},[this._v("#")]),this._v(" 多环节覆盖")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"https://wx4.sinaimg.cn/large/6d308bd9gy1fokqvum2gsj20s10l70vh.jpg",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"去中心化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#去中心化","aria-hidden":"true"}},[this._v("#")]),this._v(" 去中心化")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"https://wx3.sinaimg.cn/large/6d308bd9gy1fokxgydf80j20np0cr0ts.jpg",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"数据流动管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据流动管理","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据流动管理")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"https://wx1.sinaimg.cn/large/6d308bd9gy1fokxgywfajj20mx0g0wfj.jpg",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"文档一致性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档一致性","aria-hidden":"true"}},[this._v("#")]),this._v(" 文档一致性")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"https://ws1.sinaimg.cn/large/bceaad1fly1fwkm6c8rh3j22a41g8jzd.jpg",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"场景管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#场景管理","aria-hidden":"true"}},[this._v("#")]),this._v(" 场景管理")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",[e("thead",[e("tr",[e("th",[t._v("DataHub API 定义")]),t._v(" "),e("th",[t._v("匹配的 URL 路径")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("api1/books")]),t._v(" "),e("td",[t._v("api1/books")])]),t._v(" "),e("tr",[e("td",[t._v("api2/:foo/:bar")]),t._v(" "),e("td",[t._v("api2/group/project")])]),t._v(" "),e("tr",[e("td",[t._v("api3/:id")]),t._v(" "),e("td",[t._v("api3/fred")])]),t._v(" "),e("tr",[e("td",[t._v("api3/:id")]),t._v(" "),e("td",[t._v("api3/baz")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"https://ws1.sinaimg.cn/large/bceaad1fly1fwkm6bxcllj22a41g848i.jpg",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"快照录入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快照录入","aria-hidden":"true"}},[this._v("#")]),this._v(" 快照录入")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"https://ws1.sinaimg.cn/large/bceaad1fly1fwkm6ati9ij21kw13ado5.jpg",alt:""}})])}],!1,null,null,null);a.default=s.exports}}]);