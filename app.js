const { load } = require('csv-load-sync');

function loademup(csv) {
  let results = load(csv, {
    skip: ['Name', 'Open', 'Close', 'Volume'],
  })

  return results
}


function newSerialNumber(sno, symbol) {
  return sno + "-" + symbol
}

function convertToNum(numberString) {
  numberString = parseFloat(numberString).toFixed(8)
  return parseFloat(numberString)
}

function newDate(date) {
  let splitDate = date.split("-")
  let finalString

  if (splitDate[1] == 01) {
    finalString = "January " + splitDate[2] + ", " + splitDate[0]
  } else if (splitDate[1] == 02) {
    finalString = "February " + splitDate[2] + ", " + splitDate[0]
  } else if (splitDate[1] == 03) {
    finalString = "March " + splitDate[2] + ", " + splitDate[0]
  } else if (splitDate[1] == 04) {
    finalString = "April " + splitDate[2] + ", " + splitDate[0]
  } else if (splitDate[1] == 05) {
    finalString = "May " + splitDate[2] + ", " + splitDate[0]
  } else if (splitDate[1] == 06) {
    finalString = "June " + splitDate[2] + ", " + splitDate[0]
  } else if (splitDate[1] == 07) {
    finalString = "July " + splitDate[2] + ", " + splitDate[0]
  } else if (splitDate[1] == 08) {
    finalString = "August " + splitDate[2] + ", " + splitDate[0]
  } else if (splitDate[1] == 09) {
    finalString = "September " + splitDate[2] + ", " + splitDate[0]
  } else if (splitDate[1] == 10) {
    finalString = "October " + splitDate[2] + ", " + splitDate[0]
  } else if (splitDate[1] == 11) {
    finalString = "November " + splitDate[2] + ", " + splitDate[0]
  } else if (splitDate[1] == 12) {
    finalString = "December " + splitDate[2] + ", " + splitDate[0]
  }

  return finalString
}

function newIdentifier(coinList) {
  let highest = 0
  let coin
  for (let i = 0; i < coinList.length; i++) {
    coinList[i].SNo = newSerialNumber(coinList[i].SNo, coinList[i].Symbol)
    coinList[i].Low = convertToNum(coinList[i].Low)
    coinList[i].High = convertToNum(coinList[i].High)
    coinList[i].Marketcap = convertToNum(parseInt(coinList[i].Marketcap))
    coinList[i].Date = coinList[i].Date.split(" ")[0]

    coinList[i].Date = newDate(coinList[i].Date)

    coinList[i].marketMovement = "up"

    if (coinList[i].High > highest) {
      highest = coinList[i].High
      coinList[i].peak = highest
    } else {
      coinList[i].peak = highest
    }

    if (i == 0) {
      continue
    }

    if (coinList[i].High > coinList[i-1].High) {
      coinList[i].marketMovement = "up"
    } else {
      coinList[i].marketMovement = "down"
    }


  }
}

const bitcoin = loademup('coin_Bitcoin.csv')
const dogecoin = loademup('coin_Dogecoin.csv')
const ethereum = loademup('coin_Ethereum.csv')

newIdentifier(bitcoin)
console.log(bitcoin)
// console.log(newSerialNumber(bitcoin[0].SNo, bitcoin[0].Symbol))

