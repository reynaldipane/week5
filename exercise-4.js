function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];

    var sisaStock;
    var profit    = [0,0,0];
    var pembeli   = [[],[],[]];
    var product   = [listBarang[0][0],listBarang[1][0],listBarang[2][0]];
    var leftOver  = [listBarang[0][2],listBarang[1][2],listBarang[2][2]]; 
    var balikan = [];


    if(shoppers.length > 0) {
        for(var i = 0; i < shoppers.length; i++) {
            for (var j = 0; j < listBarang.length; j++) {
              if (shoppers[i].product == listBarang[j][0]) {
                if(shoppers[i].amount <= listBarang[j][2]) {
                    sisaStock  = listBarang[j][2] - shoppers[i].amount;
                    listBarang[j][2] = sisaStock;
                    leftOver[j] = listBarang[j][2];
                    pembeli[j].push(shoppers[i].name);
                    profit[j] = profit[j] + (listBarang[j][1] * shoppers[i].amount);
                }
              } 
            }
        }
        
        for (i = 0; i < product.length; i++) {
          var objBalikan = {
            product  : product[i],
            shoppers : pembeli[i],
            leftOver : leftOver[i],
            totalProfit : profit[i]
          }
          balikan.push(objBalikan);
        }
    }
        
    return balikan;
    
}
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  // //[ { product: 'Sepatu Stacattu',
  // //   shoppers: [ 'Windi', 'Vanessa' ],
  // //   leftOver: 5,
  // //   totalProfit: 7500000 },
  // // { product: 'Baju Zoro',
  // //   shoppers: [],
  // //   leftOver: 2,
  // //   totalProfit: 0 },
  // // { product: 'Sweater Uniklooh',
  // //   shoppers: [],
  // //   leftOver: 1,
  // //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // // [ { product: 'Sepatu Stacattu',
  // //     shoppers: [ 'Windi' ],
  // //     leftOver: 2,
  // //     totalProfit: 12000000 },
  // //   { product: 'Baju Zoro',
  // //     shoppers: [ 'Devi', 'Lisa' ],
  // //     leftOver: 0,
  // //     totalProfit: 1000000 },
  // //   { product: 'Sweater Uniklooh',
  // //     shoppers: [ 'Rani' ],
  // //     leftOver: 0,
  // //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // // [ { product: 'Sepatu Stacattu',
  // //     shoppers: [],
  // //     leftOver: 10,
  // //     totalProfit: 0 },
  // //   { product: 'Baju Zoro',
  // //     shoppers: [],
  // //     leftOver: 2,
  // //     totalProfit: 0 },
  // //   { product: 'Sweater Uniklooh',
  // //     shoppers: [],
  // //     leftOver: 1,
  // //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]