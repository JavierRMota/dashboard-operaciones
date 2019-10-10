<div className="row">
  <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
    <div className="row">
      <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
        <h2>VENTAS</h2>
        <DonutChartContainer data={donutChartData}
          categoryField="tipo" field="cantidad" />
      </div>
      <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 col-xl-2">
        <div className="percentage-container">
          <span className="percentage-number">94</span>
          <span className="percentage-sign">%</span>
          <p>CUSTOMER SATISFACTION</p>
        </div>
        <div className="percentage-container">
          <span className="percentage-number">89</span>
          <span className="percentage-sign">%</span>
          <p>TARGET SALES</p>
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <BarChartContainer categories={barChartQ4Months}
          data={barChartMonthlyPercentages} />
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <ArcGaugeContainer />
      </div>
    </div>
  </div>
</div>
