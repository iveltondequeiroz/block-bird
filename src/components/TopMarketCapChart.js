import React, { Component } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import axios from 'axios';

class TopMarketCapChart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			chartType: this.props.chartType,
			data: {},
			options: {
				title: {
					display: true,
					text: "Today's Top 10 Cryptos by Market Cap (Billions $)",
					fontSize: 20
				},
				legend: {
					display: true,
					position: this.props.legendPosition
				},
				maintainAspectRatio: false
			},
			url: 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
		}
	}

	static defaultProps = {
		legendPosition: 'right'
	}

	componentWillMount() {
		let labels = [];
		let mktcap = [];
		axios.get(this.state.url)
			.then(res => {
				const cryptos = res.data.Data;
				cryptos.map((crypto) => {
					labels.push(crypto.CoinInfo.Name);
					mktcap.push(parseInt(crypto.RAW.USD.MKTCAP));
					return crypto;
				})
				this.setChartData(labels, mktcap);
			})

	}

	setChartData(cryptoLabels, mktcap) {
		this.setState({
			data: {
				labels: cryptoLabels,
				datasets: [{
					label: 'Market Cap',
					data: mktcap,
					backgroundColor: ['orange', 'gray', 'blue', 'green', 'black', 'blue', 'gray', 'gray', 'gold'],
					borderWidth: 3,
					hoverBorderWidth: 1,
					hoverBorderColor: 'black'
				}]
			}
		});
	}

	render() {
		return (
			<div className="topcap">
				{this.props.chartType === 'bar' &&
					< Bar
						data={this.state.data}
						options={this.state.options}
						width={100}
						height={460}
					/>
				}
				{this.props.chartType === 'doughnut' &&
					< Doughnut
						data={this.state.data}
						options={this.state.options}
						width={100}
						height={460}
					/>
				}

			</div>
		)
	}
}

export default TopMarketCapChart;
