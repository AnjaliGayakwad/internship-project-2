document.addEventListener('DOMContentLoaded', function () {
    const amountInput = document.getElementById('amount');
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');
    const convertBtn = document.getElementById('convert');
    const resultDiv = document.getElementById('result');

    // Mapping of currency codes to full names
    const currencyNames = {
        




    'USD': 'United States Dollar',
    'EUR': 'Euro',
    'JPY': 'Japanese Yen',
    'GBP': 'British Pound Sterling',
    'AUD': 'Australian Dollar',
    'CAD': 'Canadian Dollar',
    'CHF': 'Swiss Franc',
    'CNY': 'Chinese Yuan',
    'SEK': 'Swedish Krona',
    'NZD': 'New Zealand Dollar',
    'MXN': 'Mexican Peso',
    'SGD': 'Singapore Dollar',
    'HKD': 'Hong Kong Dollar',
    'KRW': 'South Korean Won',
    'TRY': 'Turkish Lira',
    'INR': 'Indian Rupee',
    'BRL': 'Brazilian Real',
    'RUB': 'Russian Ruble',
    'ZAR': 'South African Rand',
    'AED': 'United Arab Emirates Dirham',
    'SAR': 'Saudi Riyal',
    'THB': 'Thai Baht',
    'MYR': 'Malaysian Ringgit',
    'IDR': 'Indonesian Rupiah',
    'PLN': 'Polish Zloty',
    'HUF': 'Hungarian Forint',
    'CZK': 'Czech Koruna',
    'ILS': 'Israeli New Shekel',
    'CLP': 'Chilean Peso',
    'COP': 'Colombian Peso',
    'PHP': 'Philippine Peso',
    'RSD': 'Serbian Dinar',
    'BHD': 'Bahraini Dinar',
    'JOD': 'Jordanian Dinar',
    'KWD': 'Kuwaiti Dinar',
    'OMR': 'Omani Rial',
    'QAR': 'Qatari Rial',
    'DOP': 'Dominican Peso',
    'PEN': 'Peruvian Nuevo Sol',
    'NGN': 'Nigerian Naira',
    'VND': 'Vietnamese Dong',
    'MNT': 'Mongolian Tugrik',
    'BBD': 'Barbadian Dollar',
    'BMD': 'Bermudian Dollar',
    'XOF': 'West African CFA Franc',
    'XAF': 'Central African CFA Franc',
    'XPF': 'CFP Franc',
    'MAD': 'Moroccan Dirham',
    'TND': 'Tunisian Dinar',
    'LKR': 'Sri Lankan Rupee',
    'AFN': 'Afghan Afghani',
    'BDT': 'Bangladeshi Taka',
    'MMK': 'Myanmar Kyat',
    'GHS': 'Ghanaian Cedi',
    'MUR': 'Mauritian Rupee',
    'KES': 'Kenyan Shilling',
    'SYP': 'Syrian Pound',
    'JMD': 'Jamaican Dollar',
    'GYD': 'Guyanese Dollar',
    'XCD': 'East Caribbean Dollar',
    'BND': 'Brunei Dollar',
    'JEP': 'Jersey Pound',
    'GIP': 'Gibraltar Pound',
    'MZN': 'Mozambican Metical',
    'CUP': 'Cuban Peso',
    'CUC': 'Cuban Convertible Peso',
    'RWF': 'Rwandan Franc',
    'STN': 'Sao Tome and Principe Dobra',
    'BWP': 'Botswana Pula',
    'DJF': 'Djiboutian Franc',
    'ERN': 'Eritrean Nakfa',
    'NAD': 'Namibian Dollar',
    'SCR': 'Seychellois Rupee',
    'TJS': 'Tajikistani Somoni',
    'KGS': 'Kyrgystani Som',
    'KZT': 'Kazakhstani Tenge',
    'UGX': 'Ugandan Shilling',
    'LRD': 'Liberian Dollar',
    'MRO': 'Mauritanian Ouguiya',
    'YER': 'Yemeni Rial',
    'TZS': 'Tanzanian Shilling',
    'VUV': 'Vanuatu Vatu',
    'TOP': 'Tongan Paʻanga',
    'WST': 'Samoan Tala',
    'KPW': 'North Korean Won',
    'RSD': 'Serbian Dinar',
    'SLL': 'Sierra Leonean Leone',
    'TMT': 'Turkmenistani Manat',
    'GMD': 'Gambian Dalasi',
    'BIF': 'Burundian Franc',
    'ZMW': 'Zambian Kwacha',
    'XAU': 'Gold Ounce',
    'XAG': 'Silver Ounce',
    'XDR': 'Special Drawing Rights',
    'EUR': 'Euro',
    'JPY': 'Japanese Yen',
    'GBP': 'British Pound Sterling',
    'AUD': 'Australian Dollar',
    'CAD': 'Canadian Dollar',
    'CHF': 'Swiss Franc',
    'CNY': 'Chinese Yuan',
    'SEK': 'Swedish Krona',
    'NZD': 'New Zealand Dollar',
    'AMD': 'Armenian Dram',
    'ANG': 'Netherlands Antillean Guilder',
    'AOA': 'Angolan Kwanza',
    'ARS': 'Argentine Peso',
    'AWG': 'Aruban Florin',
    'AZN': 'Azerbaijani Manat',
    'BAM': 'Bosnia and Herzegovina Convertible Mark',
    'BSD': 'Bahamian Dollar',
    'BTN': 'Bhutanese Ngultrum',
    'BGN': 'Bulgarian Lev',
    'BOB': 'Bolivian Boliviano',
    'BYN': 'Belarusian Ruble',
    'BZD': 'Belize Dollar',
    'CDF': 'Congolese Franc',
    'CRC': 'Costa Rican Colón',
    'CVE': 'Cape Verdean Escudo',
    'DKK': 'Danish Krone',
    'DZD': 'Algerian Dinar',
    'EGP': 'Egyptian Pound',
    'ETB': 'Ethiopian Birr',
    'FJD': 'Fijian Dollar',
    'FKP': 'Falkland Islands Pound',
    'FOK': 'Faroese Króna',
    'GEL': 'Georgian Lari',
    'GGP': 'Guernsey Pound',
    'GNF': 'Guinean Franc',
    'GTQ': 'Guatemalan Quetzal',
    'HNL': 'Honduran Lempira',
    'HRK': 'Croatian Kuna',
    'HTG': 'Haitian Gourde',
    'IMP': 'Isle of Man Pound',
    'IQD': 'Iraqi Dinar',
    'IRR': 'Iranian Rial',
    'ISK': 'Icelandic Króna',
    'KHR': 'Cambodian Riel',
    'KID': 'Kiribati Dollar',
    'KMF': 'Comorian Franc',
    'KYD': 'Cayman Islands Dollar',
    'LAK': 'Laotian Kip',
    'LBP': 'Lebanese Pound',
    'LSL': 'Lesotho Loti',
    'LYD': 'Libyan Dinar',
    'MDL': 'Moldovan Leu',
    'MGA': 'Malagasy Ariary',
    'MKD': 'Macedonian Denar',
    'MOP': 'Macanese Pataca',
    'MRU': 'Mauritanian Ouguiya',
    'MVR': 'Maldivian Rufiyaa',
    'MWK': 'Malawian Kwacha',
    'NIO': 'Nicaraguan Córdoba',
    'NOK': 'Norwegian Krone',
    'NPR': 'Nepalese Rupee',
    'PAB': 'Panamanian Balboa',
    'PKR': 'Pakistani Rupee',
    'PYG': 'Paraguayan Guarani',
    'RON': 'Romanian Leu',
    'SBD': 'Solomon Islands Dollar',
    'SDG': 'Sudanese Pound',
    'SHP': 'Saint Helena Pound',
    'SLE': 'Sierra Leonean Leone',
    'SOS': 'Somali Shilling',
    'SRD': 'Surinamese Dollar',
    'SSP': 'South Sudanese Pound',
    'SZL': 'Swazi Lilangeni',
    'TTD': 'Trinidad and Tobago Dollar',
    'TVD': 'Tuvaluan Dollar',
    'TWD': 'New Taiwan Dollar',
    'UYU': 'Uruguayan Peso',
    'UAH': 'Ukrainian Hryvnia',
    'UZS': 'Uzbekistani Som',
    'VES': 'Venezuelan Bolívar Soberano',
    'ZWL': 'Zimbabwean Dollar'
        // Add more currencies as needed
    };

    const apiURL = `https://api.exchangerate-api.com/v4/latest/USD`;

    // Populate the currency dropdowns
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const currencies = Object.keys(data.rates);
            currencies.forEach(currency => {
                let option1 = document.createElement('option');
                option1.text = `${currency} - ${currencyNames[currency] || currency}`;
                option1.value = currency;
                fromCurrency.add(option1);

                let option2 = document.createElement('option');
                option2.text = `${currency} - ${currencyNames[currency] || currency}`;
                option2.value = currency;
                toCurrency.add(option2);
            });
        });

    // Convert the currency
    convertBtn.addEventListener('click', () => {
        const amount = amountInput.value;
        const from = fromCurrency.value;
        const to = toCurrency.value;

        if (amount === '') {
            resultDiv.innerHTML = 'Please enter an amount';
            return;
        }

        fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
            .then(response => response.json())
            .then(data => {
                const rate = data.rates[to];
                const convertedAmount = (amount * rate).toFixed(2);
                resultDiv.innerHTML = `${amount} ${currencyNames[from] || from} = ${convertedAmount} ${currencyNames[to] || to}`;
            });
    });
});
