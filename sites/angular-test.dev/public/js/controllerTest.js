(function() {

	"use strict";

	var app = angular.module("controllerTest", []);


	app.controller("CartController", function() {


		this.items = [];

		this.newItem = {
			price: 0,
			quantity: 1
		};

		this.addItem = function () {
			this.items.push(this.newItem);

			this.newItem = {
				price: 0,
				quantity: 1
			};
		};

		this.itemTotal = function () {
			var itemTotal = 0;

			for(var i = 0; i < this.items.length; i++) {
				itemTotal += this.items[i].price * this.items[i].quantity;
			}
			return itemTotal;
		}

		this.itemTaxes = function () {

			var totalWithTax = .08125 * this.itemTotal();
						

			return totalWithTax;
		}

		this.itemShipping = function () {
			var itemShipping = 0;

			for(var i = 0; i < this.items.length; i++) {
				itemShipping += 1.25 * this.items[i].quantity;
			}

			return itemShipping;

		}

		this.totalCost = function () {

			var totalCost = this.itemTotal() + this.itemTaxes() + this.itemShipping();
			return totalCost;
		}

		this.remove = function (index) {
			this.items.splice(index, 1);
		}

	});

})();