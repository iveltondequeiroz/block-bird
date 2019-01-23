import React, { Component } from 'react';
import { HorizontalBar, Pie } from 'react-chartjs-2';


class TopMarketCapChart extends Component {
	constructor() {
		super();

		this.state = {
			data: {
				labels: ['BTC', 'XRP', 'ETH', 'BCH', 'EOS', 'XML', 'LTC', 'TRX', 'BSV', 'ADA'],
				datasets: [{
					label: 'Market Cap',
					data: [63307190, 13108237, 12421383, 2304829, 2227361, 1988543, 1935074, 1804838, 1334380, 1137484
					],
					backgroundColor: ['orange', 'gray', 'blue', 'green', 'black', 'blue', 'gray', 'gray', 'gold'],
					borderWidth: 3,
					hoverBorderWidth: 1,
					hoverBorderColor: 'black'
				}]
			},
			options: {
				title: {
					display: true,
					text: "Today's Top 10 Cryptos by Market Cap (Billions $)",
					fontSize: 20
				},
				legend: {
					display: true,
					position: 'bottom'
				},
				maintainAspectRatio: false
			}
		}
	}

	render() {
		return (
			<div className="topcap">
				<HorizontalBar
					data={this.state.data}
					options={this.state.options}
					width={100}
					height={460}
				/>
			</div>
		)
	}
}

export default TopMarketCapChart;
